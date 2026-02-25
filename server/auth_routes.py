from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel, Field
from models import User
from security import hash_password, verify_password, create_access_token, get_current_user
from typing import Optional

router = APIRouter(prefix="/auth", tags=["auth"])


class RegisterRequest(BaseModel):
    contact: str = Field(pattern=r"^[0-9]{10}$")
    password: str = Field(min_length=8)
    username: str
    fullname: str
    state: str
    district: str


class LoginRequest(BaseModel):
    contact: str = Field(pattern=r"^[0-9]{10}$")
    password: str


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(data: RegisterRequest):

    # 🔎 Check contact uniqueness first
    if await User.find_one(User.contact == data.contact):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Contact already registered"
        )

    # 🔎 Check username uniqueness
    if await User.find_one(User.username == data.username):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken"
        )

    # 🔐 Hash password
    hashed = hash_password(data.password)

    user_data = data.model_dump(exclude={"password"})
    user = User(**user_data, password_hash=hashed)

    await user.insert()

    return {"message": "User registered successfully"}


@router.post("/login")
async def login(data: LoginRequest):
    user = await User.find_one(User.contact == data.contact)

    # Secure generic exception
    unauthorized_exc = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid contact or password",
        headers={"WWW-Authenticate": "Bearer"},
    )

    if not user or not verify_password(data.password, user.password_hash):
        raise unauthorized_exc

    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}


# auth_routes.py additions

class UserUpdate(BaseModel):
    fullname: Optional[str] = None
    contact: Optional[str] = Field(None, pattern=r"^[0-9]{10}$")
    state: Optional[str] = None
    district: Optional[str] = None
    profile_pic: Optional[str] = None


@router.get("/me")
async def get_me(current_user: User = Depends(get_current_user)):
    # This returns the full User object from the DB in real-time
    return current_user


@router.put("/update", status_code=status.HTTP_200_OK)
async def update_profile(data: UserUpdate, current_user: User = Depends(get_current_user)):
    update_data = data.model_dump(exclude_unset=True)

    if not update_data:
        raise HTTPException(status_code=400, detail="No data provided for update")

    # Update fields dynamically
    for field, value in update_data.items():
        setattr(current_user, field, value)

    await current_user.save()
    return {"message": "Profile updated successfully", "user": current_user}
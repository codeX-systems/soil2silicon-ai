import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav_home": "Home",
      "nav_dashboard": "Dashboard",
      "nav_auth": "Login / Sign Up",
      "logout": "Logout",

      // Auth
      "login": "Login",
      "signup": "Sign Up",
      "email": "Email Address",
      "password": "Password",
      "confirm_password": "Confirm Password",
      "forgot_password": "Forgot Password?",
      "no_account": "Don't have an account?",
      "have_account": "Already have an account?",
      "submit": "Submit",
      "create_account": "Create Account",

      // Dashboard
      "dash_title": "Farm Control Center",
      "feature_grow": "Grow New",
      "feature_predict": "Predict",
      "feature_weather": "Weather",
      "feature_soil": "Soil",
      "feature_trends": "Trends",
      "label_tasks": "Tasks",
      "label_crops": "Crops",
      "label_soil_logs": "Soil Logs",

      // Modals
      "predict_title": "AI Crop Predictor",
      "run_prediction": "Run AI Prediction",
      "analyzing": "Analyzing...",
      "recommendation": "Recommendation",
      "try_again": "Try Again",
      "market_trends": "Market Trends",
      "weather_insights": "Weather Insights",
      "save_changes": "Save Changes",
      "full_name": "Full Name",
      "district": "District",
      "state": "State",
      "soil_type": "Soil Type",
      "moisture": "Moisture %",
      "crop_name": "Crop Name",
      "planted_date": "Planted Date",
      "exp_harvest": "Exp. Harvest",
      "no_data": "No data logged yet.",
      "btn_add_task": "Add New Task",
      "close": "Close",

      // ---- AUTO ADDED KEYS ----
      "auto_contact_number": "Contact Number",
      "auto_profile_pic_url": "Profile Pic URL",
      "auto_due": "Due",
      "auto_info": "Info:",
      "auto_no_description_provided": "No description provided.",
      "auto_mark_done": "Mark Done",
      "auto_delete": "Delete",
      "auto_region_prefix": "Region:",
      "auto_based_on_regional_trends": "Based on regional trends in {{region}}.",
      "auto_trends_updated": "Trends updated from regional wholesale indices.",
      "auto_optimal_for_irrigation_today": "Optimal for irrigation today.",
      "auto_new_task": "New Task",
      "auto_title_label": "Title",
      "auto_description_label": "Description",
      "auto_due_date_label": "Due Date",
      "auto_soil_update": "Soil Update",
      "auto_save_records": "Save Records",
      "auto_start_new_growth": "Start New Growth",
      "auto_start_month_label": "Start Month (1-12)",
      "auto_end_month_label": "End Month",
      "auto_register_crop": "Register Crop",
      "auto_active_crops": "Active Crops",
      "auto_no_active_crops": "No active crops.",
      "auto_create_task": "Create Task",
      "auto_rainfall": "Rainfall",
      "auto_sunlight": "Sunlight",
      "auto_temperature": "Temperature",
      "auto_humidity": "Humidity",

      // Footer

      "footer_github": "GitHub",
      "footer_youtube": "YouTube",
      "footer_codex_logo": "CodeX Logo",
      "footer_app_logo": "App Logo",
      "footer_developed_by": "Developed by CodeX",
      "footer_rights": "© 2026 Soil To Silicon (Soil2Silicon) — Open Source",
      "footer_powered_by": "© Powered By CodeX",
      "footer_version": "Version Alpha 2.0.1",
      "footer_help": "Help",
      "footer_contact": "Contact Us",

      // Harvest

      "harvest_growth_progress": "Growth Progress",
      "harvest_others": "+ Others",
      "harvest_ready": "Ready for Harvest",
      "harvest_maturing": "Maturing...",
      "harvest_ripening_soon": "Ripening soon",
      "harvest_in_growth": "In growth stage",

      // Username

      "username_welcome_back": "Welcome back,",
      "username_default_farmer": "Farmer",
      "username_default_user": "User",
      "username_alt_profile": "User Profile",

      // Tasks

      "task_active": "Tasks Active",

      // Main Navbar

      "nav_solutions": "Our Solutions",
      "nav_codex": "CodeX",
      "nav_contact": "Contact",
      "nav_launch_app": "Launch App",

      // Main Hero-Container

      "hero_titleLine1": "Bringing Soil And ",
      "hero_titleHighlight": "Silicon Together",
      "hero_description": "Empower your farm with AI-driven crop monitoring, real-time weather insights, soil intelligence, and predictive harvest planning — all in one smart platform built for modern farmers.",
      "hero_cta": "Get Started",
      "hero_badge": "AI Powered Farm Insights",

      // Next Card

      "nextgen_badge": "Next-Gen Agriculture AI",

      // Card

      "samplecard_title": "Soil_2_Silicon",
      "samplecard_badge": "Neural AI",
      "samplecard_accuracy": "Accuracy",
      "samplecard_farms": "Farms Tracked",
      "samplecard_roi": "ROI",

      // Main Card

      "soilcard_title": "QUANTUM_FARM.exe",
      "soilcard_status": "Neural Active",
      "soilcard_metric1": "Crop Optimization",
      "soilcard_metric2": "Hectares Monitored",
      "soilcard_metric3": "Yield Enhancement",

      // Solutions

      "solutions_title1": "AI-Driven Crop Intelligence",
      "solutions_1_slide1": "Soil-based crop and variety recommendations",
      "solutions_1_slide2": "No Installation",
      "solutions_1_slide3": "Disease detection And Guidance",
      "solutions_1_slide4": "Smarter planning using data insights",

      "solutions_title2": "Precision Soil & Fertilizer Guidance",
      "solutions_2_slide1": "AI-based soil type identification",
      "solutions_2_slide2": "Crop-specific fertilizer recommendations",
      "solutions_2_slide3": "Nutrient balance for healthier soil",
      "solutions_2_slide4": "Reduced waste, improved productivity",

      "solutions_title3": "Smart Farming with Soil Monitoring",
      "solutions_3_slide1": "Real-time soil moisture tracking",
      "solutions_3_slide2": "pH, NPK, and temperature sensing",
      "solutions_3_slide3": "Remote farm condition monitoring",
      "solutions_3_slide4": "Data-driven field decisions",

      "solutions_title4": "Sustainable & Climate-Aware Agriculture",
      "solutions_4_slide1": "Weather-based farming recommendations",
      "solutions_4_slide2": "Optimized water and resource usage",
      "solutions_4_slide3": "Eco-friendly nutrient management",
      "solutions_4_slide4": "Long-term soil sustainability",

      "solutions_title5": "Voice-Enabled & Inclusive Farming",
      "solutions_5_slide1": "Multilingual AI Response",
      "solutions_5_slide2": "Simple, farmer-friendly interface",
      "solutions_5_slide3": "Multilingual Support Across App",
      "solutions_5_slide4": "Accessible insights for all literacy levels",

      // Crops (WB)
      "crops":{
      "rice": "Rice",
    "maize": "Maize",
    "wheat": "Wheat",
    "barley": "Barley",
    "millets": "Millets",
    "potato": "Potato",
    "brinjal": "Brinjal (Eggplant)",
    "cabbage": "Cabbage",
    "cauliflower": "Cauliflower",
    "okra": "Okra (Lady's Finger)",
    "cucumber": "Cucumber",
    "tomato": "Tomato",
    "carrot": "Carrot",
    "radish": "Radish",
    "pumpkin": "Pumpkin",
    "bitter_gourd": "Bitter Gourd",
    "pointed_gourd": "Pointed Gourd (Potol)",
    "spinach": "Spinach (Palak)",
    "onion": "Onion",
    "mango": "Mango",
    "pineapple": "Pineapple",
    "banana": "Banana",
    "litchi": "Litchi",
    "guava": "Guava",
    "jackfruit": "Jackfruit",
    "papaya": "Papaya",
    "orange": "Orange",
    "apple": "Apple",
    "plum": "Plum",
    "custard_apple": "Custard Apple",
    "bael": "Bael (Bengal Quince)",
    "jute": "Jute",
    "tea": "Tea",
    "sugarcane": "Sugarcane",
    "betel_leaves": "Betel Leaves",
    "cotton": "Cotton",
    "mustard": "Mustard",
    "sesame": "Sesame (Til)",
    "lentil": "Lentil (Masoor)",
    "gram": "Gram",
    "mung_bean": "Mung Bean",
    "black_cumin": "Black Cumin (Kalo Jeera)",
    "chilli": "Chilli",
    "ginger": "Ginger",
    "turmeric": "Turmeric",
    "cardamom": "Cardamom",
    "coriander": "Coriander",
    "cinnamon": "Cinnamon",
    "fenugreek": "Fenugreek (Methi)",
    "groundnut": "Groundnut (Peanut)",
    "sunflower": "Sunflower",
    "lathyrus": "Lathyrus",
    "bottle_gourd": "Bottle Gourd",
    "ridge_gourd": "Ridge Gourd",
    "snake_gourd": "Snake Gourd",
    "sponge_gourd": "Sponge Gourd",
    "drumstick": "Drumstick (Moringa)",
    "sweet_potato": "Sweet Potato",
    "yam": "Yam",
    "taro": "Taro (Colocasia)",
    "cassava": "Cassava (Tapioca)",
    "watermelon": "Watermelon",
    "muskmelon": "Muskmelon",
    "cluster_bean": "Cluster Bean (Guar)",
    "french_bean": "French Bean",
    "kidney_bean": "Kidney Bean (Rajma)",
    "cowpea": "Cowpea (Lobia)",
    "black_gram": "Black Gram (Urad)",
    "pigeon_pea": "Pigeon Pea (Arhar/Tur)",
    "field_pea": "Field Pea (Garden Pea)",
    "linseed": "Linseed (Flax)",
    "safflower": "Safflower",
    "mesta": "Mesta (Kenaf)",
    "areca_nut": "Areca Nut",
    "coconut": "Coconut",
    "sweet_corn": "Sweet Corn",
    "foxtail_millet": "Foxtail Millet",
    "sorghum": "Sorghum (Jowar)",
    "pearl_millet": "Pearl Millet (Bajra)",
    "makhana": "Makhana",
    "sapota": "Sapota (Chikoo)",
    "rubber": "Rubber",
    "persimmon": "Persimmon (Kaki)",
    "peach": "Peach",
    "apricot": "Apricot",
    "walnut": "Walnut",
    "almond": "Almond",
    "kiwi": "Kiwi",
    "passion_fruit": "Passion Fruit",
    "large_cardamom": "Large Cardamom",
    "black_pepper": "Black Pepper",
    "galangal": "Galangal",
    "ashwagandha": "Ashwagandha",
    "stevia": "Stevia",
    "aloe_vera": "Aloe Vera",
    "tinda": "Tinda (Indian Round Gourd)",
    "celery": "Celery",
    "lettuce": "Lettuce",
    "beetroot": "Beetroot",
    "turnip": "Turnip",
    "broccoli": "Broccoli",
    "garlic": "Garlic",
    "tobacco": "Tobacco",
    "dolichos_bean": "Dolichos Bean",
    "jalpai": "Jalpai (Indian Olive)",
    "latka": "Latka (Burmese Grape)",
    "panial": "Panial (Indian Coffee Plum)",
    "water_apple": "Water Apple (Rose Apple)",
    "longan": "Longan",
    "carambola": "Carambola (Star Fruit)",
    "date": "Date (Khajur)",
    "tuberose": "Tuberose (Rajnigandha)",
    "betel_vine": "Betel Vine (Pan)",
    "coffee": "Coffee",
    "jamun": "Jamun (Black Plum)",
    "jatropha": "Jatropha",
    "kalmegh": "Kalmegh",
    "lemon_grass": "Lemon Grass",
    "neem": "Neem",
    "pomegranate": "Pomegranate",
    "rose": "Rose",
    "soybean": "Soybean",
    "ash_gourd": "Ash Gourd",
    "capsicum": "Capsicum (Bell Pepper)",
    "castor": "Castor (Rehri)",
    "fennel": "Fennel (Saunf)",
    "fig": "Fig (Dumur)",
    "oat": "Oat (Jai)",
    "cherry": "Cherry",
    "chicory": "Chicory (Kasni)",
    "clove": "Clove (Labanga)",
    "dragon_fruit": "Dragon Fruit",
    "gerbera": "Gerbera",
    "jasmine": "Jasmine",
    "marigold": "Marigold (Genda)",
    "shatavari": "Shatavari",
    "zucchini": "Zucchini"
      },
    
    "view_health_guide": "View Health Guide",
    "label_soil_library": "Soil Intelligence Library",
    "field_reading_history": "Field Reading History",
    "health_diagnostic": "Health Diagnostic",
    "recommended_treatment": "Recommended Treatment",
    "soil_alluvial": "Alluvial Soil",
    "soil_desc_alluvial": "Highly fertile soil found in river plains. Rich in phosphorus and potassium, perfect for wheat and rice.",
    "soil_black": "Black Soil",
    "soil_desc_black": "Also known as Regur soil. Moisture-retentive and rich in iron and lime; ideal for cotton and pulses.",
    "soil_red": "Red Soil",
    "soil_desc_red": "Formed from crystalline rock. High iron content makes it red. Good for tobacco, millets, and oilseeds.",
    "soil_loamy": "Loamy Soil",
    "soil_desc_loamy": "A balanced mix of sand, silt, and clay. Excellent drainage and nutrients for almost all vegetables.",
    
    // footer-main
  "footer": {
    "brandNamePart1": "Soil",
    "brandNamePart2": "2",
    "brandNamePart3": "Silicon",
    "description": "Pioneering digital agriculture through ML Ops and high-performance web development.",
    "links": {
      "home": "Home",
      "about": "About Team",
      "contact": "Contact"
    },
    "copyright": "© {{year}} CodeX Open Source. Licence Awaited.",
    "legal": {
      "privacy": "Privacy Policy",
      "terms": "Terms of Service Awaited"
    }
  },
  "section6": {
    "titlePart1": "Let’s build the",
    "titleHighlight": "future",
    "titlePart2": "of agriculture.",
    "description": "Whether you're interested in our ML models, web architecture, or just want to talk shop about ML Ops—we're always open to collaboration.",
    "ctaCard": {
      "title": "Feedback Form",
      "description": "Help us ceate a better app by providing your valuable insights.",
      "button": "Feedback Form"
    }
  },
  "section5": {
    "header": "CodeX",
    "teamIntro": {
      "part1": "A specialized development team focused extensively on modern",
      "webDev": "Web Development",
      "and": "and",
      "mlOps": "ML Ops"
    },
    "mission": {
      "label": "The Mission",
      "statement": "Building a centralised digital agriculture solution that seamlessly wraps cultivation guidance with ML-based crop recommendation and real-time monitoring."
    },
    "features": {
      "collab": {
        "title": "Collaborative Coding",
        "desc": "Build projects together in real-time with global developers."
      },
      "version": {
        "title": "Version Control",
        "desc": "Integrated Git workflows for seamless project management."
      },
      "intelligence": {
        "title": "Open Source Tech Stack",
        "desc": "Use Of Open Source Tech Stack For Enhancing Coding Communities."
      }
    }
  }
    }
  },

  hi: {
    translation: {
      "nav_home": "होम",
      "nav_dashboard": "डैशबोर्ड",
      "nav_auth": "लॉगिन / साइन अप",
      "logout": "लॉगआउट",

      "login": "लॉगिन",
      "signup": "साइन अप",
      "email": "ईमेल पता",
      "password": "पासवर्ड",
      "confirm_password": "पासवर्ड की पुष्टि करें",
      "forgot_password": "पासवर्ड भूल गए?",
      "no_account": "खाता नहीं है?",
      "have_account": "पहले से खाता है?",
      "submit": "जमा करें",
      "create_account": "खाता बनाएं",

      "dash_title": "फार्म कंट्रोल सेंटर",
      "feature_grow": "नई खेती",
      "feature_predict": "पूर्वानुमान",
      "feature_weather": "मौसम",
      "feature_soil": "मिट्टी",
      "feature_trends": "रुझान",
      "label_tasks": "कार्य",
      "label_crops": "फसलें",
      "label_soil_logs": "मिट्टी लॉग",

      "predict_title": "एआई फसल भविष्यवक्ता",
      "run_prediction": "पूर्वानुमान करें",
      "analyzing": "विश्लेषण हो रहा है...",
      "recommendation": "सिफारिश",
      "try_again": "फिर प्रयास करें",
      "market_trends": "बाजार रुझान",
      "weather_insights": "मौसम जानकारी",
      "save_changes": "बदलाव सहेजें",
      "full_name": "पूरा नाम",
      "district": "ज़िला",
      "state": "राज्य",
      "soil_type": "मिट्टी का प्रकार",
      "moisture": "नमी %",
      "crop_name": "फसल का नाम",
      "planted_date": "रोपण तिथि",
      "exp_harvest": "संभावित कटाई",
      "no_data": "अभी तक कोई डेटा नहीं।",
      "btn_add_task": "नया कार्य जोड़ें",
      "close": "बंद करें",

      // Auto
      "auto_contact_number": "संपर्क नंबर",
      "auto_profile_pic_url": "प्रोफ़ाइल फोटो लिंक",
      "auto_due": "अंतिम तिथि",
      "auto_info": "जानकारी:",
      "auto_no_description_provided": "कोई विवरण उपलब्ध नहीं।",
      "auto_mark_done": "पूर्ण करें",
      "auto_delete": "हटाएँ",
      "auto_region_prefix": "क्षेत्र:",
      "auto_based_on_regional_trends": "{{region}} के क्षेत्रीय रुझानों पर आधारित।",
      "auto_trends_updated": "रुझान क्षेत्रीय थोक सूचकांकों से अपडेट किए गए।",
      "auto_optimal_for_irrigation_today": "आज सिंचाई के लिए उपयुक्त।",
      "auto_new_task": "नया कार्य",
      "auto_title_label": "शीर्षक",
      "auto_description_label": "विवरण",
      "auto_due_date_label": "अंतिम तिथि",
      "auto_soil_update": "मिट्टी अपडेट",
      "auto_save_records": "रिकॉर्ड सहेजें",
      "auto_start_new_growth": "नई खेती शुरू करें",
      "auto_start_month_label": "शुरुआती महीना (1-12)",
      "auto_end_month_label": "अंत महीना",
      "auto_register_crop": "फसल पंजीकरण",
      "auto_active_crops": "सक्रिय फसलें",
      "auto_no_active_crops": "कोई सक्रिय फसल नहीं।",
      "auto_create_task": "कार्य बनाएं",
      "auto_rainfall": "वर्षा",
      "auto_sunlight": "धूप",
      "auto_temperature": "तापमान",
      "auto_humidity": "आर्द्रता",

      // Footer

      "footer_github": "गिटहब",
      "footer_youtube": "यूट्यूब",
      "footer_codex_logo": "कोडएक्स लोगो",
      "footer_app_logo": "ऐप लोगो",
      "footer_developed_by": "CodeX द्वारा विकसित",
      "footer_rights": "© 2025 Soil To Silicon — सर्वाधिकार सुरक्षित",
      "footer_powered_by": "© CodeX द्वारा संचालित",
      "footer_version": "संस्करण Alpha 2.0.1",
      "footer_help": "सहायता",
      "footer_contact": "संपर्क करें",

      // Harvest

      "harvest_growth_progress": "विकास प्रगति",
      "harvest_others": "+ अन्य",
      "harvest_ready": "कटाई के लिए तैयार",
      "harvest_maturing": "पक रहा है...",
      "harvest_ripening_soon": "जल्द पकने वाला",
      "harvest_in_growth": "विकास चरण में",

      // Username

      "username_welcome_back": "वापसी पर स्वागत है,",
      "username_default_farmer": "किसान",
      "username_default_user": "उपयोगकर्ता",
      "username_alt_profile": "उपयोगकर्ता प्रोफ़ाइल",

      // Tasks

      "task_active": "सक्रिय कार्य",

      // Main Navbar

      "nav_solutions": "हमारे समाधान",
      "nav_codex": "कोडएक्स",
      "nav_contact": "संपर्क",
      "nav_launch_app": "ऐप शुरू करें",

      // Main Hero-Container

      "hero_titleLine1": "मिट्टी को जोड़ना",
      "hero_titleHighlight": "स्मार्ट तकनीक से",
      "hero_description": "एआई आधारित फसल निगरानी, रियल-टाइम मौसम जानकारी, मिट्टी विश्लेषण और पूर्वानुमानित फसल योजना के साथ अपने खेत को सशक्त बनाएं।",
      "hero_cta": "शुरू करें",
      "hero_badge": "एआई संचालित कृषि विश्लेषण",

      // Next Card

      "nextgen_badge": "Next-Gen Agriculture AI",

      // Card

      "samplecard_title": "सॉइल_2_सिलिकॉन",
      "samplecard_badge": "न्यूरल एआई",
      "samplecard_accuracy": "सटीकता",
      "samplecard_farms": "ट्रैक किए गए फार्म",
      "samplecard_roi": "लाभ अनुपात",

      // Main Card

      "soilcard_title": "क्वांटम_फार्म.exe",
      "soilcard_status": "न्यूरल सक्रिय",
      "soilcard_metric1": "फसल अनुकूलन",
      "soilcard_metric2": "निगरानी किए गए हेक्टेयर",
      "soilcard_metric3": "उपज वृद्धि",

      // Solutions

      "solutions_title1": "एआई संचालित फसल बुद्धिमत्ता",
"solutions_1_slide1": "मिट्टी आधारित फसल और किस्म सिफारिशें",
"solutions_1_slide2": "एमएल आधारित उपज पूर्वानुमान मॉडल",
"solutions_1_slide3": "फसल छवियों से रोग पहचान",
"solutions_1_slide4": "डेटा आधारित स्मार्ट योजना",

"solutions_title2": "सटीक मिट्टी और उर्वरक मार्गदर्शन",
"solutions_2_slide1": "एआई आधारित मिट्टी प्रकार पहचान",
"solutions_2_slide2": "फसल विशेष उर्वरक सिफारिशें",
"solutions_2_slide3": "स्वस्थ मिट्टी के लिए पोषक संतुलन",
"solutions_2_slide4": "कम अपशिष्ट, अधिक उत्पादकता",

"solutions_title3": "IoT निगरानी के साथ स्मार्ट खेती",
"solutions_3_slide1": "रियल-टाइम मिट्टी नमी ट्रैकिंग",
"solutions_3_slide2": "pH, NPK और तापमान सेंसर",
"solutions_3_slide3": "दूरस्थ खेत स्थिति निगरानी",
"solutions_3_slide4": "डेटा आधारित खेत निर्णय",

"solutions_title4": "सतत और जलवायु-सचेत कृषि",
"solutions_4_slide1": "मौसम आधारित खेती सिफारिशें",
"solutions_4_slide2": "जल और संसाधनों का अनुकूल उपयोग",
"solutions_4_slide3": "पर्यावरण अनुकूल पोषक प्रबंधन",
"solutions_4_slide4": "दीर्घकालिक मिट्टी स्थिरता",

"solutions_title5": "वॉयस सक्षम और समावेशी कृषि",
"solutions_5_slide1": "बहुभाषी एआई वॉयस सहायता",
"solutions_5_slide2": "सरल, किसान-अनुकूल इंटरफ़ेस",
"solutions_5_slide3": "कम कनेक्टिविटी के लिए ऑफलाइन समर्थन",
"solutions_5_slide4": "सभी साक्षरता स्तरों के लिए सुलभ जानकारी",

    // Crops
    "crops":{
      "rice": "चावल",
    "maize": "मक्का",
    "wheat": "गेहूं",
    "barley": "जौ",
    "millets": "बाजरा/मोटे अनाज",
    "potato": "आलू",
    "brinjal": "बैंगन",
    "cabbage": "पत्ता गोभी",
    "cauliflower": "फूलगोभी",
    "okra": "भिंडी",
    "cucumber": "खीरा",
    "tomato": "टमाटर",
    "carrot": "गाजर",
    "radish": "मूली",
    "pumpkin": "कद्दू",
    "bitter_gourd": "करेला",
    "pointed_gourd": "परवल",
    "spinach": "पालक",
    "onion": "प्याज",
    "mango": "आम",
    "pineapple": "अनानास",
    "banana": "केला",
    "litchi": "लीची",
    "guava": "अमरूद",
    "jackfruit": "कटहल",
    "papaya": "पपीता",
    "orange": "संतरा",
    "apple": "सेब",
    "plum": "आलूबुखारा",
    "custard_apple": "सीताफल",
    "bael": "बेल",
    "jute": "जूट",
    "tea": "चाय",
    "sugarcane": "गन्ना",
    "betel_leaves": "पान के पत्ते",
    "cotton": "कपास",
    "mustard": "सरसों",
    "sesame": "तिल",
    "lentil": "मसूर दाल",
    "gram": "चना",
    "mung_bean": "मूंग",
    "black_cumin": "कलौंजी",
    "chilli": "मिर्च",
    "ginger": "अदरक",
    "turmeric": "हल्दी",
    "cardamom": "इलायची",
    "coriander": "धनिया",
    "cinnamon": "दालचीनी",
    "fenugreek": "मेथी",
    "groundnut": "मूंगफली",
    "sunflower": "सूरजमुखी",
    "lathyrus": "खेसारी",
    "bottle_gourd": "लौकी",
    "ridge_gourd": "तोरई",
    "snake_gourd": "चिचिंडा",
    "sponge_gourd": "घीया तोरई",
    "drumstick": "सहजन",
    "sweet_potato": "शकरकंद",
    "yam": "जिमीकंद",
    "taro": "अरबी",
    "cassava": "टैपिओका",
    "watermelon": "तरबूज",
    "muskmelon": "खरबूजा",
    "cluster_bean": "ग्वार",
    "french_bean": "फ्रेंच बीन्स",
    "kidney_bean": "राजमा",
    "cowpea": "लोबिया",
    "black_gram": "उड़द",
    "pigeon_pea": "अरहर",
    "field_pea": "मटर",
    "linseed": "अलसी",
    "safflower": "कुसुम",
    "mesta": "मेस्टा",
    "areca_nut": "सुपारी",
    "coconut": "नारियल",
    "sweet_corn": "मीठा मक्का",
    "foxtail_millet": "कंगनी",
    "sorghum": "ज्वार",
    "pearl_millet": "बाजरा",
    "makhana": "मखाना",
    "sapota": "चीकू",
    "rubber": "रबर",
    "persimmon": "तेंदू फल",
    "peach": "आड़ू",
    "apricot": "खुबानी",
    "walnut": "अखरोट",
    "almond": "बादाम",
    "kiwi": "कीवी",
    "passion_fruit": "पैशन फ्रूट",
    "large_cardamom": "बड़ी इलायची",
    "black_pepper": "काली मिर्च",
    "galangal": "गलंगल",
    "ashwagandha": "अश्वगंधा",
    "stevia": "स्टीविया",
    "aloe_vera": "एलोवेरा",
    "tinda": "टिंडा",
    "celery": "अजवाइन पत्ता",
    "lettuce": "सलाद पत्ता",
    "beetroot": "चुकंदर",
    "turnip": "शलजम",
    "broccoli": "ब्रोकोली",
    "garlic": "लहसुन",
    "tobacco": "तंबाकू",
    "dolichos_bean": "सेम",
    "jalpai": "जल्पाई",
    "latka": "लटका",
    "panial": "पानियल",
    "water_apple": "जामरूल",
    "longan": "लोंगन",
    "carambola": "कमरख",
    "date": "खजूर",
    "tuberose": "रजनीगंधा",
    "betel_vine": "पान बेल",
    "coffee": "कॉफी",
    "jamun": "जामुन",
    "jatropha": "जेट्रोफा",
    "kalmegh": "कालमेघ",
    "lemon_grass": "लेमन ग्रास",
    "neem": "नीम",
    "pomegranate": "अनार",
    "rose": "गुलाब",
    "soybean": "सोयाबीन",
    "ash_gourd": "पेठा",
    "capsicum": "शिमला मिर्च",
    "castor": "अरण्डी",
    "fennel": "सौंफ",
    "fig": "अंजीर",
    "oat": "जई",
    "cherry": "चेरी",
    "chicory": "चिकोरी",
    "clove": "लौंग",
    "dragon_fruit": "ड्रैगन फ्रूट",
    "gerbera": "जरबेरा",
    "jasmine": "चमेली",
    "marigold": "गेंदा",
    "shatavari": "शतावरी",
    "zucchini": "ज़ुकीनी"
    },

    "view_health_guide": "स्वास्थ्य मार्गदर्शिका देखें",
    "label_soil_library": "मिट्टी सूचना पुस्तकालय",
    "field_reading_history": "खेत की हालिया रिपोर्ट",
    "health_diagnostic": "स्वास्थ्य निदान",
    "recommended_treatment": "सुझाया गया उपचार",
    "soil_alluvial": "जलोढ़ मिट्टी",
    "soil_desc_alluvial": "नदी के मैदानों में पाई जाने वाली अत्यधिक उपजाऊ मिट्टी। फास्फोरस और पोटेशियम से भरपूर, गेहूं और चावल के लिए उत्तम।",
    "soil_black": "काली मिट्टी",
    "soil_desc_black": "इसे रेगुर मिट्टी भी कहा जाता है। नमी सोखने वाली और लोहे और चूने से भरपूर; कपास और दालों के लिए आदर्श।",
    "soil_red": "लाल मिट्टी",
    "soil_desc_red": "क्रिस्टलीय चट्टान से निर्मित। आयरन की अधिकता इसे लाल बनाती है। तंबाकू, बाजरा और तिलहन के लिए अच्छी है।",
    "soil_loamy": "दोमट मिट्टी",
    "soil_desc_loamy": "रेत, गाद और मिट्टी का संतुलित मिश्रण। लगभग सभी सब्जियों के लिए उत्कृष्ट जल निकासी और पोषक तत्व प्रदान करती है।",

    // footer-main
    "footer": {
    "brandNamePart1": "Soil",
    "brandNamePart2": "2Silicon",
    "description": "ML Ops और उच्च-प्रदर्शन वेब विकास के माध्यम से डिजिटल कृषि में अग्रणी।",
    "links": {
      "home": "होम",
      "about": "टीम के बारे में",
      "contact": "संपर्क करें"
    },
    "copyright": "© {{year}} CodeX देव टीम। सर्वाधिकार सुरक्षित।",
    "legal": {
      "privacy": "गोपनीयता नीति",
      "terms": "सेवा की शर्तें"
    }
  },
  "section6": {
    "titlePart1": "आइए कृषि के",
    "titleHighlight": "भविष्य",
    "titlePart2": "का निर्माण करें।",
    "description": "चाहे आप हमारे एमएल मॉडल, वेब आर्किटेक्चर में रुचि रखते हों, या बस एमएल ऑप्स के बारे में बात करना चाहते हों—हम सहयोग के लिए हमेशा तैयार हैं।",
    "ctaCard": {
      "title": "परियोजना शुरू करें",
      "description": "अपनी खेती की जरूरतों के लिए कस्टम एमएल समाधान तैनात करने के लिए तैयार हैं?",
      "button": "अभी शुरू करें"
    }
  },
  "section5": {
    "header": "CodeX",
    "teamIntro": {
      "part1": "एक विशेषज्ञ विकास टीम जो आधुनिक",
      "webDev": "वेब विकास",
      "and": "और",
      "mlOps": "ML Ops पर केंद्रित है"
    },
    "mission": {
      "label": "मिशन",
      "statement": "एक केंद्रीकृत डिजिटल कृषि समाधान का निर्माण करना जो खेती के मार्गदर्शन को ML-आधारित फसल सिफारिश और वास्तविक समय की निगरानी के साथ सहजता से जोड़ता है।"
    },
    "features": {
      "collab": {
        "title": "सहयोगात्मक कोडिंग",
        "desc": "वैश्विक डेवलपर्स के साथ वास्तविक समय में मिलकर प्रोजेक्ट बनाएं।"
      },
      "version": {
        "title": "वर्जन कंट्रोल",
        "desc": "निर्बाध प्रोजेक्ट प्रबंधन के लिए एकीकृत Git वर्कफ़्लो।"
      },
      "intelligence": {
        "title": "कोड इंटेलिजेंस",
        "desc": "विकास को गति देने और बग्स को कम करने के लिए AI-सहायता प्राप्त कोडिंग।"
      }
    }
  }
    }
  },

  bn: {
    translation: {
      "nav_home": "হোম",
      "nav_dashboard": "ড্যাশবোর্ড",
      "nav_auth": "লগইন / সাইন আপ",
      "logout": "লগ আউট",

      "login": "লগইন",
      "signup": "সাইন আপ",
      "email": "ইমেল ঠিকানা",
      "password": "পাসওয়ার্ড",
      "confirm_password": "পাসওয়ার্ড নিশ্চিত করুন",
      "forgot_password": "পাসওয়ার্ড ভুলে গেছেন?",
      "no_account": "অ্যাকাউন্ট নেই?",
      "have_account": "ইতিমধ্যেই অ্যাকাউন্ট আছে?",
      "submit": "জমা দিন",
      "create_account": "অ্যাকাউন্ট তৈরি করুন",

      "dash_title": "খামার নিয়ন্ত্রণ কেন্দ্র",
      "feature_grow": "নতুন চাষ",
      "feature_predict": "পূর্বাভাস",
      "feature_weather": "আবহাওয়া",
      "feature_soil": "মাটি",
      "feature_trends": "প্রবণতা",
      "label_tasks": "কাজ",
      "label_crops": "ফসল",
      "label_soil_logs": "মাটির তথ্য",

      "predict_title": "এআই ফসল পূর্বাভাসকারী",
      "run_prediction": "পূর্বাভাস করুন",
      "analyzing": "বিশ্লেষণ হচ্ছে...",
      "recommendation": "সুপারিশ",
      "try_again": "আবার চেষ্টা করুন",
      "market_trends": "বাজার প্রবণতা",
      "weather_insights": "আবহাওয়া তথ্য",
      "save_changes": "পরিবর্তন সংরক্ষণ করুন",
      "full_name": "পূর্ণ নাম",
      "district": "জেলা",
      "state": "রাজ্য",
      "soil_type": "মাটির ধরন",
      "moisture": "আর্দ্রতা %",
      "crop_name": "ফসলের নাম",
      "planted_date": "রোপণের তারিখ",
      "exp_harvest": "সম্ভাব্য ফসল কাটা",
      "no_data": "এখনও কোনো তথ্য নেই।",
      "btn_add_task": "নতুন কাজ যোগ করুন",
      "close": "বন্ধ করুন",

      // Auto
      "auto_contact_number": "যোগাযোগ নম্বর",
      "auto_profile_pic_url": "প্রোফাইল ছবি লিঙ্ক",
      "auto_due": "শেষ তারিখ",
      "auto_info": "তথ্য:",
      "auto_no_description_provided": "কোনো বিবরণ নেই।",
      "auto_mark_done": "সম্পন্ন করুন",
      "auto_delete": "মুছুন",
      "auto_region_prefix": "অঞ্চল:",
      "auto_based_on_regional_trends": "{{region}} অঞ্চলের প্রবণতার উপর ভিত্তি করে।",
      "auto_trends_updated": "আঞ্চলিক পাইকারি সূচক থেকে আপডেট।",
      "auto_optimal_for_irrigation_today": "আজ সেচের জন্য উপযুক্ত।",
      "auto_new_task": "নতুন কাজ",
      "auto_title_label": "শিরোনাম",
      "auto_description_label": "বিবরণ",
      "auto_due_date_label": "শেষ তারিখ",
      "auto_soil_update": "মাটি আপডেট",
      "auto_save_records": "রেকর্ড সংরক্ষণ করুন",
      "auto_start_new_growth": "নতুন চাষ শুরু করুন",
      "auto_start_month_label": "শুরুর মাস (1-12)",
      "auto_end_month_label": "শেষ মাস",
      "auto_register_crop": "ফসল নিবন্ধন",
      "auto_active_crops": "চলমান ফসল",
      "auto_no_active_crops": "কোনো চলমান ফসল নেই।",
      "auto_create_task": "কাজ তৈরি করুন",
      "auto_rainfall": "বৃষ্টিপাত",
      "auto_sunlight": "সূর্যালোক",
      "auto_temperature": "তাপমাত্রা",
      "auto_humidity": "আর্দ্রতা",

      // Footer

      "footer_github": "গিটহাব",
      "footer_youtube": "ইউটিউব",
      "footer_codex_logo": "কোডএক্স লোগো",
      "footer_app_logo": "অ্যাপ লোগো",
      "footer_developed_by": "CodeX দ্বারা উন্নত",
      "footer_rights": "© 2025 Soil To Silicon — সর্বস্বত্ব সংরক্ষিত",
      "footer_powered_by": "© CodeX দ্বারা পরিচালিত",
      "footer_version": "সংস্করণ Alpha 2.0.1",
      "footer_help": "সহায়তা",
      "footer_contact": "যোগাযোগ করুন",

      // Harvest

      "harvest_growth_progress": "বৃদ্ধির অগ্রগতি",
      "harvest_others": "+ অন্যান্য",
      "harvest_ready": "ফসল কাটার জন্য প্রস্তুত",
      "harvest_maturing": "পাকছে...",
      "harvest_ripening_soon": "শীঘ্রই পাকা হবে",
      "harvest_in_growth": "বৃদ্ধির পর্যায়ে",

      // Username

      "username_welcome_back": "আবার স্বাগতম,",
      "username_default_farmer": "কৃষক",
      "username_default_user": "ব্যবহারকারী",
      "username_alt_profile": "ব্যবহারকারীর প্রোফাইল",

      // Tasks

      "task_active": "সক্রিয় কাজ",

      // Main Navbar

      "nav_solutions": "আমাদের সমাধান",
      "nav_codex": "কোডএক্স",
      "nav_contact": "যোগাযোগ",
      "nav_launch_app": "অ্যাপ চালু করুন",

      // Main Hero-Container

      "hero_titleLine1": "মাটিকে যুক্ত করছি",
      "hero_titleHighlight": "স্মার্ট প্রযুক্তির সাথে",
      "hero_description": "এআই ভিত্তিক ফসল পর্যবেক্ষণ, রিয়েল-টাইম আবহাওয়া তথ্য, মাটির বিশ্লেষণ এবং পূর্বাভাস ভিত্তিক ফসল পরিকল্পনার মাধ্যমে আপনার কৃষিকে উন্নত করুন।",
      "hero_cta": "শুরু করুন",
      "hero_badge": "এআই চালিত কৃষি বিশ্লেষণ",

      // Next Card

      "nextgen_badge": "নতুন প্রজন্মের কৃষি এআই",

      // Card

      "samplecard_title": "সয়েল_2_সিলিকন",
      "samplecard_badge": "নিউরাল এআই",
      "samplecard_accuracy": "নির্ভুলতা",
      "samplecard_farms": "ট্র্যাককৃত খামার",
      "samplecard_roi": "লাভের হার",

      // Main Card

      "soilcard_title": "কোয়ান্টাম_ফার্ম.exe",
      "soilcard_status": "নিউরাল সক্রিয়",
      "soilcard_metric1": "ফসল অপ্টিমাইজেশন",
      "soilcard_metric2": "নিরীক্ষণকৃত হেক্টর",
      "soilcard_metric3": "ফলন বৃদ্ধি",

      // Solutions

      "solutions_title1": "এআই ভিত্তিক ফসল বুদ্ধিমত্তা",
"solutions_1_slide1": "মাটি ভিত্তিক ফসল ও জাত সুপারিশ",
"solutions_1_slide2": "এমএল ভিত্তিক ফলন পূর্বাভাস মডেল",
"solutions_1_slide3": "ফসলের ছবির মাধ্যমে রোগ সনাক্তকরণ",
"solutions_1_slide4": "ডেটা নির্ভর স্মার্ট পরিকল্পনা",

"solutions_title2": "নির্ভুল মাটি ও সার নির্দেশনা",
"solutions_2_slide1": "এআই ভিত্তিক মাটির ধরন সনাক্তকরণ",
"solutions_2_slide2": "ফসল নির্দিষ্ট সার সুপারিশ",
"solutions_2_slide3": "স্বাস্থ্যকর মাটির জন্য পুষ্টি ভারসাম্য",
"solutions_2_slide4": "কম অপচয়, বেশি উৎপাদন",

"solutions_title3": "IoT পর্যবেক্ষণের মাধ্যমে স্মার্ট কৃষি",
"solutions_3_slide1": "রিয়েল-টাইম মাটির আর্দ্রতা ট্র্যাকিং",
"solutions_3_slide2": "pH, NPK ও তাপমাত্রা সেন্সর",
"solutions_3_slide3": "দূরবর্তী খামার পর্যবেক্ষণ",
"solutions_3_slide4": "ডেটা নির্ভর ক্ষেত্র সিদ্ধান্ত",

"solutions_title4": "টেকসই ও জলবায়ু সচেতন কৃষি",
"solutions_4_slide1": "আবহাওয়া ভিত্তিক চাষ সুপারিশ",
"solutions_4_slide2": "জল ও সম্পদের অপ্টিমাইজ ব্যবহার",
"solutions_4_slide3": "পরিবেশবান্ধব পুষ্টি ব্যবস্থাপনা",
"solutions_4_slide4": "দীর্ঘমেয়াদী মাটির স্থায়িত্ব",

"solutions_title5": "ভয়েস সক্ষম ও অন্তর্ভুক্তিমূলক কৃষি",
"solutions_5_slide1": "বহুভাষিক এআই ভয়েস সহায়তা",
"solutions_5_slide2": "সহজ, কৃষক-বান্ধব ইন্টারফেস",
"solutions_5_slide3": "কম ইন্টারনেটে অফলাইন সহায়তা",
"solutions_5_slide4": "সব সাক্ষরতার জন্য সহজলভ্য তথ্য",

// Crops
"crops":{
"rice": "ধান",
    "maize": "ভুট্টা",
    "wheat": "গম",
    "barley": "যব",
    "millets": "বাজরা/মিলেট",
    "potato": "আলু",
    "brinjal": "বেগুন",
    "cabbage": "বাঁধাকপি",
    "cauliflower": "ফুলকপি",
    "okra": "ঢেঁড়স",
    "cucumber": "শসা",
    "tomato": "টমেটো",
    "carrot": "গাজর",
    "radish": "মূলা",
    "pumpkin": "কুমড়া",
    "bitter_gourd": "করলা",
    "pointed_gourd": "পটল",
    "spinach": "পালং শাক",
    "onion": "পেঁয়াজ",
    "mango": "আম",
    "pineapple": "আনারস",
    "banana": "কলা",
    "litchi": "লিচু",
    "guava": "পেয়ারা",
    "jackfruit": "কাঁঠাল",
    "papaya": "পেঁপে",
    "orange": "কমলা",
    "apple": "আপেল",
    "plum": "আলুবোখারা",
    "custard_apple": "আতা",
    "bael": "বেল",
    "jute": "পাট",
    "tea": "চা",
    "sugarcane": "আখ",
    "betel_leaves": "পান পাতা",
    "cotton": "তুলা",
    "mustard": "সরিষা",
    "sesame": "তিল",
    "lentil": "মসুর ডাল",
    "gram": "ছোলা",
    "mung_bean": "মুগ ডাল",
    "black_cumin": "কালোজিরা",
    "chilli": "লঙ্কা",
    "ginger": "আদা",
    "turmeric": "হলুদ",
    "cardamom": "এলাচ",
    "coriander": "ধনিয়া",
    "cinnamon": "দারুচিনি",
    "fenugreek": "মেথি",
    "groundnut": "চিনাবাদাম",
    "sunflower": "সূর্যমুখী",
    "lathyrus": "খেসারি",
    "bottle_gourd": "লাউ",
    "ridge_gourd": "ঝিঙে",
    "snake_gourd": "চিচিঙ্গা",
    "sponge_gourd": "ধুন্দুল",
    "drumstick": "সজনে",
    "sweet_potato": "মিষ্টি আলু",
    "yam": "ওল",
    "taro": "কচু",
    "cassava": "ট্যাপিওকা",
    "watermelon": "তরমুজ",
    "muskmelon": "খরমুজ",
    "cluster_bean": "গোয়ার শিম",
    "french_bean": "ফ্রেঞ্চ বিন",
    "kidney_bean": "রাজমা",
    "cowpea": "বরবটি",
    "black_gram": "উড়দ ডাল",
    "pigeon_pea": "অড়হর ডাল",
    "field_pea": "মটরশুঁটি",
    "linseed": "তিসি",
    "safflower": "কুসুম",
    "mesta": "মেস্তা",
    "areca_nut": "সুপারি",
    "coconut": "নারকেল",
    "sweet_corn": "মিষ্টি ভুট্টা",
    "foxtail_millet": "কাংনি",
    "sorghum": "জোয়ার",
    "pearl_millet": "বাজরা",
    "makhana": "মাখানা",
    "sapota": "চিকু",
    "rubber": "রাবার",
    "persimmon": "পারসিমন",
    "peach": "পিচ",
    "apricot": "খুবানি",
    "walnut": "আখরোট",
    "almond": "বাদাম",
    "kiwi": "কিউই",
    "passion_fruit": "প্যাশন ফল",
    "large_cardamom": "বড় এলাচ",
    "black_pepper": "গোলমরিচ",
    "galangal": "গালাঙ্গাল",
    "ashwagandha": "অশ্বগন্ধা",
    "stevia": "স্টেভিয়া",
    "aloe_vera": "অ্যালোভেরা",
    "tinda": "টিন্ডা",
    "celery": "সেলারি",
    "lettuce": "লেটুস",
    "beetroot": "বিট",
    "turnip": "শালগম",
    "broccoli": "ব্রোকলি",
    "garlic": "রসুন",
    "tobacco": "তামাক",
    "dolichos_bean": "শিম",
    "jalpai": "জলপাই",
    "latka": "লটকা",
    "panial": "পানিয়াল",
    "water_apple": "জামরুল",
    "longan": "লংগান",
    "carambola": "কমরাঙা",
    "date": "খেজুর",
    "tuberose": "রজনীগন্ধা",
    "betel_vine": "পান লতা",
    "coffee": "কফি",
    "jamun": "কালোজাম",
    "jatropha": "জাট্রোফা",
    "kalmegh": "কালমেঘ",
    "lemon_grass": "লেমন গ্রাস",
    "neem": "নিম",
    "pomegranate": "ডালিম",
    "rose": "গোলাপ",
    "soybean": "সয়াবিন",
    "ash_gourd": "চালকুমড়া",
    "capsicum": "ক্যাপসিকাম",
    "castor": "রেড়ি",
    "fennel": "মৌরি",
    "fig": "ডুমুর",
    "oat": "ওট",
    "cherry": "চেরি",
    "chicory": "চিকোরি",
    "clove": "লবঙ্গ",
    "dragon_fruit": "ড্রাগন ফল",
    "gerbera": "জারবেরা",
    "jasmine": "চামেলি",
    "marigold": "গাঁদা",
    "shatavari": "শতাবরী",
    "zucchini": "জুচিনি"
      },

    "view_health_guide": "স্বাস্থ্য নির্দেশিকা দেখুন",
    "label_soil_library": "মাটি তথ্য ভাণ্ডার",
    "field_reading_history": "মাঠের সাম্প্রতিক তথ্য",
    "health_diagnostic": "স্বাস্থ্য নির্ণয়",
    "recommended_treatment": "প্রস্তাবিত প্রতিকার",
    "soil_alluvial": "পলি মাটি",
    "soil_desc_alluvial": "নদীর অববাহিকায় পাওয়া অত্যন্ত উর্বর মাটি। ফসফরাস এবং পটাশিয়াম সমৃদ্ধ, ধান ও গমের জন্য উপযুক্ত।",
    "soil_black": "কৃষ্ণ মৃত্তিকা",
    "soil_desc_black": "জল ধরে রাখার ক্ষমতা সম্পন্ন এবং লোহা ও চুন সমৃদ্ধ; তুলা এবং ডাল চাষের জন্য আদর্শ।",
    "soil_red": "লাল মাটি",
    "soil_desc_red": "কেলাসিত শিলা থেকে তৈরি। লোহার উপস্থিতির কারণে লাল রঙ হয়। তামাক, মিলেট এবং তৈলবীজের জন্য ভালো।",
    "soil_loamy": "দোআঁশ মাটি",
    "soil_desc_loamy": "বালি, পলি এবং কাদার সুষম মিশ্রণ। প্রায় সব ধরণের সবজির জন্য চমৎকার নিষ্কাশন এবং পুষ্টি সরবরাহ করে।",

  "footer": {
    "brandNamePart1": "Soil",
    "brandNamePart2": "2Silicon",
    "description": "ML Ops এবং উচ্চ-পারফরম্যান্স ওয়েব ডেভেলপমেন্টের মাধ্যমে ডিজিটাল কৃষিতে অগ্রগামী।",
    "links": {
      "home": "হোম",
      "about": "টিম সম্পর্কে",
      "contact": "যোগাযোগ"
    },
    "copyright": "© {{year}} CodeX দেব টিম। সমস্ত অধিকার সংরক্ষিত।",
    "legal": {
      "privacy": "গোপনীয়তা নীতি",
      "terms": "পরিষেবার শর্তাবলী"
    }
  },
  "section6": {
    "titlePart1": "আসুন কৃষির",
    "titleHighlight": "ভবিষ্যৎ",
    "titlePart2": "গড়ে তুলি।",
    "description": "আপনি আমাদের এমএল (ML) মডেল, ওয়েব আর্কিটেকচার সম্পর্কে আগ্রহী হন বা এমএল অপস (ML Ops) নিয়ে আলোচনা করতে চান—আমরা সহযোগিতার জন্য সর্বদা প্রস্তুত।",
    "ctaCard": {
      "title": "প্রকল্প শুরু করুন",
      "description": "আপনার চাষাবাদের প্রয়োজনে একটি কাস্টম এমএল (ML) সমাধান প্রয়োগ করতে প্রস্তুত?",
      "button": "এখনই শুরু করুন"
    }
  },
  "section5": {
    "header": "CodeX",
    "teamIntro": {
      "part1": "একটি বিশেষায়িত ডেভেলপমেন্ট টিম যা আধুনিক",
      "webDev": "ওয়েব ডেভেলপমেন্ট",
      "and": "এবং",
      "mlOps": "ML Ops-এর ওপর নিবিড়ভাবে কাজ করে"
    },
    "mission": {
      "label": "মূল লক্ষ্য",
      "statement": "একটি কেন্দ্রীভূত ডিজিটাল কৃষি সমাধান তৈরি করা যা চাষাবাদের নির্দেশনার সাথে ML-ভিত্তিক ফসল সুপারিশ এবং রিয়েল-টাইম পর্যবেক্ষণকে একত্রিত করে।"
    },
    "features": {
      "collab": {
        "title": "সহযোগিতামূলক কোডিং",
        "desc": "বিশ্বব্যাপী ডেভেলপারদের সাথে রিয়েল-টাইমে প্রজেক্ট তৈরি করুন।"
      },
      "version": {
        "title": "ভার্সন কন্ট্রোল",
        "desc": "নিরবচ্ছিন্ন প্রজেক্ট ম্যানেজমেন্টের জন্য ইন্টিগ্রেটেড গিট (Git) ওয়ার্কফ্লো।"
      },
      "intelligence": {
        "title": "কোড ইন্টেলিজেন্স",
        "desc": "ডেভেলপমেন্টের গতি বাড়াতে এবং বাগ কমাতে AI-চালিত কোডিং।"
      }
    }
  }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
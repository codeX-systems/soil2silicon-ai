import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
       
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy outlines how this application ("the App") handles
            user data during its current development phase. By accessing or using
            the App, you acknowledge and agree to the practices described below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            2. Application Status (Alpha Testing Phase)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The App is currently an <strong>educational project and demonstration prototype</strong>,
            developed for learning and testing purposes. It is <strong>not intended for real-world
            agricultural, financial, or operational use</strong>.
          </p>

          <p className="text-gray-600 leading-relaxed mt-2">
            The App is in its <strong>alpha testing phase</strong>, with a beta release planned in the future.
            During this stage:
          </p>

          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>The platform is under active development and testing.</li>
            <li>Features may change, break, or be removed without prior notice.</li>
            <li>
              Stability, accuracy, and data persistence are <strong>not guaranteed</strong>.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            3. User Account Policy
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>User accounts are <strong>pre-created and provided</strong> to testers.</li>
            <li>
              Users are strongly discouraged from attempting to register new accounts.
            </li>
            <li>
              Unauthorized or manually created accounts may be removed without notice.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            4. Data Collection and Usage
          </h2>
          <p className="text-gray-600 leading-relaxed">
            During the testing phase, the App may collect and temporarily store:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>
              Basic user inputs related to agricultural data (e.g., crops, soil, field data)
            </li>
            <li>Usage data for improving system performance and features</li>
          </ul>
          <p className="text-gray-600 mt-2">
            This data is used strictly for testing, debugging, and improving the application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            5. Sensitive Information Warning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users are strongly advised not to submit any sensitive or personal information,
            including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Financial information</li>
            <li>Government identification numbers</li>
            <li>Personal addresses or confidential data</li>
          </ul>
          <p className="text-gray-600 mt-2">
            The App is not designed to securely handle sensitive data at this stage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            6. Data Persistence and Database Reset Policy
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              The database may be periodically cleared or reset as part of development.
            </li>
            <li>
              All user data may be permanently deleted without prior notice.
            </li>
            <li>
              Users should not rely on the App for storing important or permanent data.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            7. Security Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            While reasonable efforts may be made to maintain system integrity:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>The App does not guarantee data security or protection.</li>
            <li>
              Users acknowledge the risks associated with using a testing-stage platform.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy may be updated as the App evolves toward beta and production releases.
            Continued use of the App implies acceptance of any changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            9. Contact and Feedback
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users are encouraged to provide feedback to help improve the App.
            Please use the official contact channels available within the application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            10. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By using this App, you confirm that you have read, understood, and agreed
            to this Privacy Policy.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
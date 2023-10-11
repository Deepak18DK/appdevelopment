import React from 'react';
import '../Assets/css/Terms.css'
import Topbar1 from '../components/Topbar1';
import Footer from '../components/Footer';

function TermsAndConditions() {
  return (
    <div>

    <Topbar1/>
    <div className="terms-and-conditions">
      <h1 style={{ fontSize: '24px' }}>Terms and Conditions</h1>


      <p>
        Welcome to FinMate, an expense tracker app designed to help you manage your finances effectively. These Terms and Conditions outline the rules and regulations for using our app. By using FinMate, you accept and agree to be bound by these terms. If you disagree with any part of these terms, please refrain from using our services.
      </p>

      <h2 style={{ fontSize: '20px' }}>1. User Eligibility</h2>
      <p>
        You must be at least 16 years old to use FinMate. By using the app, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms and Conditions.
      </p>

      <h2 style={{ fontSize: '20px' }}>2. Account Registration</h2>
      <p>
        To access certain features of FinMate, you may be required to register for an account. When you do so, you agree to provide accurate, current, and complete information during the registration process and to update this information to keep it accurate, current, and complete.
      </p>

      <h2 style={{ fontSize: '20px' }}>3. User Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account and password. You also agree to restrict access to your computer or mobile device to prevent unauthorized access to your FinMate account. You accept full responsibility for all activities that occur under your account or password.
      </p>

      <h2 style={{ fontSize: '20px' }}>4. Prohibited Activities</h2>
      <p>
        While using FinMate, you agree not to engage in any activities that:
      </p>
      <ul>
        <li>Violate any local, national, or international laws or regulations.</li>
        <li>Disrupt or interfere with the app's functionality, security, or availability.</li>
        <li>Attempt to gain unauthorized access to other users' accounts or data.</li>
        <li>Use any automated system or software to extract data from FinMate without our prior written consent.</li>
        <li>Impersonate any person or entity or provide false or misleading information.</li>
      </ul>

      <h2 style={{ fontSize: '20px' }}>5. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your account and access to FinMate at our sole discretion, without notice, for any reason, including but not limited to a breach of these Terms and Conditions or any applicable laws or regulations.
      </p>

      <h2 style={{ fontSize: '20px' }}>6. Privacy</h2>
      <p>
        Your use of FinMate is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our data practices fully.
      </p>

      <h2 style={{ fontSize: '20px' }}>7. Changes to Terms and Conditions</h2>
      <p>
        We may update these Terms and Conditions from time to time to reflect changes in our services or to comply with legal requirements. Any changes will be effective upon posting the revised terms on the app. It is your responsibility to review these Terms and Conditions periodically for updates.
      </p>

      <h2 style={{ fontSize: '20px' }}>8. Contact Information</h2>
      <p>
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at team@finmate.com. We are here to assist you and address any inquiries you may have.
      </p>
    </div>
    <Footer/>
    </div>
  );
}

export default TermsAndConditions;

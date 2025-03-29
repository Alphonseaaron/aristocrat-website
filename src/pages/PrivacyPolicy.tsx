
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead">
            This page details how Aristocrats Insurance Brokers collects and uses data.
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-aristocrat-green mb-4">Personal Data Collection</h2>
            <p>
              The website's Newsletter sign-up form requires users to provide personal details such as name 
              and mailing address, ensuring that Aristocrats Insurance Brokers can send newsletters efficiently. 
              It is explicitly stated that this data will not be used for any other purpose beyond what is necessary.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-aristocrat-green mb-4">Non-Personal Data Collection</h2>
            <p>
              The website also collects non-personal data such as:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>IP addresses</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Date of visit</li>
              <li>Referring website URLs</li>
            </ul>
            <p>
              This data is used strictly for analytics to evaluate:
            </p>
            <ul className="list-disc pl-8">
              <li>The number of visitors</li>
              <li>Most and least popular pages</li>
              <li>Frequently used referral sources</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-aristocrat-green mb-4">Cookie Usage</h2>
            <p>
              The site uses cookie technology to:
            </p>
            <ul className="list-disc pl-8">
              <li>Identify return visitors</li>
              <li>Track general site activities</li>
              <li>Improve future visits</li>
            </ul>
            <p>
              Users who do not wish to have cookies stored on their devices can modify their browser settings 
              to disable cookies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-aristocrat-green mb-4">Survey Data Collection</h2>
            <p>
              Visitors may be presented with optional surveys to provide feedback on their website experience. 
              The collected information is used solely for improving the website experience and is reported in 
              an aggregated format without identifying individuals.
            </p>
          </section>
          
          <div className="bg-aristocrat-gray p-6 rounded-lg">
            <p className="italic font-medium">
              "By using this website, it is assumed that you have read, understood, and accepted these terms and policies."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

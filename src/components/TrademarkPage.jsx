import React from 'react';
import myvideo from '../assets/images/myvideo.mp4'; // Import the video from the images folder
//import '../assets/styles/TrademarkPage.css'; // Import the CSS file
const TrademarkPage = () => {
  return (
    <div className="trademark-page">
      <h1>Trademark Information</h1>

      <section className="trademark-introduction">
        <h2>What is a Trademark?</h2>
        <p>
          A trademark is a symbol, word, or words legally registered or established by use as representing a company or product. It gives exclusive rights to the owner to use it for specific products or services.
        </p>
      </section>

      <section className="importance-of-trademark">
        <h2>Importance of Trademarks</h2>
        <ul>
          <li><strong>Brand Protection:</strong> A trademark protects your brand from misuse or imitation.</li>
          <li><strong>Customer Trust:</strong> It helps build brand identity and trust among consumers.</li>
          <li><strong>Legal Advantage:</strong> A registered trademark provides legal recourse in case of infringement.</li>
        </ul>
      </section>

      <section className="types-of-trademarks">
        <h2>Types of Trademarks</h2>
        <ul>
          <li><strong>Word Marks:</strong> Brand names or slogans (e.g., "Coca-Cola").</li>
          <li><strong>Design Marks:</strong> Logos, symbols, or designs (e.g., the Nike Swoosh).</li>
          <li><strong>Composite Marks:</strong> A combination of both words and designs.</li>
          <li><strong>Service Marks:</strong> Used for branding services rather than products.</li>
        </ul>
      </section>

      <section className="how-to-register-trademark">
        <h2>How to Register a Trademark</h2>
        <ol>
          <li><strong>Search for Existing Trademarks:</strong> Check if your proposed mark is already in use by performing a search on the official trademark database (e.g., USPTO).</li>
          <li><strong>Prepare Your Application:</strong> Gather necessary details such as the logo, name, or slogan you wish to trademark.</li>
          <li><strong>Submit the Application:</strong> File the application online with the appropriate authority (e.g., USPTO or your country's trademark office).</li>
          <li><strong>Review and Examination:</strong> The trademark office will review your application for any issues, including similarity to existing marks.</li>
          <li><strong>Publication and Opposition:</strong> If approved, your trademark will be published in the Trademark Journal, allowing others to oppose the registration.</li>
          <li><strong>Approval and Registration:</strong> If there are no objections, your trademark will be registered, and you'll receive a certificate.</li>
        </ol>
      </section>

      <section className="trademark-maintenance">
        <h2>Maintaining a Trademark</h2>
        <ul>
          <li><strong>Use the Trademark:</strong> Continuously use the trademark in commerce to avoid abandonment.</li>
          <li><strong>File Maintenance Documents:</strong> Periodically file the required documents to keep the registration active.</li>
          <li><strong>Renewals:</strong> Renew your trademark registration after the initial 10-year period, and every 10 years thereafter.</li>
        </ul>
      </section>

      <section className="trademark-costs">
        <h2>Trademark Registration Costs</h2>
        <p>Trademark registration costs vary by country and complexity. In the U.S., filing fees with the USPTO typically range from $250 to $350 per class of goods or services.</p>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="https://www.uspto.gov">United States Patent and Trademark Office (USPTO)</a></li>
          <li><a href="https://www.wipo.int/trademarks/en/">World Intellectual Property Organization (WIPO)</a></li>
          <li><a href="https://www.epo.org">European Patent Office (EPO)</a></li>
        </ul>
      </section>

      {/* Adding the video at the end of the page */}
      <section className="trademark-video">
        <h2>Learn More About Trademarks</h2>
        <video width="600" controls className="video">
          <source src={myvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default TrademarkPage;

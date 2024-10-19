import React from 'react';
import myvideo from '../assets/images/myvideo.mp4'; // Adjust the import path for the video
//import '../assets/styles/CopyrightPage.css'; // Import the CSS file

const CopyrightPage = () => {
  return (
    <div className="copyright-page">
      <h1>Copyright Information</h1>

      <section className="copyright-introduction">
        <h2>What is Copyright?</h2>
        <p>
          Copyright is a legal right that grants the creator of an original work exclusive rights to its use and distribution, usually for a limited time, with the intention of enabling the creator to receive compensation for their intellectual investment.
        </p>
      </section>

      <section className="types-of-copyright">
        <h2>Types of Works Covered by Copyright</h2>
        <ul>
          <li><strong>Literary Works:</strong> Includes books, articles, and software.</li>
          <li><strong>Musical Works:</strong> Covers compositions, lyrics, and recordings.</li>
          <li><strong>Dramatic Works:</strong> Includes plays and screenplays.</li>
          <li><strong>Artistic Works:</strong> Covers paintings, sculptures, and photographs.</li>
          <li><strong>Sound Recordings:</strong> Includes recordings of music or sounds.</li>
          <li><strong>Architectural Works:</strong> Covers the design of buildings.</li>
        </ul>
      </section>

      <section className="copyright-registration">
        <h2>How to Register a Copyright</h2>
        <ol>
          <li><strong>Complete an Application:</strong> Fill out the appropriate form for your type of work.</li>
          <li><strong>Pay the Fee:</strong> Submit the registration fee, which varies depending on the type of work.</li>
          <li><strong>Submit Your Work:</strong> Provide a copy of the work you wish to register.</li>
          <li><strong>Receive Confirmation:</strong> You will receive a certificate of registration once processed.</li>
        </ol>
      </section>

      <section className="enforcement">
        <h2>Enforcement of Copyright</h2>
        <p>
          Copyright owners have the right to enforce their copyright by taking legal action against unauthorized use, which may include sending cease-and-desist letters or filing lawsuits.
        </p>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li><strong>Do I automatically own the copyright to my work?</strong> Yes, copyright protection is automatic as soon as the work is created and fixed in a tangible medium.</li>
          <li><strong>How long does copyright last?</strong> In general, copyright lasts for the life of the author plus 70 years.</li>
          <li><strong>Can I transfer my copyright?</strong> Yes, copyright can be transferred or sold, but it must be done in writing.</li>
        </ul>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="https://www.copyright.gov">U.S. Copyright Office</a></li>
          <li><a href="https://www.wipo.int/copyright/en/">World Intellectual Property Organization</a></li>
          <li><a href="https://www.law.cornell.edu/wex/copyright">Cornell Legal Information Institute</a></li>
        </ul>
      </section>

      {/* Adding the video at the end of the page */}
      <section className="copyright-video">
        <h2>Learn More About Copyright</h2>
        <video width="600" autoPlay loop muted controls className="video">
          <source src={myvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default CopyrightPage;

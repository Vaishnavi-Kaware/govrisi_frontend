// import React from 'react';
// import myvideo from '../assets/images/myvideo.mp4'; // Adjusted import path for the video
// //import '../assets/styles/PatentPage.css'; // Import the CSS file

// const PatentPageWithVideo = () => {
//   return (
//     <div className="patent-page">
//       <h1>Patent Information</h1>

//       <section className="patent-introduction">
//         <h2>What is a Patent?</h2>
//         <p>
//           A patent is a form of intellectual property that grants the patent holder exclusive rights
//           to the invention for a limited period, typically 20 years from the filing date. It allows
//           the inventor to exclude others from making, using, or selling the invention without
//           permission.
//         </p>
//       </section>

//       <section className="types-of-patents">
//         <h2>Types of Patents</h2>
//         <ul>
//           <li><strong>Utility Patents:</strong> Cover new and useful inventions or discoveries.</li>
//           <li><strong>Design Patents:</strong> Cover new, original, and ornamental designs for an article of manufacture.</li>
//           <li><strong>Plant Patents:</strong> Cover new and distinct plant varieties.</li>
//         </ul>
//       </section>

//       <section className="patent-procedure">
//         <h2>Patent Application Procedure</h2>
//         <ol>
//           <li><strong>Research:</strong> Ensure the invention is new by performing a patent search.</li>
//           <li><strong>Prepare Application:</strong> Draft the patent application with all the necessary documents (e.g., detailed description, claims, drawings).</li>
//           <li><strong>File Application:</strong> Submit the patent application with the respective patent office (e.g., USPTO).</li>
//           <li><strong>Examination:</strong> The patent office reviews the application for compliance and novelty.</li>
//           <li><strong>Approval or Rejection:</strong> Based on the examination, the patent office either grants or rejects the patent.</li>
//           <li><strong>Maintenance Fees:</strong> Pay maintenance fees to keep the patent in force.</li>
//         </ol>
//       </section>

//       <section className="patent-costs">
//         <h2>Costs of Filing a Patent</h2>
//         <p>The costs of filing a patent can vary depending on the type of patent and the complexity of the invention. Typical costs include:</p>
//         <ul>
//           <li>Filing fees</li>
//           <li>Attorney fees</li>
//           <li>Maintenance fees</li>
//         </ul>
//       </section>

//       <section className="patent-resources">
//         <h2>Additional Resources</h2>
//         <ul>
//           <li><a href="https://www.uspto.gov">United States Patent and Trademark Office (USPTO)</a></li>
//           <li><a href="https://www.epo.org">European Patent Office (EPO)</a></li>
//           <li><a href="https://www.wipo.int">World Intellectual Property Organization (WIPO)</a></li>
//         </ul>
//       </section>

//       {/* Adding the video at the end of the page */}
//       <section className="patent-video">
//         <h2>Learn More Through Video</h2>
//         <video width="600" autoPlay loop muted controls>
//           <source src={myvideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </section>
//     </div>
//   );
// };

// export default PatentPageWithVideo;


import React from 'react';
import '../assets/styles/PatentPage.css'; // Import the CSS file
 

function PatentSteps() {
    return (
        <div className="patent-steps container">
            <h2 className="text-center">Steps to File a Patent</h2>
            <ul className="steps-list">
                <li className="step">
                    <h3>Step 1: Determine the Type of Patent</h3>
                    <p>There are three types of patents: utility, design, and plant. Determine which one applies to your invention.</p>
                </li>
                <li className="step">
                    <h3>Step 2: Search for Existing Patents</h3>
                    <p>Conduct a thorough search to make sure no one else has already patented your invention.</p>
                </li>
                <li className="step">
                    <h3>Step 3: Prepare Your Application</h3>
                    <p>Gather all necessary documents, including detailed descriptions, drawings, and claims.</p>
                </li>
                <li className="step">
                    <h3>Step 4: File the Application</h3>
                    <p>Submit your application with the required fees to the appropriate patent office.</p>
                </li>
                <li className="step">
                    <h3>Step 5: Work with the Patent Examiner</h3>
                    <p>After submission, work with the patent examiner to resolve any issues or objections.</p>
                </li>
                <li className="step">
                    <h3>Step 6: Maintain Your Patent</h3>
                    <p>Once granted, maintain your patent by paying the necessary maintenance fees at regular intervals.</p>
                </li>
            </ul>
        </div>
    );
}

export default PatentSteps;

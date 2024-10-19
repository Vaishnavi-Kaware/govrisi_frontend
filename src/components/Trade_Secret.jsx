import React from 'react';
//import './App.css'; // Import custom styles
import trade1 from '../assets/images/trade1.jpg'; // Import images from src/images folder
import trade2 from '../assets/images/trade2.jpg';
import trade3 from '../assets/images/trade3.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header Area</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>

      <main>
        <h2>Trade Secret</h2>
        <p>
          Trade secrets play a crucial role in business strategy and competitive advantage, especially in a dynamic economic environment like Gujarat. Here's an in-depth look at trade secrets in Gujarat, including their definition, legal framework, significance, and best practices for protection:
        </p>
        
        <h3>What is a Trade Secret?</h3>
        <p>
          A trade secret is any information that:
          <ul>
            <li>Provides a business advantage over competitors who do not know or use it.</li>
            <li>Is kept confidential and is not publicly available.</li>
            <li>Includes formulas, processes, designs, customer lists, marketing strategies, and other business information.</li>
          </ul>
        </p>

        <div className="image-container">
          <img src={trade1} alt="Trade Secret 1" />
          <img src={trade2} alt="Trade Secret 2" />
          <img src={trade3} alt="Trade Secret 3" />
        </div>

        <h3 style={{ color: 'blue' }}>Legal Framework in India (Including Gujarat)</h3>
        <p>
          <strong>Common Law Protection:</strong>
          <ul>
            <li>In India, there is no specific legislation dedicated solely to trade secrets. Instead, trade secrets are protected under common law principles.</li>
            <li>Legal protection is primarily based on the law of torts and contract law, particularly the Indian Contract Act, 1872, which allows for confidentiality agreements.</li>
          </ul>
          <strong>Contractual Protection:</strong>
          <ul>
            <li>Businesses often use Non-Disclosure Agreements (NDAs) and confidentiality clauses in employment contracts to safeguard trade secrets.</li>
          </ul>
          <strong>Judicial Precedents:</strong>
          <ul>
            <li>Indian courts have recognized the concept of trade secrets through various judgments, enforcing the confidentiality of proprietary information and providing remedies for breaches.</li>
          </ul>
          <strong>Information Technology Act, 2000:</strong>
          <ul>
            <li>While primarily focused on electronic data protection, this act also supports the broader framework for protecting sensitive information in the digital space.</li>
          </ul>
        </p>

        <h3 style={{ color: 'blue' }}>Importance of Trade Secrets in Gujarat</h3>
        <p>
          <strong>Economic Hub:</strong>
          <ul>
            <li>Gujarat is one of India's most industrialized states, home to diverse sectors such as textiles, chemicals, pharmaceuticals, and information technology. Protecting trade secrets is vital for maintaining competitive advantages in these industries.</li>
          </ul>
          <strong>Innovation and Competitiveness:</strong>
          <ul>
            <li>Trade secrets encourage innovation and development by allowing companies to invest in research and development without the fear of competitors easily copying their proprietary information.</li>
          </ul>
          <strong>Job Creation and Growth:</strong>
          <ul>
            <li>By safeguarding intellectual property, businesses can secure investments, promote growth, and create job opportunities, contributing to the overall economy of Gujarat.</li>
          </ul>
        </p>

        <h3 style={{ color: 'blue' }}>Best Practices for Protecting Trade Secrets</h3>
        <p>
          <ul>
            <li><strong>Identify and Classify:</strong> Clearly identify what constitutes a trade secret within your organization and classify the information based on its sensitivity.</li>
            <li><strong>Implement Internal Controls:</strong> Establish robust internal policies regarding access, sharing, and storage of trade secrets. Use digital rights management tools and secure physical storage solutions.</li>
            <li><strong>Confidentiality Agreements:</strong> Require all employees, contractors, and partners to sign NDAs and confidentiality agreements.</li>
            <li><strong>Regular Training:</strong> Conduct training sessions to educate employees about the importance of trade secrets and the protocols for handling confidential information.</li>
            <li><strong>Monitor and Enforce:</strong> Regularly monitor compliance with confidentiality policies and enforce any breaches through legal channels if necessary.</li>
            <li><strong>Crisis Management Plans:</strong> Develop plans to respond to potential breaches, including legal recourse and internal investigations.</li>
          </ul>
        </p>

        <h3 style={{ color: 'blue' }}>Challenges in Protecting Trade Secrets</h3>
        <p>
          <ul>
            <li><strong>Employee Turnover:</strong> Employees may leave for competitors, increasing the risk of information leaks. Using NDAs can help mitigate this risk.</li>
            <li><strong>Technological Risks:</strong> Cybersecurity threats and data breaches pose significant risks to trade secrets.</li>
            <li><strong>Lack of Awareness:</strong> Many businesses may not fully understand the importance of trade secrets or how to protect them, leading to inadvertent disclosures.</li>
          </ul>
        </p>

        <h3 style={{ color: 'blue' }}>Steps to Protect Trade Secrets</h3>
        <p>
          <ul>
            <li><strong>Identify Trade Secrets:</strong> Clearly identify what constitutes your trade secrets (e.g., formulas, processes, customer lists, pricing strategies).</li>
            <li><strong>Implement Confidentiality Agreements:</strong> Require employees, contractors, and business partners to sign NDAs.</li>
            <li><strong>Develop Internal Policies:</strong> Limit access to sensitive information to only those employees who need it.</li>
            <li><strong>Conduct Employee Training:</strong> Regularly train employees on the importance of protecting trade secrets.</li>
            <li><strong>Use Security Measures:</strong> Implement measures such as locked filing cabinets and restricted access areas.</li>
            <li><strong>Monitor and Audit:</strong> Conduct periodic audits to ensure compliance with internal policies.</li>
            <li><strong>Legal Recourse:</strong> If a breach occurs, consult a lawyer experienced in intellectual property law.</li>
          </ul>
        </p>

        {/* Add heading for videos */}
        <h2 className="video-heading">Watch These Videos:</h2>

        
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/2JIfTshYDFY?si=wCQVoNxq06Qd1QKV" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>

          <iframe 
            className="shift-right" 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/DYh8t58BjwY?si=QO31uQuQFPu9sVun" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;

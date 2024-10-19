import React from 'react';
//import '../assets/styles/Geographical_Indication.css';

// Import your images
import geographical1 from '../assets/images/geographical1.png';
import geographical2 from '../assets/images/geographical2.jpg';
import geographical3 from '../assets/images/geographical3.jpg';

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
      <main style={{ textAlign: 'left' }}>
        <h2 style={{ color: 'blue' }}>Geographical Indication</h2>
        <p>
          Geographical Indication (GI) refers to a sign used on products that have a specific geographical origin and possess qualities or a reputation due to that origin. In Gujarat, India, several products are recognized under GI registration, reflecting the state's rich cultural heritage and traditional craftsmanship.
        </p>

        {/* Images displayed in a single line */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <img src={geographical1} alt="Kutch Embroidery" width="400" />
          <img src={geographical2} alt="Patola Silk Sarees" width="400" />
          <img src={geographical3} alt="Khadi Fabric" width="400" />
        </div>

        <h3 style={{ color: 'blue' }}>Key Geographical Indications in Gujarat:</h3>
        <ul>
          <li>
            <strong>Gujarat's Kutch Embroidery:</strong>
            <ul>
              <li>Origin: Kutch district</li>
              <li>Description: Known for its vibrant colors and intricate patterns, this embroidery is done by local artisans, often reflecting the rich culture and traditions of the region.</li>
            </ul>
          </li>
          <li>
            <strong>Patola Silk Sarees:</strong>
            <ul>
              <li>Origin: Patan district</li>
              <li>Description: Famous for their unique tie-dye technique (double ikat), Patola sarees are intricately designed and are a symbol of luxury and craftsmanship.</li>
            </ul>
          </li>
          <li>
            <strong>Gandhi Nagar’s Khadi:</strong>
            <ul>
              <li>Origin: Khadi, promoted by Mahatma Gandhi</li>
              <li>Description: Hand-spun and hand-woven fabric, Khadi represents India's freedom movement and is celebrated for its eco-friendliness and sustainability.</li>
            </ul>
          </li>
          <li>
            <strong>Mundra Salt:</strong>
            <ul>
              <li>Origin: Mundra</li>
              <li>Description: Known for its quality, Mundra salt is harvested from the saline marshes of the region and is recognized for its purity and mineral content.</li>
            </ul>
          </li>
          <li>
            <strong>Bhal region's Dhokla:</strong>
            <ul>
              <li>Origin: Bhal region of Gujarat</li>
              <li>Description: A popular snack made from fermented rice and chickpea batter, Dhokla is known for its light, fluffy texture and tangy flavor.</li>
            </ul>
          </li>
          <li>
            <strong>Surti Onion:</strong>
            <ul>
              <li>Origin: Surat district</li>
              <li>Description: This onion variety is known for its sweetness and is used in various culinary dishes, making it a significant agricultural product in the region.</li>
            </ul>
          </li>
        </ul>
        <h3 style={{ color: 'blue' }}>Importance of Geographical Indications</h3>
        <ul>
          <li><strong>Economic Development:</strong> GIs help local artisans and farmers gain recognition and better prices for their products.</li>
          <li><strong>Cultural Heritage:</strong> They preserve traditional crafts and promote cultural identity.</li>
          <li><strong>Consumer Protection:</strong> GIs assure consumers of the quality and authenticity of products.</li>
        </ul>
        <h3 style={{ color: 'blue' }}>Step-by-Step Process to Register a Geographical Indication</h3>
        <ol>
          <li><strong>Eligibility:</strong> The applicant can be an individual, a group of individuals, or an organization representing producers of the goods in question.</li>
          <li><strong>Identification of the Product:</strong> Clearly identify the product for which GI registration is sought. It should have a unique quality, reputation, or characteristic attributable to its geographical origin.</li>
          <li><strong>Research:</strong> Conduct thorough research to ensure that the product meets the criteria for GI registration and is not already registered or in use by another entity.</li>
          <li><strong>Prepare the Application:</strong> Draft an application that includes:
            <ul>
              <li>The name of the Geographical Indication.</li>
              <li>A description of the product, including its qualities and reputation.</li>
              <li>The geographical area and details of the production process.</li>
              <li>Evidence of the uniqueness and traditional practices associated with the product.</li>
            </ul>
          </li>
          <li><strong>File the Application:</strong> Submit the application to the Geographical Indications Registry. This can be done online through the official website of the Controller General of Patents, Designs, and Trademarks. The application should include the prescribed fees (which may vary based on the type of applicant and the number of classes of goods).</li>
          <li><strong>Examination:</strong> After submission, the application will be examined by the GI Registry. The registrar may raise objections or require additional information.</li>
          <li><strong>Publication:</strong> If the application is accepted, it will be published in the Geographical Indications Journal. This allows other parties to oppose the registration if they have valid reasons.</li>
          <li><strong>Opposition:</strong> If any opposition is filed, a hearing will be conducted, and both parties will have the opportunity to present their cases.</li>
          <li><strong>Registration:</strong> If there are no oppositions, or if the opposition is resolved in favor of the applicant, the GI will be registered, and a certificate will be issued.</li>
          <li><strong>Renewal:</strong> The registration of a GI is valid indefinitely, but it must be renewed periodically, and the holder should ensure ongoing compliance with the conditions of the GI registration.</li>
        </ol>
        <h3 style={{ color: 'blue' }}>Resources and Contacts</h3>
        <ul>
          <li><strong>Geographical Indications Registry:</strong> Website: <a href="https://ipindia.gov.in">ipindia.gov.in</a></li>
          <li>This site provides detailed guidelines, forms, and further information on the registration process.</li>
          <li><strong>Local Support:</strong> You may also consider consulting with local legal experts or institutions that specialize in intellectual property rights to assist you with the application process.</li>
        </ul>
        <h3 style={{ color: 'blue' }}>Videos</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4Hd_GaRxkEo?si=XTVJBg1RU3JsxEoD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3M99vkXF6uw?si=sbImLHfOp95pbfDw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;

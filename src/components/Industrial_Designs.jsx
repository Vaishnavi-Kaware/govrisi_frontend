import React from 'react';
import Header from './Header';
//import Navbar from './Navbar';
import industrial1 from '../assets/images/industrial1.jpg'; // Import the images
import industrial2 from '../assets/images/industrial2.jpg';
import industrial3 from '../assets/images/industrial3.jpg';
//import './App.css'; // Optional for additional styling

const App = () => {
    return (
        <div>
            <Header />
          
            <main style={styles.main}>
                <h2 style={styles.heading}>What is Industrial Design?</h2>
                <p>
                    Industrial design is a creative process that involves designing the form and features of products that are mass-produced. It's a trans-disciplinary field that combines technology, manufacturing, and design to create products that are functional, aesthetically pleasing, and manufacturable. The goal of industrial design is to improve the user experience and the overall value of a product or service.
                </p>
                <div style={styles.imageContainer}>
                    <img src={industrial1} alt="Industrial Design 1" style={styles.image} />
                    <img src={industrial2} alt="Industrial Design 2" style={styles.image} />
                    <img src={industrial3} alt="Industrial Design 3" style={styles.image} />
                </div>
                <h2 style={styles.subheading}>Here are some places in Gujarat where you can study industrial design:</h2>
                <ul>
                    <li><strong>University of Gujarat:</strong> Offers an industrial design program</li>
                    <li><strong>Silver Oak Institute of Design (SOID):</strong> Located in Gota, Surat, and offers an industrial/product design course</li>
                </ul>
                <h2 style={styles.subheading}>To register an industrial design in Gujarat, you can follow these steps:</h2>
                <ul>
                    <li><strong>Check for existing registration:</strong> Use the Designs office to search if the design has already been registered.</li>
                    <li><strong>Prepare a representation:</strong> Create an exact representation of the design on the article.</li>
                    <li><strong>Identify the design class:</strong> Categorize the design into a class for systematic registration.</li>
                    <li><strong>Include a statement of novelty:</strong> Specify the claim in the representation.</li>
                    <li><strong>Add a disclaimer:</strong> If the design includes words, letters, numerals, or suggests mechanical action, add a disclaimer.</li>
                    <li><strong>Claim a priority date:</strong> If you've applied for protection in convention countries, you can claim a priority date.</li>
                    <li><strong>Determine the fee:</strong> The government fee is ₹1,000 for individuals, startups, and MSME, and ₹4,000 for other entity types.</li>
                    <li><strong>File Form 1:</strong> Include the applicant's name, address, nationality, the name of the article, the class number, and the address for service in India.</li>
                    <li><strong>Submit documents:</strong> Include a certified copy of the extract of disclaimers, affidavits, and a declaration.</li>
                    <li><strong>Comply with objections:</strong> If the patent office raises objections, comply with them.</li>
                </ul>
                <p>You can submit the application and documents at any branch of the Indian Patent Office (IPO). Design registration is a type of intellectual property protection that helps protect designs from counterfeiting.</p>
                <h3 style={styles.subheading}>Design Registration In Gujarat</h3>
                <ul>
                    <li>The design should be new and original.</li>
                    <li>The design should relate to the shape, configuration, pattern, or ornament that is applied to an article.</li>
                    <li>The design must be applied to any article through industrial processing.</li>
                    <li>The design must be visible and should appear in the article.</li>
                </ul>
                
                {/* YouTube Videos */}
                <div style={styles.videoContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vfUa2wr1kHI?si=RC2A5JtAyt-CrC7H"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-LqqEjB7u1o?si=lpGkMupJ2uHKjClE"
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
};

const styles = {
    main: {
        padding: '20px',
        textAlign: 'left', // Align text to the left
    },
    heading: {
        color: 'blue', // Set heading color to blue
        marginBottom: '10px', // Optional margin below the heading
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
    },
    image: {
        width: '300px', // Increased width for the images
        height: 'auto', // Maintain aspect ratio
        margin: '0 10px', // Space between images
    },
    videoContainer: {
        display: 'flex',
        justifyContent: 'space-around', // Arrange videos in one line
        marginTop: '40px', // Space above the video section
    },
    subheading: {
        color: 'blue', // Set subheading color to blue
    },
};

export default App;


// import React from 'react';
// import industrial1 from '../assets/images/industrial1.jpg';
// import industrial2 from '../assets/images/industrial2.jpg';
// import industrial3 from '../assets/images/industrial3.jpg';
// import styles from '../assets/styles/Industrial_Designs.module.css'; // Correctly import your CSS module

// const App = () => {
//     return (
//         <div>
//             <main className={styles.main}>
//                 <h2 className={styles.heading}>What is Industrial Design?</h2>
//                 <p>
//                     Industrial design is a creative process that involves designing the form and features of products that are mass-produced. It's a trans-disciplinary field that combines technology, manufacturing, and design to create products that are functional, aesthetically pleasing, and manufacturable. The goal of industrial design is to improve the user experience and the overall value of a product or service.
//                 </p>
//                 <div className={styles.imageContainer}>
//                     <img src={industrial1} alt="Industrial Design 1" className={styles.image} />
//                     <img src={industrial2} alt="Industrial Design 2" className={styles.image} />
//                     <img src={industrial3} alt="Industrial Design 3" className={styles.image} />
//                 </div>
//                 <h2 className={styles.subheading}>Here are some places in Gujarat where you can study industrial design:</h2>
//                 <ul>
//                     <li><strong>University of Gujarat:</strong> Offers an industrial design program</li>
//                     <li><strong>Silver Oak Institute of Design (SOID):</strong> Located in Gota, Surat, and offers an industrial/product design course</li>
//                 </ul>
//                 <h2 className={styles.subheading}>To register an industrial design in Gujarat, you can follow these steps:</h2>
//                 <ul>
//                     <li><strong>Check for existing registration:</strong> Use the Designs office to search if the design has already been registered.</li>
//                     <li><strong>Prepare a representation:</strong> Create an exact representation of the design on the article.</li>
//                     <li><strong>Identify the design class:</strong> Categorize the design into a class for systematic registration.</li>
//                     <li><strong>Include a statement of novelty:</strong> Specify the claim in the representation.</li>
//                     <li><strong>Add a disclaimer:</strong> If the design includes words, letters, numerals, or suggests mechanical action, add a disclaimer.</li>
//                     <li><strong>Claim a priority date:</strong> If you've applied for protection in convention countries, you can claim a priority date.</li>
//                     <li><strong>Determine the fee:</strong> The government fee is ₹1,000 for individuals, startups, and MSME, and ₹4,000 for other entity types.</li>
//                     <li><strong>File Form 1:</strong> Include the applicant's name, address, nationality, the name of the article, the class number, and the address for service in India.</li>
//                     <li><strong>Submit documents:</strong> Include a certified copy of the extract of disclaimers, affidavits, and a declaration.</li>
//                     <li><strong>Comply with objections:</strong> If the patent office raises objections, comply with them.</li>
//                 </ul>
//                 <p>You can submit the application and documents at any branch of the Indian Patent Office (IPO). Design registration is a type of intellectual property protection that helps protect designs from counterfeiting.</p>
//                 <h3 className={styles.subheading}>Design Registration In Gujarat</h3>
//                 <ul>
//                     <li>The design should be new and original.</li>
//                     <li>The design should relate to the shape, configuration, pattern, or ornament that is applied to an article.</li>
//                     <li>The design must be applied to any article through industrial processing.</li>
//                     <li>The design must be visible and should appear in the article.</li>
//                 </ul>
//                 <h2 className={styles.heading}>Watch These Videos:</h2>
//                 <div className={styles.videoContainer}>
//                     <iframe
//                         width="560"
//                         height="315"
//                         src="https://www.youtube.com/embed/vfUa2wr1kHI?si=RC2A5JtAyt-CrC7H"
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
//                         allowFullScreen
//                     ></iframe>
//                     <iframe
//                         width="560"
//                         height="315"
//                         src="https://www.youtube.com/embed/-LqqEjB7u1o?si=lpGkMupJ2uHKjClE"
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default App;

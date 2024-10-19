// import React, { useState } from 'react';
// //import Cards from './Cards'; 
// import '../assets/styles/StartupHomePage.css';

// const StartupHomePage = () => {
//   const [expandedCard, setExpandedCard] = useState(null);

//   // Array of card data
//   const cardData = [
//     { id: 1, title: 'Company A', description: 'Short info about Company A.' },
//     { id: 2, title: 'Company B', description: 'Short info about Company B.' },
//     { id: 3, title: 'Company C', description: 'Short info about Company C.' },
//     { id: 4, title: 'Company D', description: 'Short info about Company D.' },
//     { id: 5, title: 'Company E', description: 'Short info about Company E.' },
//     { id: 6, title: 'Company F', description: 'Short info about Company F.' },
//     { id: 7, title: 'Company G', description: 'Short info about Company G.' },
//     { id: 8, title: 'Company H', description: 'Short info about Company H.' },
//   ];

//   // Array of colors for the cards
//   const colors = [
//     '#e0f7fa', // Light Cyan
//     '#ffe0b2', // Light Amber
//     '#ffccbc', // Light Red
//     '#d1c4e9', // Light Purple
//     '#c8e6c9', // Light Green
//     '#f8bbd0', // Light Pink
//     '#bbdefb', // Light Blue
//     '#d7ccc8', // Brown
//   ];

//   const handleCardClick = (id) => {
//     setExpandedCard(expandedCard === id ? null : id); // Toggle the expanded state
//   };

//   const handleContainerClick = () => {
//     setExpandedCard(null); // Reset expanded card when clicking on the container
//   };

//   return (
//     <div className="cards-container" onClick={handleContainerClick}>
//       {cardData.map((card, index) => (
//         <div
//           key={card.id}
//           className={`card ${expandedCard === card.id ? 'expanded' : ''}`}
//           onClick={(e) => {
//             e.stopPropagation(); // Prevent the container click from firing
//             handleCardClick(card.id);
//           }}
//           style={{ backgroundColor: colors[index % colors.length] }} // Apply different color to each card
//         >
//           <h3>{card.title}</h3>
//           <p>{expandedCard === card.id ? 'Detailed information about ' + card.title : card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StartupHomePage;



import React, { useState } from 'react';
import Header from './Header';
import '../assets/styles/StartupHomePage.css'; // Ensure this path is correct

const StartupHomePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cardData = [
    { id: 1, title: 'Company A', description: 'Short info about Company A.' },
    { id: 2, title: 'Company B', description: 'Short info about Company B.' },
    { id: 3, title: 'Company C', description: 'Short info about Company C.' },
    { id: 4, title: 'Company D', description: 'Short info about Company D.' },
    { id: 5, title: 'Company E', description: 'Short info about Company E.' },
    { id: 6, title: 'Company F', description: 'Short info about Company F.' },
    { id: 7, title: 'Company G', description: 'Short info about Company G.' },
    { id: 8, title: 'Company H', description: 'Short info about Company H.' },
  ];

  const colors = [
    '#e0f7fa', '#ffe0b2', '#ffccbc', '#d1c4e9',
    '#c8e6c9', '#f8bbd0', '#bbdefb', '#d7ccc8',
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleContainerClick = () => {
    setExpandedCard(null);
  };

  return (
    <div>
    <Header />
    <div className="startup-cards-container" onClick={handleContainerClick}>
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`startup-card ${expandedCard === card.id ? 'expanded' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(card.id);
          }}
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <h3>{card.title}</h3>
          <p>{expandedCard === card.id ? 'Detailed information about ' + card.title : card.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default StartupHomePage;




// OngoingProjects.jsx
import React from 'react';

const OngoingProjects = () => {
    const projects = [
        { 
            title: 'AI in Healthcare', 
            description: 'A project focused on implementing AI solutions in healthcare for better diagnosis and patient management.', 
            startDate: '2023-01-15' 
        },
        { 
            title: 'Blockchain in Supply Chain', 
            description: 'Exploring how blockchain technology can be used to enhance transparency and efficiency in supply chain management.', 
            startDate: '2023-02-01' 
        },
        { 
            title: 'Renewable Energy Optimization', 
            description: 'A study on optimizing renewable energy sources for reducing carbon footprint in urban areas.', 
            startDate: '2023-03-10' 
        },
        { 
            title: 'Smart City Infrastructure', 
            description: 'Developing a smart infrastructure system to improve urban living through IoT and AI technologies.', 
            startDate: '2023-04-05' 
        },
        { 
            title: 'Cybersecurity in Banking', 
            description: 'Research on enhancing cybersecurity protocols in banking to prevent fraud and data breaches.', 
            startDate: '2023-05-20' 
        },
        { 
            title: 'Augmented Reality for Education', 
            description: 'Using AR to create immersive learning experiences for students in various subjects.', 
            startDate: '2023-06-15' 
        },
        { 
            title: '5G Technology Adoption', 
            description: 'Analyzing the benefits and challenges of adopting 5G technology in telecommunication and mobile services.', 
            startDate: '2023-07-01' 
        },
        { 
            title: 'Sustainable Architecture', 
            description: 'Researching sustainable materials and energy-efficient designs for modern urban architecture.', 
            startDate: '2023-08-12' 
        }
    ];

    return (
        <div className="container mt-5">
            <h2>Ongoing Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Start Date: {project.startDate}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OngoingProjects;





// import React from 'react';

// const OngoingProjects = ({ projects }) => {
//     return (
//         <div className="container mt-5">
//             <h2>Ongoing Projects</h2>
//             <div className="row">
//                 {projects.length > 0 ? (
//                     projects.map((project, index) => (
//                         <div className="col-md-4 mb-4" key={index}>
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h5 className="card-title">{project.title}</h5>
//                                     <p className="card-text">{project.description}</p>
//                                     <p className="card-text">
//                                     <p className="card-text">{project.milestones}</p>
//                                     <p className="card-text"></p>    
//                                         <small className="text-muted">Start Date: {project.startDate}</small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No ongoing projects available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default OngoingProjects;





// import React, { useState, useEffect } from 'react';
// import './Carousel.css'; // Include your custom styles if needed
// import image1 from '../../images/1.png'
// import image2 from '../../images/2.png'
// import image3 from '../../images/3.png'
// import image4 from '../../images/4.png'
// import image5 from '../../images/5.png'
// import image6 from '../../images/6.png'




// const Carousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const galleryItems = [
//         image1,
//         image2,
//         image3,
//         image4,
//         image5,
//         image6,


//     ];

//     const updateGallery = () => {
//         // Logic to update the gallery, you can customize this based on your requirements
//     };

//     const setCurrentState = (direction) => {
//         // Logic to set the current state based on the direction
//         // You can use setCurrentSlide to update the current slide state
//     };

//     const setControls = () => {
//         // Logic to set the controls
//         // You can use buttons or other UI elements for controls
//     };

//     const useControls = () => {
//         // Logic to handle control events
//         // You can use onClick to trigger setCurrentState
//     };

//     useEffect(() => {
//         // Call necessary initialization functions here
//         updateGallery();
//         setControls();
//     }, []); // Run this effect only once on component mount

//     // Call useControls directly in the component body
//     useControls();

//     return (
//         <div className="gallery">
//             <div className="gallery-container">
//                 {galleryItems.map((item, index) => (
//                     <img
//                         key={index}
//                         className={`gallery-item gallery-item-${index + 1}`}
//                         data-index={index + 1}
//                         src={item}
//                         alt={`Image ${index + 1}`}
//                     />
//                 ))}
//             </div>
//             <div className="gallery-controls"></div>
//         </div>
//     );
// };

// export default Carousel;

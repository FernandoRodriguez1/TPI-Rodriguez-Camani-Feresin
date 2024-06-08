import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // este implementa los estilos del carrousel, es necesario.
import { Carousel } from 'react-responsive-carousel';
import { getAllPhotosHaircut } from './photos-service'; 
import "./galery-photos.css";
import image1 from "./../Photos/Barberia-1.jpeg";
import image2 from "./../Photos/Barberia-2.webp";
import image3 from "./../Photos/Barberia-3.webp";

const GaleryPhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    useEffect(() => {
    //   const fetchPhotos = async () => {
    //     try {
    //       const response = await getAllPhotosHaircut();
    //       setPhotos(response.data);
    //       setLoading(false);
    //     } catch (err) {
    //       setError(err);
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchPhotos();
    const images = [
      { url: image1 },
      { url: image2 },
      { url: image3 }
    ];

    setPhotos(images);
     }, []);
  
    if (loading) return <p>Cargando fotos...</p>;
    if (error) return <p>Error al cargar fotos: {error.message}</p>;
  
    return (
      <div className="galery-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {photos.map((photo, index) => (
          <div key={index} className="carousel-slide">
            <img src={photo.url} alt={`Foto ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>

    );
};

export default GaleryPhotosPage;

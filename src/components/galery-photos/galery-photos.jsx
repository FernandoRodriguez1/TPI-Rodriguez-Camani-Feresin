import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // este implementa los estilos del carrousel, es necesario.
import { Carousel } from 'react-responsive-carousel';
import { getAllPhotosHaircut } from './photos-service'; 

const GaleryPhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const response = await getAllPhotosHaircut();
          setPhotos(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchPhotos();
    }, []);
  
    if (loading) return <p>Cargando fotos...</p>;
    if (error) return <p>Error al cargar fotos: {error.message}</p>;
  
    return (
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    );
};

export default GaleryPhotosPage;

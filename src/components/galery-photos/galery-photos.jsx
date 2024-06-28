import React, { useState, useEffect, useContext } from "react";
import "./galery-photos.css";
import image1 from "./../Photos/Barberia-1.jpeg";
import image2 from "./../Photos/Barberia-2.webp";
import image3 from "./../Photos/Barberia-3.webp";
import { ThemeContext } from "../Theme/ThemeContext";

const GaleryPhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    const images = [
      { url: image1, title: "Reseñas", link: "/link1" },
      { url: image2, title: "Turnos", link: "/link2" },
      { url: image3, title: "Iniciar Sesion", link: "/link3" },
    ];

    setPhotos(images);
  }, []);

  return (
    <div className={`galery-container ${theme}`}>
      {photos.map((photo, index) => (
        <div key={index} className={`photo-card ${theme}`}>
          <img
            src={photo.url}
            alt={`Foto ${index + 1}`}
            className="photo-image"
          />
          <h2 className="photo-title">{photo.title}</h2>
          <a href={photo.link} className="photo-button">
            Ver más
          </a>
        </div>
      ))}
    </div>
  );
};

export default GaleryPhotosPage;

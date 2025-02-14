import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/HomePage.css'; 
import Slider from 'react-slick';
import bannerImage1 from '../assets/banner-home-medicina-general-desktop.webp';
import bannerImage2 from '../assets/banners-home-medicina-general-desktop2.webp';
import bannerImage3 from '../assets/ImagenBanner3.webp';

const HomePage = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const irAPersonajes = () => { 
    if (id === "") {
      alert("Debe seleccionar un personaje");
    } else {
      navigate(`/personajes/${id}`);
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <main className="home-container">
      <div className="select-column">
        <div className="home-card-container">
          <h1>Consultas Médicas</h1>
          
          <select value={id} onChange={({ target }) => setId(target.value)}>
            <option value="">Busca por especialidad</option>
            <option value="1">Medicina General</option>
            <option value="2">Traumatología</option>
            <option value="3">Cardiología</option>
            <option value="4">Neurología</option>
            <option value="5">Bronco Pulmonar</option>
          </select>
          <div className="button-container">
            <button onClick={irAPersonajes}>Buscar</button>
          </div>
          
          <select value={id} onChange={({ target }) => setId(target.value)}>
            <option value="">Busca por Nombre de especialista</option>
            <option value="1">Gregory House</option>
            <option value="2">Alfredo Casa</option>
            <option value="3">Angela Esparza</option>
            <option value="4">Valentín Campusano</option>
          </select>
          <div className="button-container">
            <button onClick={irAPersonajes}>Buscar</button>
          </div>

          <select value={id} onChange={({ target }) => setId(target.value)}>
            <option value="1">I Región</option>
            <option value="2">II Región</option>
            <option value="3">III Región</option>
            <option value="4">IV Región</option>
            <option value="5">V Región</option>
            <option value="6">VI Región</option>
            <option value="7">VII Región</option>
            <option value="8">VIII Región</option>
            <option value="9">IX Región</option>
            <option value="10">X Región</option>
            <option value="11">XI Región</option>
            <option value="12">XII Región</option>
            <option value="13">XIII Región</option>
            <option value="14">XV Región</option>
            <option value="15">XVI Región</option>
            <option value="16">Región Metropolitana</option>

          </select>
          <div className="button-container">
            <button onClick={irAPersonajes}>Buscar</button>
          </div>
        </div>
      </div>

      <div className="carousel-column">
        <Slider {...settings}>
          <div>
            <img src={bannerImage1} alt="Carrusel 1" className="carousel-image" />
          </div>
          <div>
            <img src={bannerImage2} alt="Carrusel 2" className="carousel-image" />
          </div>
          <div>
            <img src={bannerImage3} alt="Carrusel 3" className="carousel-image" />
          </div>
        </Slider>
      </div>
    </main>
  );
}

export default HomePage;
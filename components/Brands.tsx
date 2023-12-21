'use client'

import React, { useState, useEffect } from 'react';

function Brands() {
  const [logos, setLogos] = useState([
    "/funnels-sales-service.webp",
    "/money-generation-service.webp",
    "/strategy-service-business.webp",
    "/digital-marketing-service.webp",
    "/seo-service.webp",
    "/elementor-builder-service.webp",
    "/wordpress-builder-service.webp",
    "/nextjs-service.webp",
    "/css-service.webp",
    "/html-service.webp",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prevLogos) => [...prevLogos, ...prevLogos.slice(0, 4)]);
    }, 2000); // ajusta la velocidad del autoscroll según sea necesario

    return () => clearInterval(interval);
  }, []); // el segundo argumento del useEffect es un array de dependencias, en este caso, está vacío

  return (
    <section className='w-full flex flex-row justify-center items-center bg-foreground h-[100px]'>
      <div className="logos">
        {logos.map((logo, index) => (
          <div key={index} className="logos-slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;

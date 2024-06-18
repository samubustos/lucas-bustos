// src/components/LinkTree.js
import React from 'react';
import LinkButton from './LinkButton';
import Logo from './assets/logo.png';
import Banner from './assets/bg-peluqueria.jpg';
import '../index.css'

const LinkTree = () => {
  const links = [
    { url: 'https://www.instagram.com', label: 'Sacar turno peluqueria' },
    { url: '', label: 'Whatsapp' },
    { url: 'https://www.instagram.com', label: 'Instagram' },
  ];

  return (
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-8 text-center relative sm:bg-white">
      <div className="relative">
        <div className="w-full h-48 sm:h-32 rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-300">
          <img src={Banner} alt="Banner" className="absolute w-full h-full object-cover rounded-t-lg" />
          
        </div>
      </div>
      <h1 className="text-3xl sm:text-2xl font-bold mb-4 color-text-brown mt-2">Lucas Bustos</h1>
      <p className="text-gold sm:text-gray-600 mb-6">Descripción breve o biografía.</p>
      {links.map((link, index) => (
        <LinkButton key={index} url={link.url} label={link.label} />
      ))}
    </div>
  );
};

export default LinkTree;

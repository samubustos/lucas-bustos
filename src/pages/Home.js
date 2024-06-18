// src/pages/Home.js
import React from 'react';
import LinkTree from '../components/LinkTree';
import '../index.css'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:max-w-md p-4 sm:p-8 bg-page shadow-lg rounded-lg text-center">
        <h1 className="text-5xl font-extrabold color-text-brown mb-6">Links GO.</h1>
        <LinkTree />
      </div>
    </div>
  );
};

export default Home;

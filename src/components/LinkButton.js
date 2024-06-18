// src/components/LinkButton.js
import React from 'react';
import { Button } from 'flowbite-react';

const LinkButton = ({ url, label }) => {
  return (
    <Button href={url} gradientDuoTone="cyanToBlue" className="w-full mb-2" target="_blank" rel="noopener noreferrer">
      {label}
    </Button>
  );
};

export default LinkButton;

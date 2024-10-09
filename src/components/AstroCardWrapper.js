// src/components/AstroCardWrapper.js

import React, { useEffect, useRef } from 'react';

const AstroCardWrapper = ({ name, position, aboutMe, linkedin, github, cvLink, profileImage }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/path-to-your-built-card-component.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (cardRef.current) {
        // Update the custom element's properties
        Object.assign(cardRef.current, { name, position, aboutMe, linkedin, github, cvLink, profileImage });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [name, position, aboutMe, linkedin, github, cvLink, profileImage]);

  return <card-component ref={cardRef}></card-component>;
};

export default AstroCardWrapper;

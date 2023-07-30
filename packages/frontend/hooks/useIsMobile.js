import React, { useEffect, useState } from 'react';

const MobileDetector = () => {
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as per your requirements
    };

    // Initial check
    handleResize();

    // Add event listener to handle changes in screen size
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile
};

export default MobileDetector;

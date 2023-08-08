import React, { useEffect, useState } from 'react';
import PlatformUtils from '@/utils/PlatformUtils'

const MobileDetector = () => {
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    setIsMobile(PlatformUtils(window).isMobile)
  }, [ setIsMobile ])

  return isMobile
};

export default MobileDetector;

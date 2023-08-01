import React, { useEffect, useLayoutEffect, useState } from 'react';
import PlatformUtils from '@/utiks/PlatformUtils'

const MobileDetector = () => {
  const [ isMobile, setIsMobile ] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(PlatformUtils(window).isMobile)
  }, [ setIsMobile ])

  return isMobile
};

export default MobileDetector;

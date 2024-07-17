"use client"
import { useState, useEffect } from 'react';


const WindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
      if (typeof window !== 'undefined' && window.innerWidth !== windowSize.width) {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener('resize', handleResize);

        handleResize();


        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);  

    return windowSize;
}

export default WindowSize;
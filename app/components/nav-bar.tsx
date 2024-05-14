'use client';

import React, { useEffect, useState } from 'react';

import Navigation from './nav';

export default function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <div
      className={`bg-white z-50 sticky transition-opacity duration-300 ease-in-out top-0  ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${prevScrollPos > 80 ? 'shadow-custom-light' : ''}`}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <Navigation />
    </div>
  );
}

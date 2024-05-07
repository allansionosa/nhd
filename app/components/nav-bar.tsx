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
  });
  return (
    <div
      className={`bg-white sticky z-10 transition-opacity duration-300 ${
        visible ? 'opacity-100 top-0' : 'opacity-0'
      }`}
    >
      <Navigation />
    </div>
  );
}

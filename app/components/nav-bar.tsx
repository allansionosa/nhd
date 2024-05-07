'use client';

import React, { useEffect, useState } from 'react';

import Navigation from './nav';

export default function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(80);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    if (currentScrollPos > 80) {
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div
      className={`bg-white z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100 top-0' : 'opacity-0'
      } ${prevScrollPos > 100 ? 'sticky' : ''}`}
    >
      <Navigation />
    </div>
  );
}

import React, { useEffect } from 'react';

const RandomBlocks = () => {
  useEffect(() => {
    generateRandomBlocks();
  }, []);

  const generateRandomBlocks = () => {
    const blockContainer = document.getElementById('colorBlock');

    if (!blockContainer) return;

    blockContainer.innerHTML = ''; // Clear existing blocks

    const blockSize = 10;

    for (let i = 0; i < 10; i++) {
      const block = document.createElement('div');
      block.className = 'random-block';
      block.style.position = 'fixed';
      block.style.left = `${Math.floor(Math.random() * (window.innerWidth - blockSize))}px`;
      block.style.top = `${Math.floor(Math.random() * (window.innerHeight - blockSize))}px`;
      block.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      block.style.width = `${blockSize}px`;
      block.style.height = `${blockSize}px`;
      block.style.zIndex = '-9';
      block.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

      blockContainer.appendChild(block);
    }
  };

  return (
    <div
      id="colorBlock"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        pointerEvents: 'none', // so that it doesn't block clicks
      }}
    />
  );
};

export default RandomBlocks;
import React from 'react';

export const Header = () => {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
        <span className="font-bold">Google Developer Groups On Campus</span>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">Home</a>
        <a href="#" className="text-gray-300 hover:text-white">About</a>
        <a href="#" className="text-gray-300 hover:text-white">Devcation '25</a>
        <a href="#" className="text-gray-300 hover:text-white">Timeline</a>
        <a href="#" className="text-gray-300 hover:text-white">Events</a>
        <a href="#" className="text-gray-300 hover:text-white">More ▼</a>
        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        <a href="#" className="ml-4"><img src="/discord.png" alt="Discord" className="h-6" /></a>
      </nav>
    </header>
  );
};

import React from 'react';

export const Home = () => {
  return (
    <main className="container mx-auto text-center p-8">
      <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: "'Your Playful Font'" }}>Welcome to Devcation '25</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">Register Now</button>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="#"><img src="/x.png" alt="X" className="h-6" /></a>
        <a href="#"><img src="/fb.png" alt="Facebook" className="h-6" /></a>
        <a href="#"><img src="/linkedin.png" alt="LinkedIn" className="h-6" /></a>
        <a href="#"><img src="/insta.png" alt="Instagram" className="h-6" /></a>
        <a href="#"><img src="/youtube.png" alt="YouTube" className="h-6" /></a>
      </div>
      <img src="/devcation-graphic.png" alt="Devcation Graphic" className="mx-auto w-1/2" />
    </main>
  );
};

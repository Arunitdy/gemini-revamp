import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Devcation '25. All rights reserved.</p>
      <div className="mt-2">
        <a href="/privacy" className="text-gray-300 hover:text-white mr-4">Privacy Policy</a>
        <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};


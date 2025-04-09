import { useState } from 'react'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Header } from './basic/header/header'
import { Footer } from './basic/footer/footer'
import './App.css'

export default function App() {
  return (<>
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  </>
  );
}
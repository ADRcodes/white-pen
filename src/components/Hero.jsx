import React from 'react';
import whitePenMainImage from '../assets/images/white-pen-main.jpeg';

const Hero = () => {
  return (
    <div className='flex justify-center bg-black'>
      <div className="relative w-full max-w-6xl h-screen overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${whitePenMainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>

        <div className="z-10">
          <h1 className="text-white text-5xl font-bold">The White Pen</h1>
          <p className="text-white text-xl mt-4">Experience the elegance of white ink.</p>
          <button className="btn text-text bg-gradient-to-r from-slate-50 via-slate-60 to-slate-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2">Discover More</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;

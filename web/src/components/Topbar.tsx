// src/components/Topbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 flex"><img src="Logo.png" style={{width:40,height:40}}></img>TransformoDocs</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-teal-500 hover:underline">Home</Link></li>
            <li><Link to="/convert-pdf" className="text-teal-500 hover:underline">Convert PDF</Link></li>
            <li><Link to="/convert-non-machine-readable" className="text-teal-500 hover:underline">Convert Non-Machine-Readable</Link></li>
            <li><Link to="/convert-image" className="text-teal-500 hover:underline">Convert Image</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';  // Adjust the import path as needed
import '../assets/styles/Myapp.css';  // Ensure this path is correct
import download from '../assets/images/download.png';  // Ensure this path is correct
import convert from '../assets/images/convert-icon.png';  // Ensure this path is correct
import imageConvert from '../assets/images/imageConvert.png';  // Ensure this path is correct


const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topbar />
      <main className="container flex-grow px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Upload Document Here</h1>
            <p className="text-xl text-gray-600">Select a document type to convert it as needed.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link 
              to="/convert-pdf"
              className="flex flex-col items-center p-8 bg-white shadow-xl cursor-pointer rounded-2xl hover:bg-gray-50"
            >
              <img src={download} alt="Example" className="w-32 h-32 mb-6 rounded-full" />
              <div className="px-6 py-3 text-black bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 whitespace-nowrap" style={{ fontSize: 20, fontWeight: 500 }}>
                Convert Machine Readable
              </div>
            </Link>
            <Link 
              to="/convert-non-machine-readable"
              className="flex flex-col items-center p-8 bg-white shadow-xl cursor-pointer rounded-2xl hover:bg-gray-50"
            >
              <img src={convert} alt="Example" className="w-32 h-32 mb-6 rounded-full" />
              <div className="px-6 py-3 text-black bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 whitespace-nowrap" style={{ fontSize: 20, fontWeight: 500 }}>
                Convert to Machine-Readable
              </div>
            </Link>
            <Link 
              to="/convert-image"
              className="flex flex-col items-center p-8 bg-white shadow-xl cursor-pointer rounded-2xl hover:bg-gray-50"
            >
              <img src={imageConvert} alt="Example" className="w-32 h-32 mb-6 rounded-full" />
              <div className="px-6 py-3 text-black bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 whitespace-nowrap" style={{ fontSize: 20, fontWeight: 500 }}>
                Convert Image
              </div>
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-gray-200">
        <div className="container px-4 mx-auto text-center text-gray-600">
          <p>&copy; 2024 Document Conversion Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;

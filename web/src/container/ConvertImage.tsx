import React from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import Topbar from '../components/Topbar';
import UploadImage from '../components/UploadImage';

const ConvertImage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Topbar />
      <main className="container flex-grow px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Convert Your Image</h1>
            <p className="text-xl text-gray-600">Transform your images into machine-readable documents with ease.</p>
          </div>
          <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
            <div className="p-8">
              
              <UploadImage />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-gray-100">
        <div className="container px-4 mx-auto text-center text-gray-600">
          <p>&copy; 2023 TransformoDocs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConvertImage;
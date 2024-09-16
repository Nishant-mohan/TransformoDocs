import React from 'react';
import { FileText } from 'lucide-react';
import Topbar from '../components/Topbar'; // Adjust the import path as needed
import UploadPdf from '../components/UploadPdf'; // Adjust the import path as needed

const ConvertPdf: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topbar />
      <main className="container flex-grow px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Convert PDF</h1>
            <p className="text-xl text-gray-600">Upload your PDF file and convert it to the desired format.</p>
          </div>
          <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
            <div className="p-8">
              
              <UploadPdf /> {/* Use the UploadPdf component here */}
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-gray-200">
        <div className="container px-4 mx-auto text-center text-gray-600">
          <p>&copy; 2023 Document Conversion Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConvertPdf;

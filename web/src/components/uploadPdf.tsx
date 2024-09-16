import React, { useState } from 'react';
import { Upload, Download } from 'lucide-react';

const MAX_FILE_SIZE_MB = 8;
const UPLOAD_PDF_URL = `${import.meta.env.VITE_REACT_APP_BACKWEB || 'http://localhost:3000'}/upload/pdf`;

const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<Blob | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (file.type !== "application/pdf") {
        alert('Only PDF files are allowed.');
        event.target.value = '';
        return;
      }
  
      // Check file size
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert(`File size should not exceed ${MAX_FILE_SIZE_MB}MB.`);
        event.target.value = '';
        return;
      }
  
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch(UPLOAD_PDF_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setResponse(blob);
      } else {
        alert('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = () => {
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'response.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Upload PDF</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="pdf-upload" className="block text-sm font-medium">
              Select PDF file
            </label>
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          <button
            onClick={handleUpload}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <Upload className="mr-2 h-5 w-5" />
            Upload PDF
          </button>
        </div>
        {response && (
          <div className="mt-4">
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
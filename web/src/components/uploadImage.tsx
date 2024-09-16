import React, { useState } from 'react';
import { Upload, Download, Image as ImageIcon } from 'lucide-react';

const MAX_FILE_SIZE_MB = 8;

const ImageToDocumentComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(selectedFile.type)) {
        alert('Only JPEG, PNG, and GIF files are allowed.');
        event.target.value = '';
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert(`File size should not exceed ${MAX_FILE_SIZE_MB}MB.`);
        event.target.value = '';
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please select an image to convert.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKWEB}/convert-image`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setResponse(blob);
      } else {
        alert('Conversion failed.');
      }
    } catch (error) {
      console.error('Error converting image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Image to Document Converter</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
              Select Image (JPEG, PNG, GIF)
            </label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full transition duration-300 ease-in-out border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-36 bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImageIcon className="w-12 h-12 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">JPEG, PNG or GIF (MAX. {MAX_FILE_SIZE_MB}MB)</p>
                </div>
                <input id="image-upload" type="file" accept=".jpeg,.jpg,.png,.gif" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>
          {file && (
            <p className="text-sm text-gray-600">
              Selected file: {file.name}
            </p>
          )}
          <button
            onClick={handleConvert}
            className={`w-full flex items-center justify-center px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out ${
              isUploading || !file
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
            }`}
            disabled={!file || isUploading}
          >
            {isUploading ? (
              <>
                <Upload className="w-5 h-5 mr-2 animate-spin" />
                Converting...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Convert to Document
              </>
            )}
          </button>
          {isUploading && (
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 transition-all duration-500 ease-out bg-indigo-600 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
            </div>
          )}
        </div>
        {response && (
          <div className="mt-6">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center w-full px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Converted Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageToDocumentComponent;
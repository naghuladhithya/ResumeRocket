import React, { useRef } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

function UploadResume({ currentStep, setCurrentStep, resumeUploaded, handleResumeUpload }) {
  const fileInputRef = useRef(null);

  // Open file dialog
  const onClickUpload = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const onFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Optional: File size/type validation
    if (file.size > 10 * 1024 * 1024) {
      alert("File too large. Max 10MB allowed.");
      return;
    }

    await handleResumeUpload(file); // Call parent function with selected file
  };

  return (
    <>
      {currentStep === 'upload' && (
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">
              Find Your Perfect Job Match
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Upload your resume and let AI find the best job opportunities for you
            </p>

            {/* Hidden file input */}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={onFileChange}
              style={{ display: 'none' }}
            />

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {!resumeUploaded ? (
                <div
                  onClick={onClickUpload}
                  className="border-2 border-dashed border-purple-400 rounded-xl p-12 hover:border-purple-300 transition-colors cursor-pointer group"
                >
                  <Upload className="mx-auto h-12 w-12 text-purple-400 group-hover:text-purple-300" />
                  <div className="mt-4">
                    <p className="text-lg font-medium text-white">Click to upload your resume</p>
                    <p className="text-gray-400 mt-2">PDF, DOC, or DOCX up to 10MB</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
                  <p className="text-lg font-medium text-white mt-4">Resume uploaded successfully!</p>
                  <p className="text-gray-400 mt-2">Processing and analyzing your skills...</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                    <div
                      className="bg-purple-500 h-2 rounded-full animate-pulse"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UploadResume;

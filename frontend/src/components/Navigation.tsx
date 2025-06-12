import React from 'react';
import {Target} from 'lucide-react'

function Navigation({currentStep, setCurrentStep}) {
  return (
    <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold text-white">ResumeMatch AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentStep('upload')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 'upload' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Upload
            </button>
            <button
              onClick={() => setCurrentStep('matches')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 'matches' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Matches
            </button>
            <button
              onClick={() => setCurrentStep('improve')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 'improve' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Improve
            </button>
            <button
              onClick={() => setCurrentStep('cover')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 'cover' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Cover Letters
            </button>
            <button
              onClick={() => setCurrentStep('track')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 'track' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Track
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
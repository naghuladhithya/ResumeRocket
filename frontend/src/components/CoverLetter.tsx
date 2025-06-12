import React from 'react';
import {} from 'lucide-react'

function CoverLetter({currentStep, setCurrentStep, selectedJob}) {
  return (
    <>
      {currentStep === 'cover' && (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Cover Letter Generator</h1>
            <p className="text-gray-300">
              {selectedJob ? `Custom cover letter for ${selectedJob.title} at ${selectedJob.company}` : 'AI-generated cover letters tailored to each job'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Generated Cover Letter</h2>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Regenerate
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-gray-800 leading-relaxed">
                  <div className="mb-4">
                    <p className="text-right text-sm text-gray-600">January 20, 2024</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="font-semibold">Hiring Manager</p>
                    <p>{selectedJob?.company || 'TechCorp Inc.'}</p>
                    <p>{selectedJob?.location || 'San Francisco, CA'}</p>
                  </div>
                  
                  <p className="mb-4">Dear Hiring Manager,</p>
                  
                  <p className="mb-4">
                    I am writing to express my strong interest in the {selectedJob?.title || 'Senior Frontend Developer'} position at {selectedJob?.company || 'TechCorp Inc.'}. With my extensive experience in React, TypeScript, and modern web development practices, I am excited about the opportunity to contribute to your innovative team.
                  </p>
                  
                  <p className="mb-4">
                    In my previous role, I successfully led the development of several high-impact web applications, resulting in a 35% increase in user engagement and a 20% improvement in performance metrics. My expertise in React and TypeScript aligns perfectly with your technical requirements, and I am particularly drawn to your company's commitment to cutting-edge technology solutions.
                  </p>
                  
                  <p className="mb-4">
                    I am impressed by {selectedJob?.company || 'TechCorp Inc.'}'s reputation for innovation and would welcome the opportunity to discuss how my skills and passion for frontend development can contribute to your continued success. Thank you for your consideration.
                  </p>
                  
                  <p className="mb-4">Sincerely,</p>
                  <p className="font-semibold">Your Name</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Customization Options</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tone</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                      <option>Professional</option>
                      <option>Enthusiastic</option>
                      <option>Conversational</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Length</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                      <option>Concise</option>
                      <option>Standard</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Focus Areas</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded bg-white/10 border-white/20" defaultChecked />
                        <span className="ml-2 text-sm text-gray-300">Technical Skills</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded bg-white/10 border-white/20" defaultChecked />
                        <span className="ml-2 text-sm text-gray-300">Experience</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded bg-white/10 border-white/20" />
                        <span className="ml-2 text-sm text-gray-300">Education</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Download PDF
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Copy to Clipboard
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Save Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CoverLetter;
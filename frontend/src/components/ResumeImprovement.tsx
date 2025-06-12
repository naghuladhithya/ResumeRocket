import React from 'react';
import { Star, BarChart3 } from 'lucide-react';

function ResumeImprovement({currentStep, setCurrentStep}) {
  return (
    <>
      {currentStep === 'improve' && (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Resume Improvements</h1>
            <p className="text-gray-300">AI-powered suggestions to enhance your resume</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Key Improvements
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">1. Quantify Your Achievements</h3>
                  <p className="text-gray-400 text-sm mb-2">Add specific numbers and metrics to demonstrate impact</p>
                  <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                    <p className="text-green-400 text-sm">✓ "Increased user engagement by 35% through responsive design improvements"</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">2. Add Relevant Keywords</h3>
                  <p className="text-gray-400 text-sm mb-2">Include technical skills that match job requirements</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">GraphQL</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Docker</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Kubernetes</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">3. Highlight Leadership Experience</h3>
                  <p className="text-gray-400 text-sm">Emphasize team leadership and project management skills</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Skills Analysis
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">React</span>
                    <span className="text-green-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">TypeScript</span>
                    <span className="text-blue-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">Node.js</span>
                    <span className="text-yellow-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">AWS</span>
                    <span className="text-red-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-400 text-sm">💡 Consider taking AWS certification courses to boost this skill area</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeImprovement;
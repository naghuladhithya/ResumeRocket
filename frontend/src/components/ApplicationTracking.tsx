import { useState } from 'react';
import {FileText, AlertCircle, CheckCircle, TrendingUp, ChevronRight} from 'lucide-react'


function ApplicationTracking({currentStep, setCurrentStep, mockApplications, getStatusIcon, getStatusColor}) {
  return (
    <>
      {currentStep === 'track' && (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Application Tracker</h1>
            <p className="text-gray-300">Monitor your job applications and their status</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-gray-400">Total Applications</p>
                </div>
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-gray-400">Interviews</p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-gray-400">Offers</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">25%</p>
                  <p className="text-gray-400">Response Rate</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/20">
              <h2 className="text-xl font-semibold text-white">Recent Applications</h2>
            </div>
            
            <div className="divide-y divide-white/10">
              {mockApplications.map((app) => (
                <div key={app.id} className="px-6 py-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="font-medium text-white">{app.jobTitle}</h3>
                          <p className="text-gray-400 text-sm">{app.company}</p>
                        </div>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                          {getStatusIcon(app.status)}
                          <span className="capitalize">{app.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Applied {app.appliedDate}</p>
                      <p className="text-sm text-gray-300">{app.salary}</p>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplicationTracking;
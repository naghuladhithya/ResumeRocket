import react from "react";
import {TrendingUp, Briefcase, MapPin, DollarSign, Clock, Mail, Search} from 'lucide-react'


function JobMatch({currentStep, setCurrentStep, mockJobs, setSelectedJob}) {
  return (
    <>
      {currentStep === 'matches' && (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Job Matches</h1>
            <p className="text-gray-300">Found {mockJobs.length} jobs that match your profile</p>
          </div>

          <div className="grid gap-6">
            {mockJobs.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        {job.similarity}% match
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-6">
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setCurrentStep('cover');
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Generate Cover Letter
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default JobMatch;
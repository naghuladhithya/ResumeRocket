import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle} from 'lucide-react';
import Navigation from './components/Navigation';
import UploadResume from './components/UploadResume';
import JobMatch from './components/JobMatch';
import ResumeImprovement from './components/ResumeImprovement';
import CoverLetter from './components/CoverLetter';
import ApplicationTracking from './components/ApplicationTracking';

interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  similarity: number;
  description: string;
  requirements: string[];
  posted: string;
}

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  appliedDate: string;
  salary: string;
}

const mockJobs: JobMatch[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    similarity: 92,
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team...',
    requirements: ['React', 'TypeScript', 'Node.js', 'AWS'],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$100k - $140k',
    similarity: 87,
    description: 'Join our fast-growing startup as a Full Stack Engineer...',
    requirements: ['React', 'Python', 'PostgreSQL', 'Docker'],
    posted: '1 day ago'
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'Digital Solutions',
    location: 'New York, NY',
    salary: '$90k - $120k',
    similarity: 84,
    description: 'We need a passionate React Developer to build amazing user experiences...',
    requirements: ['React', 'JavaScript', 'CSS', 'Git'],
    posted: '3 days ago'
  }
];

const mockApplications: Application[] = [
  {
    id: '1',
    jobTitle: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    status: 'interview',
    appliedDate: '2024-01-15',
    salary: '$120k - $150k'
  },
  {
    id: '2',
    jobTitle: 'Full Stack Engineer',
    company: 'StartupXYZ',
    status: 'applied',
    appliedDate: '2024-01-12',
    salary: '$100k - $140k'
  },
  {
    id: '3',
    jobTitle: 'React Developer',
    company: 'Digital Solutions',
    status: 'offer',
    appliedDate: '2024-01-10',
    salary: '$90k - $120k'
  }
];

function App() {
  const [currentStep, setCurrentStep] = useState<'upload' | 'matches' | 'improve' | 'cover' | 'track'>('upload');
  const [selectedJob, setSelectedJob] = useState<JobMatch | null>(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  // const handleResumeUpload = () => {
  //   setResumeUploaded(true);
  //   setTimeout(() => setCurrentStep('matches'), 1500);
  // };
  const handleResumeUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('resume', file);
  
      const response = await fetch('http://localhost:8000/upload-resume', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setResumeUploaded(true);
        setTimeout(() => setCurrentStep('matches'), 1500);
      } else {
        console.error('Upload failed');
        alert('Upload failed. Please try again.');
      }
    } catch (err) {
      console.error('Error uploading resume:', err);
      alert('Something went wrong during the upload.');
    }
  };

  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-yellow-100 text-yellow-800';
      case 'offer': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied': return <Clock className="w-4 h-4" />;
      case 'interview': return <AlertCircle className="w-4 h-4" />;
      case 'offer': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Step */}
        <UploadResume currentStep={currentStep} setCurrentStep={setCurrentStep} resumeUploaded={resumeUploaded} handleResumeUpload={handleResumeUpload}/>
        

        {/* Job Matches Step */}
        <JobMatch currentStep={currentStep} setCurrentStep={setCurrentStep} mockJobs={mockJobs} setSelectedJob={setSelectedJob} />
       

        {/* Resume Improvement Step */}
        <ResumeImprovement currentStep={currentStep} setCurrentStep={setCurrentStep}/>

        {/* Cover Letter Step */}
        <CoverLetter currentStep={currentStep} setCurrentStep={setCurrentStep} selectedJob={selectedJob} />
        

        {/* Application Tracking Step */}
        <ApplicationTracking currentStep={currentStep} setCurrentStep={setCurrentStep} mockApplications={mockApplications} getStatusIcon={getStatusIcon} getStatusColor={getStatusColor} />
        
      </div>
    </div>
  );
}

export default App;
import { Users, Code, Smile, Globe, Home } from 'lucide-react'
import { useEffect, useState } from "react";


const Jobboard = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const jobCards = [
        { title: "Graphic Designer", location: "Las Vegas", remote: true },
        { title: "Brand Manager", location: "Los Angeles", remote: true, salary: "$65k" },
        { title: "Social Media Manager", location: "California", remote: true, salary: "$45k" },
        { title: "Web Developer", location: "New York", remote: true, salary: "$80k" },
        { title: "Product Manager", location: "San Francisco", remote: true, salary: "$100k" },
      ];

    useEffect(() => {
        const interval = setInterval(() => {
          setScrollPosition((prevPosition) =>
            prevPosition >= jobCards.length - 1 ? 0 : prevPosition + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, [jobCards.length]);

    return (
        <div className='bg-[#0d0e11] w-screen flex flex-col items-center px-4 text-white min-h-screen'>
            {/* About section */}
            <div className="relative w-full max-w-2xl text-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#6857f6] to-[#b04aff] font-bold text-xl sm:text-sm">
                    ABOUT JOBBOARD
                </p>

                <h2 className="text-4xl font-sans font-medium text-[#848484] my-8 text-center">
                    One step to your
                    <p className="text-4xl font-sans font-medium text-white text-center">
                        future starts here
                    </p>
                </h2>
                <p className="text-[20px] font-semibold font-sans text-white">
                    Receive a customized AI analysis based on
                    <br />  your profile. Access communities & reviews from
                    <br /> others for self development.
                </p>
            </div>

            {/* Learn More button */}
            <div className="flex rounded-xl hover:bg-gradient-to-tr  mt-12  from-pink-400 to-blue-600 p-[1px]">
                <button className="bg-white text-black hover:bg-[#0d0e11] hover:text-white font-normal text-base md:text-xl py-2 px-3 md:px-4 rounded-xl">
                    Learn More
                </button>
            </div>

            {/* Job listings */}
            <div className="w-full max-w-2xl mt-12">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Jobs</h3>
                    <a href="#" className="text-purple-400">
                        All Jobs
                    </a>
                </div>
                <div className="overflow-hidden h-[calc(3*5rem+3*1rem)]">
                    <div
                        className="space-y-4 transition-transform duration-500 ease-in-out bg-[#0d0e11]"
                        style={{ transform: `translateY(-${scrollPosition * 5.25}rem)` }}
                    >
                        {jobCards.map((job, index) => (
                            <JobCard
                                key={index}
                                title={job.title}
                                location={job.location}
                                remote={job.remote}
                                salary={job.salary}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[#0e0b17] text-white py-16 px-4 md:px-8 lg:px-16 w-screen">
                <div className="max-w-6xl mx-auto">
                    <h6 className="text-purple-400 uppercase text-sm mb-4 text-center">WHY JOBBOARD</h6>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">New way to get a job</h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Upon gaining entry to the JobBoard platform, your initial task involves inputting your initial team positions or roles.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Users className="w-8 h-8 text-purple-400" />}
                            title="AI Job Hunting"
                            description="Say goodbye to the traditional job search process and step into the future of employment opportunities."
                        />
                        <FeatureCard
                            icon={<Code className="w-8 h-8 text-purple-400" />}
                            title="Simplify research"
                            description="Save time and effort by accessing a wide range of opportunities in various industries and career stages."
                        />
                        <FeatureCard
                            icon={<Smile className="w-8 h-8 text-purple-400" />}
                            title="Resume Wizard"
                            description="Craft a detailed Resume through AI that effectively showcases your unique skills, experiences, and notable accomplishments."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function JobCard({ title, location, remote, salary }: any) {
    return (
      <div className="bg-[#1c1929] p-4 rounded-lg flex justify-between items-center h-20">
        <div>
          <h4 className="font-semibold mb-2">{title}</h4>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              {location}
            </div>
            {remote && (
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Remote
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {salary && <span className="text-gray-400">{salary}</span>}
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
            Apply
          </button>
        </div>
  
  
  
      </div>
    );
  }
  
  
  function FeatureCard({ icon, title, description }: any) {
    return (
      <div className="bg-[#1c1929] p-6 rounded-lg">
        <div className="bg-[#2a2639] w-16 h-16 flex items-center justify-center rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href="#" className="text-purple-400 flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    )
  }

export default Jobboard




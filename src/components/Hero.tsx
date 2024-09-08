import { Search, ArrowRight, Globe, Home } from "lucide-react";
import blur from "../assets/blur.svg";
import { useEffect, useRef, useState } from "react";
import { Users, Code, Smile } from 'lucide-react'
import { User, Upload } from 'lucide-react'
import { DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'
// SVG Icons components remain unchanged
import { Facebook, Youtube, Dribbble, Instagram, Linkedin } from 'lucide-react'
export default function Hero() {
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
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }


  const [activeTab, setActiveTab] = useState<'popular' | 'latest'>('popular')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const jobs = [
    {
      title: "Operations Manager",
      company: "Pipe",
      description: "You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability.",
      location: "London",
      remote: true,
      salary: "$45k"
    },
    {
      title: "Senior Accountant",
      company: "Colored",
      description: "You will handle various financial tasks and play a key role in financial reporting, analysis, and decision-making processes.",
      location: "Paris",
      remote: true,
      salary: "$95k"
    },
    {
      title: "Motion Designer",
      company: "Greenly",
      description: "You will be responsible for creating captivating visual experiences by combining graphic design and animation.",
      location: "Los Angeles",
      remote: true,
      salary: "$50k-$60k"
    },
    {
      title: "Middle Engineer",
      company: "Pipe",
      description: "You will play a critical role in bridging the gap between development and operations teams, ensuring smooth and efficient software delivery processes.",
      location: "London",
      remote: true,
      salary: "$55k"
    }
  ]

  const categories = [
    "Operations Manager", "Middle Engineer", "Web Developer", "Software Developer", "Graphic Designer",
    "Brand Manager", "Social Media Manager", "Marketing Coordinator", "Investment Banking Analyst",
    "Financial Analyst", "Financial Manager", "Sales Manager", "Senior Accountant", "UI/UX Designer",
    "Mechanical Engineer", "Motion Designer", "Front-end Developer"
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    }
    return () => scrollContainer?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <div className="bg-[#0d0e11] w-full flex flex-col pt-16 items-center px-4 text-white min-h-screen">
      <div className="w-full mb-8 relative">
        {/* Header content */}
        <div className="flex items-center justify-center">
          <div className="border border-gray-600 rounded-full p-2 px-4 mb-4">
            <p className="flex items-center">
              The best job seekers
              <span className="text-purple-700 flex items-center ml-2">
                | Explore <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </p>
          </div>
        </div>

        <h1 className="text-4xl text-pretty font-sans font-medium mb-2 text-center">
          We know the way to <br /> success.
        </h1>

        <p className="text-4xl font-sans font-medium text-[#848484] mb-4 text-center">
          Find and become a professional.
        </p>
        <p className="text-[18px] font-sans font-medium mb-6 text-center">
          A successful business needs a qualified team of people.
        </p>

        {/* SVG background */}
        <div className="absolute top-[300px] left-0 w-full">
          <img src={blur} alt="Background" className="w-full" />
        </div>

        {/* Search input */}
        <div className="relative mt-7 z-10">
          <input
            type="text"
            placeholder="Job title"
            className="w-full bg-[#1c1929] text-white rounded-full py-4 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-800 rounded-full px-6 py-2 flex items-center font-medium">
            Find Jobs
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* About section */}
      <div className="relative w-full max-w-2xl pt-16 text-center">
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
          Receive a customized salary approximation
          <br /> based on your profile. Access reviews for
          <br /> more than 600,000 companies worldwide.
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
      <div className="bg-[#0e0b17] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h6 className="text-purple-400 uppercase text-sm mb-4 text-center">WHY JOBBOARD</h6>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">New way to get a job</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Upon gaining entry to the JobBoard platform, your initial task involves inputting your initial team positions or roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-8 h-8 text-purple-400" />}
            title="Future of Job Hunting"
            description="Say goodbye to the traditional job search process and step into the future of employment opportunities."
          />
          <FeatureCard
            icon={<Code className="w-8 h-8 text-purple-400" />}
            title="Simplify research"
            description="Save time and effort by accessing a wide range of opportunities in various industries and career stages."
          />
          <FeatureCard
            icon={<Smile className="w-8 h-8 text-purple-400" />}
            title="Be unique"
            description="Craft a detailed profile that effectively showcases your unique skills, past experiences, and notable accomplishmen."
          />
        </div>
      </div>
    </div>

    <div className="bg-[#0e0b17] text-white min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting started is easy</h2>
            <p className="text-gray-400 max-w-2xl">
              Upon gaining entry to the JobBoard platform, your initial task involves inputting your initial team positions or roles.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full font-medium">
            Learn More
          </button>
        </div>

        <div className="bg-[#1c1929] p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#2a2639] rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="font-semibold">Oliver Forslin</span>
                  <button type="button" className="ml-auto bg-white text-black px-4 py-1 rounded-full text-sm flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload photo
                  </button>
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-[#2a2639] rounded-lg p-3 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#2a2639] rounded-lg p-3 mb-4"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full bg-[#2a2639] rounded-lg p-3 mb-4"
                />
              </form>
            </div>
            <div className="w-full md:w-1/2 md:pl-6">
              <div className="text-purple-400 mb-2">01</div>
              <h3 className="text-2xl font-bold mb-4">Discover Job Openings</h3>
              <p className="text-gray-400">
                Start by searching for job openings using our comprehensive search engine. Simply enter relevant keywords, location, and other criteria to find the positions that match your interests and qualifications.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Job search', 'Salary estimate', 'Read reviews', 'Apply and connect'].map((step, index) => (
            <div key={index} className={`${activeStep === index + 1 ? 'border-t-2 border-purple-500' : ''} pt-4`}>
              <div className="text-purple-400 mb-2">{String(index + 1).padStart(2, '0')}</div>
              <h4 className="text-xl font-semibold mb-2">{step}</h4>
              <p className="text-gray-400">
                {index === 0 && 'Begin your job search by exploring a wide range of job openings.'}
                {index === 1 && 'Provide your profile details to receive a salary estimate.'}
                {index === 2 && 'Gain valuable insights about potential employers.'}
                {index === 3 && 'Connect with employers, attend interviews.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-[#0e0b17] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Discover the best job</h1>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Start career with the best company in the world, we ensures you to get the best job possible.
        </p>

        <div className="flex justify-center mb-8">
          <button 
            className={`px-4 py-2 rounded-l-full ${activeTab === 'popular' ? 'bg-white text-black' : 'bg-[#1c1929] text-white'}`}
            onClick={() => setActiveTab('popular')}
          >
            Popular
          </button>
          <button 
            className={`px-4 py-2 rounded-r-full ${activeTab === 'latest' ? 'bg-white text-black' : 'bg-[#1c1929] text-white'}`}
            onClick={() => setActiveTab('latest')}
          >
            Latest
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-[#1c1929] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm">Apply</button>
              </div>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Remote
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1c1929] p-2 rounded-full z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1c1929] p-2 rounded-full z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-2 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <button key={index} className="bg-[#1c1929] text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-gray-950 text-gray-400 py-12 px-4 md:px-6">
      <div className="max-w-6xl border border-gray-600 rounded-md p-4 mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4  border-gray-600  ">
            <span className="text-purple-500  uppercase text-sm font-semibold">Carrers</span>
            <h2 className="text-2xl font-bold text-white">Join to help businesses grow</h2>
            <button className="text-white border-purple-500 hover:bg-purple-500">
              Explore Careers <span className="ml-2">→</span>
            </button>
          </div>
          <div className="space-y-4">
            <span className="text-purple-500 uppercase text-sm font-semibold">Blog</span>
            <h2 className="text-2xl font-bold text-white">Tips, and trends for your future job</h2>
            <button  className="text-white border-purple-500 hover:bg-purple-500">
              Explore Blog <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="mb-4">Stay current with all thinks JobBoard</p>
          <form className="flex space-x-2">
            <input type="email" placeholder="Email" className="bg-gray-900 border-gray-800 text-white flex-grow" />
            <button type="submit"  className="bg-purple-500 text-white hover:bg-purple-600">
              Subscribe
            </button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Candidates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">CV Post</a></li>
              <li><a href="#" className="hover:text-white">Job Post</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <svg className="h-8 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="10" fill="white"/>
              <path d="M20 80V20H40V80H20ZM60 80V20H80V80H60Z" fill="black"/>
            </svg>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Dribbble size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

function JobCard({ title, location, remote, salary }:any) {
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


function FeatureCard({ icon, title, description }:any) {
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
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
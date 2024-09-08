import { DollarSign, ChevronLeft, ChevronRight, Globe, Home } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Discover = () => {

    const [activeTab, setActiveTab] = useState<'popular' | 'latest'>('popular')
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

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
        <>
            <div className="min-h-screen bg-[#0e0b17] text-white p-4 md:p-8 w-screen">
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
        </>
    )
}

export default Discover
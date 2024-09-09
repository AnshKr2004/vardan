import { User, Upload } from 'lucide-react'
import { useState } from 'react'

const GetStarted = () => {

  const [activeStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <>
      <div className="bg-[#0e0b17] text-white min-h-screen p-4 md:p-8 w-screen">
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
                <h3 className="text-2xl font-bold mb-4">Profile Management</h3>
                <p className="text-gray-400">
                  Efficiently fill profile details by entering personal information, skills, experience, and preferences to optimize job matching and recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['AI Quiz', 'Skill Gap Analysis', 'Recommendations', 'Community & peer support'].map((step, index) => (
              <div key={index} className={`${activeStep === index + 1 ? 'border-t-2 border-purple-500' : ''} pt-4`}>
                <div className="text-purple-400 mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h4 className="text-xl font-semibold mb-2">{step}</h4>
                <p className="text-gray-400">
                  {index === 0 && 'An AI-driven questionnaire analyzes profile preferences to recommend personalized job opportunities and skill development pathways for job seekers.'}
                  {index === 1 && 'Skill gap analysis identifies job seekers competency gaps and recommends targeted training to bridge them for desired job roles.'}
                  {index === 2 && 'AI-driven recommendation system analyzes user profiles, skills, and preferences to suggest tailored job opportunities and relevant training courses.'}
                  {index === 3 && 'A platform for job seekers to connect, share experiences, ask questions, and receive peer and mentor support through forums.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted
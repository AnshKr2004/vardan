import { Facebook, Youtube, Dribbble, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 md:px-6 w-screen">
        <div className="max-w-6xl rounded-md p-4 mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 bg-[#13151a] md:px-16 md:py-20 rounded-xl px-6 py-6">
              <span className="text-purple-500  uppercase font-semibold text-base">Carrers</span>
              <h2 className="md:text-4xl text-2xl font-bold text-white pb-14">Join to help businesses grow</h2>
              <button className="text-black bg-white p-3 rounded-full font-bold text-base border-purple-500 hover:bg-purple-500">
                Explore Careers <span className="ml-2 text-purple-500">→</span>
              </button>
            </div>
            <div className="space-y-4 bg-[#13151a] rounded-xl md:px-16 md:py-20 px-6 py-6">
              <span className="text-purple-500 uppercase text-base font-semibold">Blog</span>
              <h2 className="md:text-4xl text-2xl font-bold text-white pb-14">Tips, and trends for your future job</h2>
              <button className="text-black rounded-full font-bold p-3 text-base bg-white border-purple-500 hover:bg-purple-500">
                Explore Blog <span className="ml-2 text-purple-500">→</span>
              </button>
            </div>
          </div>

          <div className='md:flex gap-36'>
            <div className="mb-12 bg-[#13151A] rounded-3xl pr-12 pl-10 py-11">
              <h3 className="text-xl font-semibold text-white">Subscribe</h3>
              <p className="mb-8">Stay current with all thinks JobBoard</p>
              <div className="flex space-x-2">
                <input type="email" placeholder="Email" className="bg-gray-900 border-gray-800 text-white flex-grow rounded-full px-4 w-0" />
                <button type="submit" className="bg-purple-500 text-white hover:bg-purple-600 rounded-full p-2">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 md:gap-32 mb-12 text-center items-center">
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
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="mb-8 md:mb-0">
              <svg className="h-8 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="10" fill="white" />
                <path d="M20 80V20H40V80H20ZM60 80V20H80V80H60Z" fill="black" />
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
    </>
  )
}

export default Footer
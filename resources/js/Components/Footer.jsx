import { FacebookIcon, GithubIcon, InstagramIcon } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">My App</h2>
            <p className="text-gray-400">Empowering your digital journey with innovative solutions.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FacebookIcon />    
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GithubIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
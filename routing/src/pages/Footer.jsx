import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className='mt-20 bg-gradient-to-t from-black via-black to-transparent'>
      <div className='border-t border-white/10 backdrop-blur-xl'>
        <div className='max-w-7xl mx-auto px-6 py-16'>
          {/* Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-8'>
            {/* Brand Section */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-bold text-white'>GlassUI</h2>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Build beautiful, interactive React applications with modern UI components.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className='text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm'
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/about')}
                    className='text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm'
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/course')}
                    className='text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm'
                  >
                    Course
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/course/codex')}
                    className='text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm'
                  >
                    Codex
                  </button>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className='space-y-4'>
              <h3 className='text-white font-semibold'>Explore More</h3>
              <button
                onClick={() => navigate('/course')}
                className='w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 
                          hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg 
                          transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-white/10 my-8'></div>

          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
            <p>&copy; 2024 GlassUI. All rights reserved.</p>
            <div className='flex gap-6 mt-4 md:mt-0'>
              <a href='#' className='hover:text-white transition-colors'>Privacy</a>
              <a href='#' className='hover:text-white transition-colors'>Terms</a>
              <a href='#' className='hover:text-white transition-colors'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

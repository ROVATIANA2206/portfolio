import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoColor, setLogoColor] = useState('#3b82f6')

  // Navigation items avec icônes Font Awesome
  const navItems = [
    { 
      name: 'Accueil', 
      path: '/', 
      icon: 'fas fa-home',
      color: '#10b981'
    },
    { 
      name: 'À propos', 
      path: '/about', 
      icon: 'fas fa-user-circle',
      color: '#8b5cf6'
    },
    { 
      name: 'Compétences', 
      path: '/skills', 
      icon: 'fas fa-code',
      color: '#f59e0b'
    },
    { 
      name: 'Projets', 
      path: '/projects', 
      icon: 'fas fa-laptop-code',
      color: '#ef4444'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: 'fas fa-envelope',
      color: '#06b6d4'
    }
  ]

  // Colors for random logo animation
  const logoColors = [
    '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', 
    '#ef4444', '#06b6d4', '#ec4899', '#14b8a6'
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Random logo color change
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = logoColors[Math.floor(Math.random() * logoColors.length)]
      setLogoColor(randomColor)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const isActiveLink = (path) => location.pathname === path

  return (
    <>
      {/* Font Awesome CDN - À ajouter dans votre index.html */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> */}
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl' 
          : 'bg-gray-800/90 backdrop-blur-sm'
      }`}>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 animate-pulse"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section - Votre titre original amélioré */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
                  style={{ backgroundColor: logoColor }}
                >
                  <i className="fas fa-terminal text-white text-lg"></i>
                </div>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg blur-md opacity-50 animate-pulse"
                  style={{ backgroundColor: logoColor }}
                ></div>
              </div>
              
              <h1 className="font-black text-xl text-white relative group cursor-pointer">
                <span className="relative z-10">
                  Mon<span style={{ color: logoColor }} className="transition-colors duration-500">Portfolio</span>
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </h1>
            </div>

            {/* Desktop Navigation - Votre structure originale */}
            <ul className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <li key={item.path} style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    to={item.path}
                    className="group relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`flex items-center space-x-2 ${
                      isActiveLink(item.path)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}>
                      <i 
                        className={`${item.icon} transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse`}
                        style={{ 
                          color: isActiveLink(item.path) ? item.color : undefined,
                          filter: isActiveLink(item.path) ? `drop-shadow(0 0 8px ${item.color})` : undefined
                        }}
                      ></i>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    
                    {/* Active background */}
                    {isActiveLink(item.path) && (
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"></div>
                    )}
                    
                    {/* Hover effect line */}
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    
                    {/* Active indicator */}
                    {isActiveLink(item.path) && (
                      <div 
                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      ></div>
                    )}
                  </Link>
                </li>
              ))}
              
              {/* Tech Stack Indicator */}
              <li className="ml-4">
                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-gray-600/30 backdrop-blur-sm">
                  <i className="fab fa-react text-cyan-400 text-sm" 
                     style={{ 
                       animation: 'spin 3s linear infinite',
                       transformOrigin: 'center'
                     }}></i>
                  <i className="fab fa-js-square text-yellow-400 text-sm animate-pulse"></i>
                  <i className="fab fa-python text-green-400 text-sm hover:scale-110 transition-transform animate-bounce" style={{ animationDelay: '0.5s' }}></i>
                  <i className="fab fa-node-js text-green-500 text-sm hover:scale-110 transition-transform"></i>
                </div>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            >
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-xl border-t border-gray-800/50 transition-all duration-500 transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.path} style={{ animationDelay: `${index * 50}ms` }}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group block w-full"
                  >
                    <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActiveLink(item.path)
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}>
                      <i 
                        className={`${item.icon} w-5 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse`}
                        style={{ 
                          color: isActiveLink(item.path) ? item.color : undefined,
                          filter: isActiveLink(item.path) ? `drop-shadow(0 0 8px ${item.color})` : undefined
                        }}
                      ></i>
                      <span className="font-medium">{item.name}</span>
                      {isActiveLink(item.path) && (
                        <div 
                          className="ml-auto w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Tech Stack */}
            <div className="mt-6 pt-4 border-t border-gray-800/50">
              <div className="flex justify-center space-x-4">
                <i className="fab fa-react text-cyan-400 text-xl" 
                   style={{ 
                     animation: 'spin 4s linear infinite',
                     transformOrigin: 'center'
                   }}></i>
                <i className="fab fa-js-square text-yellow-400 text-xl animate-bounce" style={{ animationDelay: '0.5s' }}></i>
                <i className="fab fa-python text-green-400 text-xl animate-pulse" style={{ animationDelay: '1s' }}></i>
                <i className="fab fa-node-js text-green-500 text-xl animate-bounce" style={{ animationDelay: '1.5s' }}></i>
                <i className="fab fa-github text-gray-300 text-xl hover:text-white transition-colors hover:scale-110 transform duration-300"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-4 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-6 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '2.5s' }}></div>
        </div>

        {/* Dynamic border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
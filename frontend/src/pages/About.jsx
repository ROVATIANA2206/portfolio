
    import { useEffect, useState } from 'react'
    import { Github, Linkedin, Mail, MapPin, Calendar, Code, Briefcase, GraduationCap, Sun, Moon } from 'lucide-react'
    
    const About = () => {
      const [profile, setProfile] = useState(null)
      const [currentSlide, setCurrentSlide] = useState(0)
      const [darkMode, setDarkMode] = useState(false)
      const [isLoading, setIsLoading] = useState(true)
    
      // Simulation des données du profil
      useEffect(() => {
        // Simulation d'un appel API
        setTimeout(() => {
          setProfile({
            name: "Rovatiana Niriniaina Désiré",
            bio: "Étudiant passionné en Master Informatique à l'ESMIA (MIAGE), je me spécialise dans le développement web moderne et les technologies émergentes. Mon parcours combine expertise technique et vision stratégique pour créer des solutions digitales innovantes.",
            location: "Madagascar",
            social_links: [
              { id: 1, platform: "GitHub", url: "#", icon: "github" },
              { id: 2, platform: "LinkedIn", url: "#", icon: "linkedin" },
              { id: 3, platform: "Email", url: "mailto:", icon: "rovatiananiriniaina1@mail.com" }
            ],
            skills: [
              { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", items: ["Node.js", "Python", "Django", "PostgreSQL"] },
              { category: "DevOps", items: ["Docker", "CI/CD", "AWS", "Git"] }
            ],
            education: "Master MIAGE - ESMIA",
            experience: "2+ ans d'expérience en développement"
          })
          setIsLoading(false)
        }, 1000)
      }, [])
    
      const photos = [
        '/images/image1.JPG',
        '/images/image2.JPG',
        '/images/image3.JPG',
      ]
    
      const getIcon = (iconName) => {
        switch(iconName) {
          case 'github': return <Github className="w-5 h-5" />
          case 'linkedin': return <Linkedin className="w-5 h-5" />
          case 'mail': return <Mail className="w-5 h-5" />
          default: return null
        }
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % photos.length)
        }, 4000)
        return () => clearInterval(interval)
      }, [])
    
      if (isLoading) {
        return (
          <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                Chargement du profil...
              </p>
            </div>
          </div>
        )
      }
    
      if (!profile) return null
    
      return (
        <div className={`min-h-screen transition-colors duration-500 ${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          {/* Theme Toggle */}
          <div className="fixed top-6 right-6 z-50">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-700 text-yellow-400 hover:bg-gray-700/80' 
                  : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-white'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
    
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className={`text-6xl md:text-8xl font-black mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  À propos
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
    
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column - Photo Carousel */}
                <div className="space-y-8">
                  <div className="relative">
                    <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 ${
                      darkMode ? 'shadow-black/50' : 'shadow-gray-900/20'
                    }`}>
                      <img
                        src={photos[currentSlide]}
                        alt={`Photo ${currentSlide + 1}`}
                        className="w-full h-96 object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {photos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index
                              ? 'bg-indigo-500 w-8'
                              : darkMode 
                                ? 'bg-gray-600 hover:bg-gray-500' 
                                : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
    
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700' 
                        : 'bg-white/70 border-gray-200'
                    }`}>
                      <GraduationCap className={`w-8 h-8 mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                      <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Formation</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Master MIAGE</p>
                    </div>
                    
                    <div className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700' 
                        : 'bg-white/70 border-gray-200'
                    }`}>
                      <Briefcase className={`w-8 h-8 mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                      <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Expérience</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>2+ années</p>
                    </div>
                  </div>
                </div>
    
                {/* Right Column - Content */}
                <div className="space-y-8">
                  
                  {/* Profile Info */}
                  <div className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800/30 border-gray-700' 
                      : 'bg-white/50 border-gray-200'
                  }`}>
                    <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                      {profile.name}
                    </h2>
                    
                    <div className={`flex items-center space-x-2 mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
    
                    <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {profile.bio}
                    </p>
    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      {profile.social_links?.map(link => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                            darkMode 
                              ? 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50' 
                              : 'bg-white/70 border-gray-200 text-gray-600 hover:bg-white'
                          }`}
                        >
                          {getIcon(link.icon)}
                        </a>
                      ))}
                    </div>
                  </div>
    
                  {/* Skills */}
                  <div className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800/30 border-gray-700' 
                      : 'bg-white/50 border-gray-200'
                  }`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      <Code className="w-6 h-6 mr-3" />
                      Compétences Techniques
                    </h3>
                    
                    <div className="space-y-6">
                      {profile.skills?.map((skillGroup, index) => (
                        <div key={index}>
                          <h4 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            {skillGroup.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  darkMode 
                                    ? 'bg-gray-700/50 text-gray-300 border border-gray-600' 
                                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default About
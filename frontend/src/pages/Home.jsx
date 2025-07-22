import { useState, useEffect } from 'react';
import { Code, Brain, Database, Shield, Briefcase, Users, ChevronDown, Star, Award, Target } from 'lucide-react';

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      icon: <Code className="w-12 h-12 text-white" />,
      title: "Développement Full-Stack",
      description: "Python, Django, React, Java - Architecture Clean",
      gradient: "from-blue-500 to-purple-600",
      technologies: ["Python", "Django", "React", "Java"]
    },
    {
      icon: <Brain className="w-12 h-12 text-white" />,
      title: "Intelligence Artificielle",
      description: "IA Gemini, YOLO, Réseaux de neurones, Ollama",
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Gemini API", "YOLO", "Neural Networks", "Ollama"]
    },
    {
      icon: <Database className="w-12 h-12 text-white" />,
      title: "Bases de Données & BI",
      description: "SQL, NoSQL, Data Mining, SIG",
      gradient: "from-green-500 to-blue-500",
      technologies: ["SQL", "NoSQL", "Data Mining", "SIG"]
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Cybersécurité & DevOps",
      description: "Sécurité informatique, Docker, Réseaux",
      gradient: "from-red-500 to-orange-500",
      technologies: ["Security", "Docker", "Networks", "Linux"]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-white" />,
      title: "Analyse & Gestion",
      description: "BPMN, ERP, Urbanisation SI, Recherche opérationnelle",
      gradient: "from-yellow-500 to-orange-500",
      technologies: ["BPMN", "ERP", "SI Architecture", "Sage 100"]
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Innovation & Leadership",
      description: "Méthodes Agiles, Entrepreneurship, IHM/UX",
      gradient: "from-cyan-500 to-blue-600",
      technologies: ["Agile", "Entrepreneurship", "UX/UI", "AR/VR"]
    }
  ];

  const projects = [
    {
      title: "Système IA Multi-Agent",
      description: "Architecture distribuée avec agents intelligents pour l'automatisation",
      tech: "Python + Gemini API + Multi-Agent",
      color: "bg-gradient-to-br from-purple-600 to-blue-700",
      category: "Intelligence Artificielle"
    },
    {
      title: "Plateforme ERP Intégrée",
      description: "Solution complète de gestion avec modules BPMN et analyse",
      tech: "Django + React + PostgreSQL",
      color: "bg-gradient-to-br from-green-600 to-blue-600",
      category: "Développement"
    },
    {
      title: "Système de Détection YOLO",
      description: "Détection d'objets en temps réel avec réseaux de neurones",
      tech: "Python + YOLO + Deep Learning",
      color: "bg-gradient-to-br from-pink-600 to-purple-600",
      category: "Computer Vision"
    },
    {
      title: "Analyse Cybersécurité",
      description: "Audit de sécurité et recommandations pour infrastructure IT",
      tech: "Security Analysis + Network + Docker",
      color: "bg-gradient-to-br from-red-600 to-orange-600",
      category: "Sécurité"
    },
    {
      title: "Dashboard BI Avancé",
      description: "Visualisation de données avec SIG et analyse décisionnelle",
      tech: "Python + Data Mining + SIG",
      color: "bg-gradient-to-br from-cyan-600 to-blue-600",
      category: "Business Intelligence"
    }
  ];

  const technologies = [
    { name: "Python", level: 90, color: "bg-yellow-500", category: "Backend" },
    { name: "Django", level: 85, color: "bg-green-500", category: "Framework" },
    { name: "React", level: 80, color: "bg-blue-500", category: "Frontend" },
    { name: "Java", level: 85, color: "bg-red-500", category: "Backend" },
    { name: "IA Gemini", level: 80, color: "bg-purple-500", category: "AI" },
    { name: "YOLO", level: 70, color: "bg-pink-500", category: "Computer Vision" },
    { name: "SQL", level: 85, color: "bg-indigo-500", category: "Database" },
    { name: "Docker", level: 60, color: "bg-cyan-500", category: "DevOps" },
    { name: "BPMN", level: 75, color: "bg-orange-500", category: "Analysis" },
    { name: "Git", level: 85, color: "bg-gray-600", category: "Tools" }
  ];

  // Auto-rotation des carrousels
  useEffect(() => {
    const skillsTimer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 5000);

    const projectsTimer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    const techTimer = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    }, 3500);

    return () => {
      clearInterval(skillsTimer);
      clearInterval(projectsTimer);
      clearInterval(techTimer);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Particules d'arrière-plan animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Formes géométriques */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
      </div>

      <div className="w-full px-6 py-20 relative z-10">
        {/* Section Hero améliorée */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            {/* Badge de présentation */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Développeur Full-Stack & Expert IA</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Rovatiana
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Architecte Numérique
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-normal">
              Intelligence Artificielle • Systèmes Complexes • Innovation
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Expert en développement full-stack et intelligence artificielle, je conçois des solutions 
            innovantes qui transforment les défis business en opportunités technologiques. 
            De l'analyse BPMN à l'implémentation d'IA avancée, je maîtrise l'écosystème complet 
            du développement moderne.
          </p>

          {/* Statistiques en hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { number: "6+", label: "Domaines d'Expertise", icon: <Target className="w-5 h-5" /> },
              { number: "30+", label: "Technologies", icon: <Code className="w-5 h-5" /> },
              { number: "AI", label: "Spécialisation", icon: <Brain className="w-5 h-5" /> },
              { number: "100%", label: "Innovation", icon: <Award className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold mb-2 text-blue-400">
                  {stat.icon}
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Boutons CTA améliorés */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-blue-500/20">
              <span className="flex items-center gap-2">
                Découvrir mes réalisations
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 rounded-2xl text-gray-300 font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm">
              Collaboration & Contact
            </button>
          </div>
        </div>

        {/* Carrousel des Compétences amélioré */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Domaines d'Expertise
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Une approche complète couvrant l'ensemble du cycle de développement
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSkillIndex * 100}%)` }}
              >
                {skills.map((skill, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-6">
                    <div className={`bg-gradient-to-br ${skill.gradient} p-10 rounded-3xl text-center h-80 flex flex-col justify-center shadow-2xl border border-white/10`}>
                      <div className="mb-6 flex justify-center">
                        {skill.icon}
                      </div>
                      <h4 className="text-3xl font-bold mb-4 text-white">{skill.title}</h4>
                      <p className="text-lg text-white/90 mb-6">{skill.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skill.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicateurs avec navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSkillIndex 
                      ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carrousel des Projets amélioré */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Projets & Réalisations
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Des solutions innovantes alliant expertise technique et vision business
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-6">
                    <div className={`${project.color} p-10 rounded-3xl h-96 flex flex-col justify-between shadow-2xl border border-white/10 relative overflow-hidden`}>
                      {/* Pattern de fond */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold text-white">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-3xl font-bold mb-4 text-white">{project.title}</h4>
                        <p className="text-lg text-white/90 mb-6 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/20">
                            {project.tech}
                          </span>
                          <button className="text-white/80 hover:text-white transition-colors">
                            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicateurs projets */}
            <div className="flex justify-center mt-8 space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex 
                      ? 'bg-green-500 scale-125 shadow-lg shadow-green-500/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carrousel des Technologies amélioré */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stack Technologique
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Maîtrise de technologies modernes pour des solutions performantes
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl p-10 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">
                    {technologies[currentTechIndex].name}
                  </h4>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                    {technologies[currentTechIndex].category}
                  </span>
                </div>
                
                <div className="relative w-full bg-gray-700/50 rounded-full h-6 mb-6 overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-6 ${technologies[currentTechIndex].color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${technologies[currentTechIndex].level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {technologies[currentTechIndex].level}%
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Grille des technologies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {technologies.map((tech, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTechIndex(index)}
                    className={`p-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      index === currentTechIndex 
                        ? `${tech.color} text-white scale-105 shadow-xl` 
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:scale-105'
                    }`}
                  >
                    <div className="truncate">{tech.name}</div>
                    <div className="text-xs opacity-75 mt-1">{tech.level}%</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Call-to-Action finale */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prêt à Transformer Votre Vision en Réalité ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Collaborons pour créer des solutions innovantes qui propulsent votre business vers l'avenir
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              Démarrons un Projet Ensemble
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Données de fallback basées sur vos projets académiques (en dehors du composant pour éviter les re-créations)
  const fallbackProjects = [
    {
      id: 1,
      title: "Plateforme Intelligente de Recherche d'Emploi",
      description: "Une plateforme IA adaptée aux personnes en situation de handicap, utilisant des algorithmes d'apprentissage automatique pour matcher les profils avec les opportunités d'emploi appropriées.",
      category: "Intelligence Artificielle",
      technologies: ["Python", "Machine Learning", "Django", "PostgreSQL"],
      status: "En développement"
    },
    {
      id: 2,
      title: "Détection d'Origine Ethnique par IA",
      description: "Système de reconnaissance utilisant des réseaux de neurones pour identifier l'origine malgache ou non-malgache des personnes, avec focus sur l'éthique et la protection des données.",
      category: "Vision par Ordinateur",
      technologies: ["TensorFlow", "OpenCV", "Python", "CNN"],
      status: "Recherche"
    },
    {
      id: 3,
      title: "Simulation MESA - Colonie de Fourmis",
      description: "Modélisation agent-based utilisant le framework MESA pour simuler le comportement collectif d'une colonie de fourmis et analyser les patterns d'émergence.",
      category: "Simulation Multi-Agents",
      technologies: ["Python", "MESA", "NetworkX", "Matplotlib"],
      status: "Terminé"
    },
    {
      id: 4,
      title: "Gestion de Club de Football",
      description: "Application web complète pour la gestion d'un club de football incluant la gestion des joueurs, calendrier des matchs, statistiques et communication.",
      category: "Développement Web",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "En cours"
    },
    {
      id: 5,
      title: "Sécurité contre Attaques XSS",
      description: "Développement d'outils et techniques de cybersécurité pour protéger les applications web contre les attaques Cross-Site Scripting (XSS).",
      category: "Cybersécurité",
      technologies: ["JavaScript", "Security Headers", "OWASP", "Penetration Testing"],
      status: "Recherche"
    }
  ]

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.get('http://localhost:8000/api/projects/', {
        timeout: 5000, // Timeout de 5 secondes
      })
      
      // Si l'API retourne des données, les utiliser, sinon utiliser les données locales
      if (response.data && response.data.length > 0) {
        setProjects(response.data)
      } else {
        setProjects(fallbackProjects)
      }
    } catch (err) {
      console.error('Erreur lors du chargement des projets:', err)
      setError(err.message)
      
      // Utiliser les données de fallback si l'API échoue
      setProjects(fallbackProjects)
    } finally {
      setLoading(false)
    }
  }, []) // Retirer la dépendance fallbackProjects

  useEffect(() => {
    // Charger immédiatement les projets locaux
    setProjects(fallbackProjects)
    setLoading(false)
    
    // Essayer de charger depuis l'API en arrière-plan après un petit délai
    const timer = setTimeout(() => {
      fetchProjects()
    }, 100)
    
    return () => clearTimeout(timer)
  }, []) // Dépendance vide pour ne s'exécuter qu'une fois

  const getStatusColor = (status) => {
    const colors = {
      'Terminé': 'bg-green-100 text-green-800',
      'En cours': 'bg-blue-100 text-blue-800',
      'En développement': 'bg-yellow-100 text-yellow-800',
      'Recherche': 'bg-purple-100 text-purple-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryImage = (category) => {
    const images = {
      'Intelligence Artificielle': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format',
      'Vision par Ordinateur': 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=300&fit=crop&auto=format',
      'Simulation Multi-Agents': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format',
      'Développement Web': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format',
      'Cybersécurité': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&auto=format'
    }
    return images[category] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&auto=format'
  }

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-6">Projets Académiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="border rounded-lg p-6 shadow animate-pulse">
              <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-5xl mx-auto mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">Projets Académiques</h2>
        <button 
          onClick={fetchProjects}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Actualiser
        </button>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">
            ⚠️ Impossible de charger depuis l'API. Affichage des projets locaux.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <article 
            key={project.id} 
            className="border rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            {/* Image de la catégorie */}
            <div className="h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = getCategoryImage(project.category)
                  }}
                />
              ) : (
                <img 
                  src={getCategoryImage(project.category)} 
                  alt={project.category}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&auto=format'
                  }}
                />
              )}
            </div>

            {/* En-tête du projet */}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {project.title}
              </h3>
              {project.status && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              )}
            </div>

            {/* Catégorie */}
            {project.category && (
              <p className="text-sm text-indigo-600 font-medium mb-2">
                {project.category}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600 mb-2">Technologies :</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Liens */}
            <div className="flex gap-4 pt-3 border-t border-gray-100">
              {project.github_link && (
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-3 py-1 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-200 text-sm"
                >
                  <img 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="GitHub" 
                    className="w-4 h-4 filter invert"
                  />
                  GitHub
                </a>
              )}
              {project.live_demo_link && (
                <a 
                  href={project.live_demo_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 text-sm"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/888/888882.png" 
                    alt="Demo" 
                    className="w-4 h-4 filter invert"
                  />
                  Démo
                </a>
              )}
              {project.documentation_link && (
                <a 
                  href={project.documentation_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991115.png" 
                    alt="Documentation" 
                    className="w-4 h-4 filter invert"
                  />
                  Docs
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun projet trouvé.</p>
        </div>
      )}
    </section>
  )
}

export default Projects
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from 'recharts'
import { TrendingUp, Code, Database, Shield, Brain, Settings, Globe, Briefcase, Users } from 'lucide-react'

const Skills = () => {
  const [categories, setCategories] = useState([])
  const [selectedView, setSelectedView] = useState('cards')
  const [loading, setLoading] = useState(true)

  // Vos compétences organisées par catégories
  useEffect(() => {
    const mySkills = [
      {
        id: 1,
        name: 'Développement',
        icon: <Code className="w-6 h-6" />,
        color: '#3B82F6',
        skills: [
          { id: 1, name: 'Python', level: 90 },
          { id: 2, name: 'Java', level: 85 },
          { id: 3, name: 'React', level: 80 },
          { id: 4, name: 'Django', level: 85 },
          { id: 5, name: 'Flask', level: 75 },
          { id: 6, name: 'Git', level: 85 },
          { id: 7, name: 'Clean Architecture', level: 70 }
        ]
      },
      {
        id: 2,
        name: 'Intelligence Artificielle',
        icon: <Brain className="w-6 h-6" />,
        color: '#8B5CF6',
        skills: [
          { id: 8, name: 'API IA Gemini', level: 80 },
          { id: 9, name: 'Entraînement de Modèles', level: 75 },
          { id: 10, name: 'YOLO', level: 70 },
          { id: 11, name: 'Ollama', level: 65 },
          { id: 12, name: 'Réseaux de Neurones', level: 75 },
          { id: 13, name: 'Data Mining', level: 80 },
          { id: 14, name: 'Systèmes Multi-Agents', level: 70 }
        ]
      },
      {
        id: 3,
        name: 'Bases de Données',
        icon: <Database className="w-6 h-6" />,
        color: '#10B981',
        skills: [
          { id: 15, name: 'SQL', level: 85 },
          { id: 16, name: 'NoSQL', level: 75 },
          { id: 17, name: 'Informatique Décisionnelle', level: 70 },
          { id: 18, name: 'SIG', level: 65 }
        ]
      },
      {
        id: 4,
        name: 'Cybersécurité & DevOps',
        icon: <Shield className="w-6 h-6" />,
        color: '#EF4444',
        skills: [
          { id: 19, name: 'Cybersécurité', level: 75 },
          { id: 20, name: 'Docker', level: 60 },
          { id: 21, name: 'Réseaux', level: 70 },
          { id: 22, name: 'Linux/Windows', level: 80 }
        ]
      },
      {
        id: 5,
        name: 'Analyse & Gestion',
        icon: <Briefcase className="w-6 h-6" />,
        color: '#F59E0B',
        skills: [
          { id: 23, name: 'BPMN', level: 75 },
          { id: 24, name: 'Analyse Fonctionnelle', level: 80 },
          { id: 25, name: 'ERP', level: 65 },
          { id: 26, name: 'Sage 100', level: 70 },
          { id: 27, name: 'Urbanisation SI', level: 70 },
          { id: 28, name: 'Recherche Opérationnelle', level: 65 }
        ]
      },
      {
        id: 6,
        name: 'Langues & Soft Skills',
        icon: <Users className="w-6 h-6" />,
        color: '#06B6D4',
        skills: [
          { id: 29, name: 'Anglais', level: 75 },
          { id: 30, name: 'Méthodes Agiles', level: 80 },
          { id: 31, name: 'Entrepreneurship', level: 70 },
          { id: 32, name: 'Gestion RH', level: 65 },
          { id: 33, name: 'IHM/UX', level: 75 },
          { id: 34, name: 'IHM Réalité Augmentée', level: 60 }
        ]
      }
    ]
    
    setTimeout(() => {
      setCategories(mySkills)
      setLoading(false)
    }, 800)
  }, [])

  // Préparer les données pour le graphique radar
  const radarData = categories.length > 0 ? 
    categories.map(cat => ({
      category: cat.name,
      value: Math.round(cat.skills.reduce((acc, skill) => acc + skill.level, 0) / cat.skills.length)
    })) : []

  // Préparer les données pour le graphique en barres (top skills seulement)
  const topSkills = categories.flatMap(cat => 
    cat.skills.map(skill => ({
      name: skill.name,
      level: skill.level,
      category: cat.name,
      color: cat.color
    }))
  ).sort((a, b) => b.level - a.level).slice(0, 15)

  const getSkillColor = (level) => {
    if (level >= 80) return 'from-green-400 to-green-600'
    if (level >= 60) return 'from-blue-400 to-blue-600'
    return 'from-yellow-400 to-orange-500'
  }

  const getExpertiseLevel = (level) => {
    if (level >= 80) return 'Expert'
    if (level >= 60) return 'Avancé'
    return 'Intermédiaire'
  }

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-8 max-w-md mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header avec animation */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          Portfolio Technique
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
          Mes Compétences
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Un aperçu complet de mes compétences techniques couvrant le développement, l'IA, les bases de données, la cybersécurité et plus encore
        </p>
      </div>

      {/* Sélecteur de vue */}
      <div className="flex flex-wrap justify-center gap-2 bg-white rounded-xl p-2 shadow-lg border max-w-lg mx-auto">
        <button
          onClick={() => setSelectedView('cards')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedView === 'cards'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Vue Cartes
        </button>
        <button
          onClick={() => setSelectedView('bars')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedView === 'bars'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Top Skills
        </button>
        <button
          onClick={() => setSelectedView('radar')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedView === 'radar'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Vue Radar
        </button>
      </div>

      {/* Vue en cartes par défaut */}
      {selectedView === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, categoryIndex) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
              style={{ 
                animationDelay: `${categoryIndex * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{cat.name}</h3>
                  <p className="text-sm text-slate-500">{cat.skills.length} compétences</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          skill.level >= 80 ? 'bg-green-100 text-green-700' :
                          skill.level >= 60 ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {getExpertiseLevel(skill.level)}
                        </span>
                        <span className="text-sm font-bold text-slate-900">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * cat.skills.length + skillIndex) * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Moyenne catégorie</span>
                  <span className="font-bold text-slate-800">
                    {Math.round(cat.skills.reduce((acc, skill) => acc + skill.level, 0) / cat.skills.length)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Graphique en barres - Top Skills */}
      {selectedView === 'bars' && (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Top 15 Compétences</h3>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topSkills} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80}
                  fontSize={12}
                  stroke="#64748b"
                />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: 'white'
                  }}
                  formatter={(value, name, props) => [
                    `${value}%`,
                    `${props.payload.category}`
                  ]}
                />
                <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                  {topSkills.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Graphique radar */}
      {selectedView === 'radar' && radarData.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Vue d'ensemble par Domaine</h3>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="category" tick={{ fontSize: 11, fill: '#64748b' }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10, fill: '#64748b' }}
                />
                <Radar
                  name="Niveau Moyen"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: 'white'
                  }}
                  formatter={(value) => [`${value}%`, 'Niveau Moyen']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Statistiques globales */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {categories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-blue-100">Compétences Total</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">{categories.length}</div>
            <div className="text-blue-100">Domaines d'Expertise</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {categories.length > 0 ? Math.round(
                categories.reduce((acc, cat) => 
                  acc + cat.skills.reduce((skillAcc, skill) => skillAcc + skill.level, 0) / cat.skills.length, 0
                ) / categories.length
              ) : 0}%
            </div>
            <div className="text-blue-100">Niveau Moyen Global</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {categories.reduce((acc, cat) => 
                acc + cat.skills.filter(skill => skill.level >= 80).length, 0
              )}
            </div>
            <div className="text-blue-100">Expertises Avancées</div>
          </div>
        </div>
      </div>

      {/* Section points forts */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Mes Points Forts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.flatMap(cat => cat.skills)
            .sort((a, b) => b.level - a.level)
            .slice(0, 9)
            .map((skill, index) => (
              <div 
                key={skill.id} 
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">{skill.name}</div>
                  <div className="text-sm text-slate-600">{skill.level}% • {getExpertiseLevel(skill.level)}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
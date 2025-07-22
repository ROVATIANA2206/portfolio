const Footer = () => (
  <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-12 px-6">
    {/* Contour dégradé supérieur */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    
    <div className="max-w-6xl mx-auto">
      {/* Section principale */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Section Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h3>
          <div className="space-y-3">
            <a 
              href="mailto:rovatiana nirinaina1@gmail.com" 
              className="flex items-center justify-center md:justify-start text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-sm md:text-base">rovatiana nirinaina1@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Navigation
          </h3>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">Accueil</a>
            <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">À propos</a>
            <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">Services</a>
            <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">Portfolio</a>
          </div>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Suivez-moi
          </h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Séparateur avec dégradé */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

      {/* Section copyright */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 rounded-full px-6 py-3 border border-gray-600 shadow-lg">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} 
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mx-1">
              Rovatiana
            </span>
            • Tous droits réservés
          </p>
        </div>
        
        {/* Petits points décoratifs */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>

    {/* Effet de lueur en bas */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
  </footer>
);

export default Footer;
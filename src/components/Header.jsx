import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Road, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-accent-500 to-accent-600' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Road className={`h-8 w-8 ${
                isScrolled ? 'text-white' : 'text-secondary-800'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-secondary-800' : 'text-secondary-800'
              }`}>
                Carros Sa
              </span>
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-accent-600' : 'text-accent-600'
              }`}>
                Construção de Rodovias
              </span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-accent-600' 
                    : 'text-secondary-800 hover:text-accent-600'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Solicitar Orçamento
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-800 hover:bg-secondary-100' 
                : 'text-secondary-800 hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-secondary-200"
        >
          <div className="container-max py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-secondary-700 hover:text-accent-600 font-medium py-2 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Solicitar Orçamento
              </motion.button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
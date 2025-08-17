import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const achievements = [
    { icon: Star, value: '25+', label: 'Anos de Experiência' },
    { icon: Award, value: '150+', label: 'Projetos Concluídos' },
    { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
  ]

  const benefits = [
    'Projetos de alta qualidade e durabilidade',
    'Tecnologia avançada em pavimentação',
    'Equipe especializada e certificada',
    'Cumprimento rigoroso de prazos'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-accent-50">
      <div className="absolute inset-0 bg-road-pattern opacity-5"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full text-accent-700 font-medium text-sm"
              >
                <Star className="h-4 w-4 mr-2" />
                Líder em Construção de Rodovias
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Construindo o 
                <span className="gradient-text block">
                  Futuro das Rodovias
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-secondary-600 leading-relaxed max-w-xl"
              >
                Especialistas em infraestrutura rodoviária com mais de 25 anos de experiência. 
                Projetos de qualidade superior que conectam destinos e transformam regiões.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                  <span className="text-secondary-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                Conheça Nossa História
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-gradient-to-br from-white to-secondary-50 rounded-3xl p-8 shadow-2xl border border-secondary-100">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-secondary-800">Nossos Números</h3>
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            className="flex items-center space-x-4 p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-600 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold gradient-text">{achievement.value}</div>
                              <div className="text-secondary-600 font-medium">{achievement.label}</div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-20 blur-xl"
              />
              
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center space-y-2 text-secondary-500"
          >
            <span className="text-sm font-medium">Explore nossos projetos</span>
            <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
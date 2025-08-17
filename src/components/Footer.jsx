import React from 'react'
import { motion } from 'framer-motion'
import { Road, MapPin, Phone, Mail, Clock, ArrowUp, CheckCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Construção de Rodovias',
    'Manutenção Rodoviária',
    'Modernização Viária',
    'Consultoria Técnica',
    'Projetos Emergenciais',
    'Certificação de Qualidade'
  ]

  const contactInfo = [
    { icon: MapPin, text: 'Av. das Rodovias, 1234 - São Paulo/SP' },
    { icon: Phone, text: '(11) 3456-7890' },
    { icon: Mail, text: 'contato@carros-sa.com.br' },
    { icon: Clock, text: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-road-pattern opacity-5"></div>
      
      <div className="container-max relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-accent-500 to-primary-600 rounded-lg">
                  <Road className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Carros Sa</span>
                  <div className="text-accent-400 text-sm font-medium">Construção de Rodovias</div>
                </div>
              </div>
              
              <p className="text-secondary-300 leading-relaxed mb-6">
                Há mais de 25 anos construindo o futuro da infraestrutura rodoviária 
                brasileira com excelência, inovação e compromisso com a sustentabilidade.
              </p>

              <div className="flex items-center space-x-2 text-accent-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Atendimento Online Ativo</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-accent-400">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-300 font-medium"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-accent-400">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-secondary-300 text-sm"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-accent-400">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start space-x-3"
                    >
                      <IconComponent className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-300 text-sm leading-relaxed">{info.text}</span>
                    </motion.div>
                  )
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="mt-6 bg-gradient-to-r from-accent-500 to-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-accent-600 hover:to-primary-700 transition-all duration-300 shadow-lg"
              >
                Solicitar Orçamento
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-secondary-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-secondary-400 text-sm">
              © 2024 Carros Sa. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4 text-secondary-400 text-sm">
              <span>Criado com</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic text-accent-400 hover:text-accent-300 transition-colors duration-300"
              >
                Papum
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
      />
    </footer>
  )
}
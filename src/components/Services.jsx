import React from 'react'
import { motion } from 'framer-motion'
import { Road, Settings, Wrench, Shield, CheckCircle, ArrowRight, Truck, MapPin, Clock, Award, X } from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Road,
      title: 'Construção de Rodovias',
      description: 'Projetos completos de rodovias desde o planejamento até a entrega final, incluindo terraplanagem, pavimentação e sinalização.',
      features: ['Terraplanagem completa', 'Pavimentação asfáltica', 'Sinalização viária', 'Drenagem e obras de arte'],
      highlight: 'Mais Procurado'
    },
    {
      icon: Settings,
      title: 'Manutenção Rodoviária',
      description: 'Serviços especializados de manutenção preventiva e corretiva para garantir a durabilidade e segurança das vias.',
      features: ['Recapeamento asfáltico', 'Reparos estruturais', 'Limpeza de drenagem', 'Manutenção de sinalizações'],
      highlight: 'Serviço Premium'
    },
    {
      icon: Wrench,
      title: 'Modernização Viária',
      description: 'Atualização e modernização de rodovias existentes com tecnologias avançadas e padrões internacionais.',
      features: ['Ampliação de pistas', 'Tecnologia inteligente', 'Sustentabilidade', 'Acessibilidade universal'],
      highlight: 'Inovação'
    }
  ]

  const additionalServices = [
    { icon: Truck, title: 'Logística de Obras', description: 'Planejamento e execução logística completa' },
    { icon: MapPin, title: 'Consultoria Técnica', description: 'Assessoria especializada em projetos rodoviários' },
    { icon: Clock, title: 'Projetos Emergenciais', description: 'Atendimento 24h para situações críticas' },
    { icon: Award, title: 'Certificação de Qualidade', description: 'Garantia total com certificações ISO' }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Análise e Planejamento',
      description: 'Estudo detalhado do terreno e elaboração do projeto executivo'
    },
    {
      number: '02',
      title: 'Preparação do Terreno',
      description: 'Terraplanagem, drenagem e preparação da base estrutural'
    },
    {
      number: '03',
      title: 'Execução da Obra',
      description: 'Construção com tecnologia avançada e rigoroso controle de qualidade'
    },
    {
      number: '04',
      title: 'Entrega e Garantia',
      description: 'Finalização com testes, sinalização e garantia estendida'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em infraestrutura rodoviária, desde a construção 
            até a manutenção, com tecnologia de ponta e qualidade superior.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover relative overflow-hidden group"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.highlight}
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">{service.title}</h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                      <span className="text-secondary-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full bg-gradient-to-r from-accent-500 to-primary-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:from-accent-600 group-hover:to-primary-700 flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary-800">
            Serviços Complementares
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-secondary-800 mb-2">{service.title}</h4>
                  <p className="text-secondary-600 text-sm">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary-800">
            Nosso Processo de Trabalho
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-300 to-primary-400 transform -translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-secondary-800 mb-3">{step.title}</h4>
                <p className="text-secondary-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent-400" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia de Qualidade Total
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Todos os nossos projetos contam com garantia estendida e certificação 
              ISO 9001, assegurando a máxima qualidade e durabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-secondary-800 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Ver Portfólio
              </motion.button>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-road-pattern opacity-5"></div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border-4 border-accent-400/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-accent-400/20 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
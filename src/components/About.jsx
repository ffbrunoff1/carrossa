import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Shield, Award, CheckCircle, TrendingUp, Globe, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada projeto é executado com máxima precisão técnica e atenção aos detalhes.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Priorizamos a segurança em todas as etapas, desde o planejamento até a entrega.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometidos com os mais altos padrões de qualidade em construção rodoviária.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Trabalhamos em estreita colaboração com nossos clientes para superar expectativas.'
    }
  ]

  const stats = [
    { icon: Globe, number: '1500+', label: 'KM de Rodovias Construídas' },
    { icon: Clock, number: '25+', label: 'Anos de Experiência' },
    { icon: TrendingUp, number: '98%', label: 'Taxa de Satisfação' },
    { icon: Award, number: '50+', label: 'Prêmios e Certificações' }
  ]

  const achievements = [
    'Primeira empresa da região certificada ISO 9001',
    'Pioneiros em tecnologia sustentável para pavimentação',
    'Parceiros oficiais dos principais órgãos rodoviários',
    'Equipe técnica com mais de 200 profissionais especializados',
    'Projetos em mais de 15 estados brasileiros',
    'Tecnologia própria em reciclagem de pavimentos'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="gradient-text">Carros Sa</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 25 anos construindo o futuro da infraestrutura rodoviária brasileira 
            com excelência, inovação e compromisso com a sustentabilidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-800">
                Nossa História de Sucesso
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Fundada em 1998, a Carros Sa nasceu com a missão de revolucionar o setor de 
                construção rodoviária no Brasil. Começamos como uma pequena empresa familiar 
                e hoje somos reconhecidos como líderes em infraestrutura rodoviária.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nossa trajetória é marcada por projetos icônicos que conectaram regiões, 
                impulsionaram o desenvolvimento econômico e melhoraram a qualidade de vida 
                de milhões de brasileiros.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-secondary-800 mb-4">
                Principais Conquistas:
              </h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-secondary-600 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-10 blur-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary-800">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-secondary-800 mb-3">{value.title}</h4>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
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
          className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para seu próximo projeto?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Vamos transformar sua visão em realidade com nossa experiência 
              e tecnologia de ponta em construção rodoviária.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-accent-600 font-bold px-8 py-4 rounded-xl hover:bg-secondary-50 transition-all duration-300 shadow-lg"
            >
              Iniciar Conversa
            </motion.button>
          </div>
          
          <div className="absolute inset-0 bg-road-pattern opacity-10"></div>
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ x: [100, -100, 100] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
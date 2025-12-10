'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  IconBolt,
  IconSmartHome,
  IconHome,
  IconVacuumCleaner,
  IconArrowRight,
  IconPhone,
  IconMail,
  IconCheck,
  IconStar,
} from '@tabler/icons-react';

const services = [
  {
    id: 'electricite',
    title: 'Électricité',
    subtitle: 'Solutions complètes',
    description: 'Installations électriques pour constructions neuves, rénovations et dépannages d\'urgence',
    icon: IconBolt,
    gradient: 'from-blue-600 to-cyan-500',
    href: '/electricite',
  },
  {
    id: 'domotique',
    title: 'Domotique',
    subtitle: 'Maison intelligente',
    description: 'Automatisation et contrôle à distance de votre habitat pour plus de confort',
    icon: IconSmartHome,
    gradient: 'from-purple-600 to-pink-500',
    href: '/domotique',
  },
  {
    id: 'automatisation',
    title: 'Automatisation',
    subtitle: 'Portails & Garages',
    description: 'Motorisation de portails et portes de garage pour votre sécurité et confort',
    icon: IconHome,
    gradient: 'from-green-600 to-emerald-500',
    href: '/automatisation-portail',
  },
  {
    id: 'aspiration',
    title: 'Aspiration',
    subtitle: 'Système centralisé',
    description: 'Installation d\'aspiration centralisée CYCLOVAC pour un nettoyage optimal',
    icon: IconVacuumCleaner,
    gradient: 'from-orange-600 to-amber-500',
    href: '/aspiration-centralisee',
  },
];

const stats = [
  { value: '15+', label: 'Ans d\'expérience' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '100%', label: 'Clients satisfaits' },
];

const features = [
  'Intervention rapide en Haute-Savoie',
  'Devis gratuit et sans engagement',
  'Matériel professionnel certifié',
  'Garantie sur tous les travaux',
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Ultra moderne */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 container mx-auto px-4 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
                Votre expert électricien en Haute-Savoie
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Allard <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Élec</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Solutions électriques modernes et innovantes pour votre habitat
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Demander un devis
                <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IconPhone size={20} />
                04.50.46.22.38
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section - Cards modernes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos expertises
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins électriques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:bg-white/20 transition-colors duration-300`}>
                        <service.icon size={32} className="text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-sm font-semibold text-gray-500 mb-4 group-hover:text-blue-100 transition-colors duration-300">
                        {service.subtitle}
                      </p>

                      <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 mb-6">
                        {service.description}
                      </p>

                      <div className="flex items-center text-blue-600 group-hover:text-white font-semibold transition-colors duration-300">
                        En savoir plus
                        <IconArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pourquoi nous choisir ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <IconCheck size={24} className="text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Moderne */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
              <IconStar size={16} className="fill-yellow-400 text-yellow-400" />
              Service de qualité depuis 15 ans
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un projet en électricité ?
            </h2>

            <p className="text-xl text-blue-100 mb-12">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IconMail size={20} />
                Demander un devis
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold border-2 border-white/20 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IconPhone size={20} />
                Appeler maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

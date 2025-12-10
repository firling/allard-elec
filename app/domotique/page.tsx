'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconSmartHome,
  IconBulb,
  IconWindow,
  IconTemperature,
  IconShieldCheck,
  IconMusic,
  IconDeviceMobile,
  IconSwimming,
  IconCheck,
  IconArrowRight,
  IconSparkles,
} from '@tabler/icons-react';

const benefits = [
  {
    name: 'Confort',
    icon: IconSmartHome,
    description: 'Contrôlez votre maison du bout des doigts',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Sécurité',
    icon: IconShieldCheck,
    description: 'Surveillance et alerte en temps réel',
    gradient: 'from-green-600 to-emerald-500'
  },
  {
    name: 'Économie',
    icon: IconTemperature,
    description: 'Optimisez votre consommation d\'énergie',
    gradient: 'from-orange-600 to-amber-500'
  },
  {
    name: 'Communication',
    icon: IconDeviceMobile,
    description: 'Pilotez à distance depuis votre smartphone',
    gradient: 'from-purple-600 to-pink-500'
  },
];

const features = [
  {
    title: 'Éclairage intelligent',
    icon: IconBulb,
    description: 'Extinction et allumage à distance, gestion en fonction des envies, scénarios d\'ambiance',
  },
  {
    title: 'Volets automatisés',
    icon: IconWindow,
    description: 'Contrôle par zones, automatisation selon l\'heure, commande centralisée',
  },
  {
    title: 'Chauffage connecté',
    icon: IconTemperature,
    description: 'Pilotage à distance, programmation, optimisation de la consommation',
  },
  {
    title: 'Sécurité avancée',
    icon: IconShieldCheck,
    description: 'Alarme, caméras, activation à distance, notifications en temps réel',
  },
  {
    title: 'Multimédia',
    icon: IconMusic,
    description: 'Musique multi-room, contrôle vocal, scénarios personnalisés',
  },
  {
    title: 'Et plus encore',
    icon: IconSwimming,
    description: 'Gestion piscine, affichage température, intégration complète',
  },
];

const systems = [
  {
    name: 'Jeedom',
    logo: '/images/domotique/Jeedom.png',
    features: [
      'Évolutivité maximale',
      'Personnalisation complète',
      'Interopérabilité totale',
      'Large compatibilité',
    ],
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    name: 'My Home Legrand',
    logo: '/images/domotique/MyHome_2020-1.png',
    features: [
      'Système complet',
      'Technologie filaire (bus)',
      'Fiabilité professionnelle',
      'Support technique',
    ],
    gradient: 'from-orange-600 to-amber-500',
  },
];

export default function DomotiquePage() {
  return (
    <div>
      {/* Hero Section avec image */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/accueil/PhotoHOmeVR-1500x500.jpg"
            alt="Maison intelligente domotique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
              <IconSmartHome size={16} />
              Maison intelligente
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Domotique
              <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Votre maison devient intelligente
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Automatisez, contrôlez et optimisez votre habitat
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Découvrir nos solutions
              <IconArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <IconSparkles size={16} />
              Les avantages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi la domotique ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 mb-6 mx-auto group-hover:bg-white/20 transition-colors duration-300`}>
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-white transition-colors duration-300">
                    {benefit.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center group-hover:text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-3 mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section with real logos */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos systèmes
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {systems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-8 flex justify-center">
                  <div className="relative h-24 w-64">
                    <Image
                      src={system.logo}
                      alt={system.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <ul className="space-y-4">
                  {system.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${system.gradient} flex items-center justify-center`}>
                        <IconCheck size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt pour une maison intelligente ?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Transformez votre quotidien avec la domotique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Demander une étude
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold border-2 border-white/20 hover:bg-purple-700 transition-all duration-300"
              >
                Nous appeler
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconDoor,
  IconVideo,
  IconPassword,
  IconHome,
  IconShieldCheck,
  IconKey,
  IconDeviceMobile,
  IconCheck,
  IconArrowRight,
  IconSparkles,
  IconStar,
} from '@tabler/icons-react';

const products = [
  {
    title: 'Visiophone',
    icon: IconVideo,
    description: 'Sécurisez votre propriété et identifiez vos visiteurs avant d\'ouvrir',
    features: [
      'Ouverture à distance sans se déplacer',
      'Enregistrement d\'images',
      'Redirection vers smartphone',
      'Vision nocturne',
    ],
    gradient: 'from-blue-600 to-cyan-500',
    image: '/images/auto/visiophone_aiphone_audio_video.jpg',
  },
  {
    title: 'Digicode',
    icon: IconPassword,
    description: 'Accès sécurisé par code personnel sans télécommande',
    features: [
      'Pratique pour les piétons',
      'Idéal pour les retours d\'école',
      'Gestion de codes multiples',
      'Aucune clé à porter',
    ],
    gradient: 'from-purple-600 to-pink-500',
    image: '/images/auto/digicode.jpeg',
  },
  {
    title: 'Portail motorisé',
    icon: IconDoor,
    description: 'Confort et sécurité pour l\'accès à votre propriété',
    features: [
      'Modèles battants ou coulissants',
      'Plus besoin de sortir du véhicule',
      'Commande à distance',
      'Installation professionnelle',
    ],
    gradient: 'from-green-600 to-emerald-500',
    image: '/images/auto/portail-coulissant.jpg',
  },
];

const benefits = [
  { text: 'Sécurité renforcée 24/7', icon: IconShieldCheck },
  { text: 'Confort d\'utilisation optimal', icon: IconKey },
  { text: 'Contrôle à distance', icon: IconDeviceMobile },
];

const techproFeatures = [
  'Système anti-pincement aux normes',
  'Parachute de sécurité',
  'Doubles roulettes incurvées',
  'Fabrication 100% française',
  'Garantie 5 ans',
  'Installation professionnelle',
];

export default function AutomatisationPortailPage() {
  return (
    <div>
      {/* Hero Section avec image */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/accueil/porte_sectionnelle_techpro_1.jpg"
            alt="Porte de garage automatisée TECHPRO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/85 to-green-900/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium backdrop-blur-sm mb-6">
              <IconDoor size={16} />
              Automatisation
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Portail & Garage
              <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Motorisation professionnelle
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Sécurisez et simplifiez l\'accès à votre propriété
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Demander un devis
              <IconArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
              >
                <benefit.icon size={28} className="text-white flex-shrink-0" />
                <span className="font-semibold text-white">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <IconSparkles size={16} />
              Nos solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solutions d'automatisation
            </h2>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-4`}>
                        <product.icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                            <IconCheck size={14} className="text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHPRO Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                <IconStar size={16} className="fill-orange-500 text-orange-500" />
                Qualité française
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pourquoi choisir TECHPRO ?
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <IconShieldCheck size={32} className="text-orange-600" />
                    Sécurité maximale
                  </h3>
                  <ul className="space-y-4">
                    {techproFeatures.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
                          <IconCheck size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <IconStar size={32} className="text-orange-600 fill-orange-600" />
                    Qualité garantie
                  </h3>
                  <ul className="space-y-4">
                    {techproFeatures.slice(3).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
                          <IconCheck size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un projet d'automatisation ?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Étude personnalisée et installation professionnelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Demander une étude
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold border-2 border-white/20 hover:bg-green-700 transition-all duration-300"
              >
                04.50.46.22.38
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

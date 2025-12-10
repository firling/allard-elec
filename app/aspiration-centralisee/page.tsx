'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconVacuumCleaner,
  IconBolt,
  IconHeart,
  IconShieldCheck,
  IconCheck,
  IconArrowRight,
  IconSparkles,
  IconStar,
} from '@tabler/icons-react';

const advantages = [
  {
    title: 'Puissance',
    icon: IconBolt,
    description: 'L\'aspirateur centralisé CYCLOVAC aspire efficacement sur toutes les surfaces : carrelage, parquet, moquette et bien plus encore.',
    gradient: 'from-yellow-600 to-orange-500',
  },
  {
    title: 'Hygiène',
    icon: IconHeart,
    description: 'Filtres antimicrobiens capturant plus de 95% des particules. Idéal pour les personnes allergiques, minimise le contact entre poussières et moteur.',
    gradient: 'from-pink-600 to-rose-500',
  },
  {
    title: 'Garantie',
    icon: IconShieldCheck,
    description: 'Garantie maximale de 10 ans sur nos aspirateurs centralisés CYCLOVAC (modèle 2015). Tranquillité d\'esprit assurée.',
    gradient: 'from-green-600 to-emerald-500',
  },
];

const features = [
  'Système ultra-silencieux',
  'Plus de traînage de tuyau lourd',
  'Qualité de l\'air améliorée',
  'Installation discrète et esthétique',
  'Économies d\'énergie significatives',
  'Valorisation immobilière',
  'Facilité d\'utilisation',
  'Maintenance simplifiée',
];

export default function AspirationCentraliseePage() {
  return (
    <div>
      {/* Hero Section avec image */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/accueil/aspirateur_centralise_intgrecyclovac.jpg"
            alt="Aspiration centralisée CYCLOVAC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-900/80 to-orange-900/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium backdrop-blur-sm mb-6">
              <IconVacuumCleaner size={16} />
              Système centralisé
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Aspiration
              <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Centralisée CYCLOVAC
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Simplifiez vos tâches ménagères avec la puissance et l\'efficacité
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Demander un devis
              <IconArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <IconSparkles size={16} />
              Pourquoi CYCLOVAC
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Les avantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${advantage.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 via-orange-700 to-amber-700 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Autres avantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <IconCheck size={20} className="text-white flex-shrink-0" />
                  <span className="text-sm text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Comment ça fonctionne ?
            </h2>
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  L'aspiration centralisée est un système installé de manière permanente dans votre habitation. Une centrale d'aspiration est installée dans un local technique (garage, cave, buanderie) et reliée à des prises murales réparties dans toute la maison.
                </p>
                <p>
                  Il suffit de brancher le flexible d'aspiration dans une prise murale pour aspirer. Les poussières et saletés sont directement acheminées vers la centrale d'aspiration, située à l'extérieur de votre espace de vie.
                </p>
                <p>
                  Plus besoin de traîner un aspirateur lourd d'une pièce à l'autre. Le système est ultra-silencieux car le moteur est éloigné des pièces de vie, et l'air est rejeté à l'extérieur, améliorant considérablement la qualité de l'air intérieur.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <IconStar size={16} className="fill-orange-500 text-orange-500" />
              Leader du marché
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                CYCLOVAC
              </h3>
              <p className="text-xl text-gray-600">
                Fabricant leader mondial d'aspiration centralisée
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-amber-900" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intéressé par l'aspiration centralisée ?
            </h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              Découvrez le confort d'un système moderne et performant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-orange-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Obtenir un devis
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold border-2 border-white/20 hover:bg-orange-700 transition-all duration-300"
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

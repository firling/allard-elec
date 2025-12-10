'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconHome,
  IconTools,
  IconPhoneCall,
  IconBolt,
  IconBulb,
  IconArrowRight,
  IconSparkles,
} from '@tabler/icons-react';

const services = [
  {
    title: 'Constructions neuves',
    icon: IconHome,
    items: [
      'Maisons individuelles',
      'Appartements',
      'Bureaux et commerces',
      'Bâtiments tertiaires',
    ],
    color: 'blue',
  },
  {
    title: 'Rénovations',
    icon: IconBolt,
    items: [
      'Vérification installation électrique',
      'Mise en conformité',
      'Modernisation complète',
      'Optimisation énergétique',
    ],
    color: 'green',
  },
  {
    title: 'Installation',
    icon: IconTools,
    items: [
      'Armoires électriques',
      'Éclairages intérieurs et extérieurs',
      'Prises traditionnelles et spécialisées',
      'Volets roulants',
      'Chauffage électrique',
      'VMC',
    ],
    color: 'purple',
  },
  {
    title: 'Dépannage',
    icon: IconPhoneCall,
    items: [
      'Diagnostique de panne',
      'Intervention rapide',
      'Remplacement d\'équipements',
      'Disponible 7j/7',
    ],
    color: 'orange',
  },
];

const ledGallery = [
  {
    image: '/images/electricite/clairage-LED-corniches-lumineuses-spots-encastrs-dans-salon.jpg',
    title: 'Éclairage LED salon',
    description: 'Corniches lumineuses et spots encastrés',
  },
  {
    image: '/images/electricite/Economie-energie-spot-LED.jpg',
    title: 'Spots LED économiques',
    description: 'Économie d\'énergie garantie',
  },
  {
    image: '/images/electricite/led-outdoor.jpg',
    title: 'Éclairage extérieur',
    description: 'LED pour jardins et façades',
  },
  {
    image: '/images/electricite/led-stairs.jpg',
    title: 'Éclairage escaliers',
    description: 'Sécurité et esthétique',
  },
];

export default function ElectricitePage() {
  return (
    <div>
      {/* Hero Section avec image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/accueil/electrien-rhone-alpes-savoie-haute-savoie-annecy.jpg"
            alt="Électricien professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
              <IconBolt size={16} />
              Électricité professionnelle
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Électricité
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions complètes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Des installations électriques fiables et conformes pour tous types de bâtiments
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Demander un devis
              <IconArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <IconSparkles size={16} />
              Nos services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que nous proposons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions électriques adaptées à chaque projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-600 to-${service.color}-500 p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${service.color}-500 flex-shrink-0`} />
                          <span>{item}</span>
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

      {/* LED Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              <IconBulb size={16} />
              Spécialité LED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Éclairage LED moderne
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Économies d'énergie et ambiances sur-mesure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ledGallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-600 mb-6">Nos partenaires de confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-3xl font-bold text-gray-700">Legrand</div>
              <div className="text-3xl font-bold text-gray-700">Schneider Electric</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un projet électrique ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              De la conception à la réalisation, nous vous accompagnons dans tous vos projets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Obtenir un devis gratuit
              </Link>
              <a
                href="tel:0450462238"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold border-2 border-white/20 hover:bg-blue-700 transition-all duration-300"
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

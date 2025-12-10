'use client';

import { motion } from 'framer-motion';
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

const contactInfo = [
  {
    icon: IconPhone,
    title: 'Téléphone',
    items: [
      { label: 'Fixe', value: '04.50.46.22.38', link: 'tel:0450462238' },
      { label: 'Mobile', value: '06.25.78.54.98', link: 'tel:0625785498' },
    ],
    color: 'blue',
  },
  {
    icon: IconMail,
    title: 'Email',
    items: [
      { label: '', value: 'remi@allard-elec.com', link: 'mailto:remi@allard-elec.com' },
    ],
    color: 'green',
  },
  {
    icon: IconMapPin,
    title: 'Adresse',
    items: [
      { label: '', value: '84 Route des Collines', link: null },
      { label: '', value: '74330 Poisy', link: null },
      { label: '', value: 'France', link: null },
    ],
    color: 'red',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Nous sommes à votre écoute pour tous vos projets électriques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`bg-${info.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <info.icon size={32} className={`text-${info.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.items.map((item, idx) => (
                    <div key={idx} className="text-center">
                      {item.label && (
                        <span className="text-sm text-gray-600 block">{item.label}</span>
                      )}
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-900 font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-900">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Zone d'intervention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Zone d'intervention
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Intervention en Haute-Savoie, dans l'agglomération d'Annecy et le bassin de Rumilly
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-gray-800">
                Haute-Savoie
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-gray-800">
                Annecy
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-gray-800">
                Rumilly
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-gray-800">
                Poisy
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Demande de devis ou d'information
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="electricite">Électricité générale</option>
                    <option value="domotique">Domotique</option>
                    <option value="aspiration">Aspiration centralisée</option>
                    <option value="automatisation">Automatisation portail/garage</option>
                    <option value="depannage">Dépannage</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Envoyer la demande
                  </button>
                </div>

                <p className="text-sm text-gray-600 text-center mt-4">
                  Nous nous engageons à vous répondre dans les plus brefs délais
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'une intervention rapide ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Appelez-nous directement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0450462238"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <IconPhone size={24} className="mr-2" />
                04.50.46.22.38
              </a>
              <a
                href="tel:0625785498"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <IconPhone size={24} className="mr-2" />
                06.25.78.54.98
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

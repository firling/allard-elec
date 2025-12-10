'use client';

import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <IconPhone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>04.50.46.22.38</p>
                  <p>06.25.78.54.98</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconMail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:remi@allard-elec.com"
                  className="hover:text-secondary transition-colors"
                >
                  remi@allard-elec.com
                </a>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="text-xl font-bold mb-4">Adresse</h3>
            <div className="flex items-start space-x-3">
              <IconMapPin size={20} className="mt-1 flex-shrink-0" />
              <p>
                84 Route des Collines<br />
                74330 Poisy<br />
                France
              </p>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zone d'intervention</h3>
            <p className="text-gray-300">
              Intervention en Haute-Savoie, dans l'agglomération Annecy et le bassin de Rumilly
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright &copy;{currentYear} Allard Elec - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

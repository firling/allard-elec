import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Allard Elec - Électricien en Haute-Savoie',
  description: 'Électricien professionnel en Haute-Savoie. Spécialiste en électricité, domotique, aspiration centralisée et automatisation. Intervention à Annecy et Rumilly.',
  keywords: ['électricien', 'Haute-Savoie', 'Annecy', 'Rumilly', 'domotique', 'aspiration centralisée', 'automatisation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

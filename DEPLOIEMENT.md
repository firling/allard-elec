# Guide de déploiement - Allard Elec

## Déploiement sur Vercel (Recommandé)

Vercel est la plateforme de déploiement officielle de Next.js et offre un déploiement gratuit et simple.

### Étapes :

1. Créer un compte sur [Vercel](https://vercel.com)
2. Installer Vercel CLI (optionnel) :
   ```bash
   npm install -g vercel
   ```
3. Se connecter à Vercel :
   ```bash
   vercel login
   ```
4. Déployer le site :
   ```bash
   vercel
   ```

Ou directement depuis GitHub :
- Connecter votre repository GitHub à Vercel
- Vercel détectera automatiquement Next.js
- Le déploiement se fera automatiquement à chaque push

### Configuration Vercel

Aucune configuration spéciale n'est nécessaire. Vercel détecte automatiquement :
- Le framework (Next.js)
- La commande de build (`npm run build`)
- Le répertoire de sortie

## Déploiement sur Netlify

1. Créer un compte sur [Netlify](https://netlify.com)
2. Connecter votre repository
3. Configuration de build :
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

## Déploiement manuel (Serveur VPS)

### Prérequis :
- Node.js 18+ installé
- PM2 pour gérer le processus

### Étapes :

1. **Cloner le projet sur le serveur :**
   ```bash
   git clone [votre-repo]
   cd allard-elec
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Builder le projet :**
   ```bash
   npm run build
   ```

4. **Installer PM2 :**
   ```bash
   npm install -g pm2
   ```

5. **Lancer l'application :**
   ```bash
   pm2 start npm --name "allard-elec" -- start
   ```

6. **Sauvegarder la configuration PM2 :**
   ```bash
   pm2 save
   pm2 startup
   ```

7. **Configurer Nginx comme reverse proxy :**
   ```nginx
   server {
       listen 80;
       server_name allard-elec.com www.allard-elec.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Installer SSL avec Certbot :**
   ```bash
   sudo certbot --nginx -d allard-elec.com -d www.allard-elec.com
   ```

## Optimisations avant déploiement

### 1. Optimisation des images
Les images sont déjà dans le dossier `public/images/`. Next.js les optimisera automatiquement.

### 2. Variables d'environnement
Si vous avez besoin de variables d'environnement (API keys, etc.), créez un fichier `.env.local` :
```
NEXT_PUBLIC_CONTACT_EMAIL=remi@allard-elec.com
```

### 3. Analytics (optionnel)
Ajoutez Google Analytics ou Vercel Analytics dans `app/layout.tsx`.

## Maintenance

### Mise à jour du site :
```bash
git pull
npm install
npm run build
pm2 restart allard-elec
```

### Vérifier les logs :
```bash
pm2 logs allard-elec
```

### Monitoring :
```bash
pm2 monit
```

## Performance

Le site est optimisé pour :
- ✓ SEO (meta tags, structure sémantique)
- ✓ Performance (images optimisées, code splitting)
- ✓ Accessibilité (ARIA labels, navigation au clavier)
- ✓ Mobile-first design (responsive sur tous les appareils)

## Support

Pour toute question technique :
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind CSS : https://tailwindcss.com/docs
- Documentation Framer Motion : https://www.framer.com/motion/

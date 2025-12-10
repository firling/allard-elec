# Comment démarrer le projet - Guide rapide

## Prérequis

Assurez-vous d'avoir installé :
- Node.js 18 ou supérieur
- npm (installé avec Node.js)

## Installation

1. **Ouvrir un terminal dans le dossier du projet**
   ```bash
   cd c:\Users\firli\workplace\pro\allard-elec
   ```

2. **Installer les dépendances** (si ce n'est pas déjà fait)
   ```bash
   npm install
   ```

## Lancer le site en développement

```bash
npm run dev
```

Le site sera accessible sur :
- **Local** : http://localhost:3000
- **Réseau** : http://[votre-ip]:3000

Si le port 3000 est occupé, Next.js utilisera automatiquement le port 3001.

## Arrêter le serveur

Appuyez sur `Ctrl + C` dans le terminal.

## Pages disponibles

Une fois le serveur lancé, vous pouvez accéder à :

- **Accueil** : http://localhost:3000/
- **Électricité** : http://localhost:3000/electricite
- **Domotique** : http://localhost:3000/domotique
- **Aspiration centralisée** : http://localhost:3000/aspiration-centralisee
- **Automatisation Portail/Garage** : http://localhost:3000/automatisation-portail
- **Contact** : http://localhost:3000/contact

## Modifier le contenu

### Textes
Les textes sont directement dans les fichiers des pages :
- `app/page.tsx` - Page d'accueil
- `app/electricite/page.tsx` - Page Électricité
- `app/domotique/page.tsx` - Page Domotique
- `app/aspiration-centralisee/page.tsx` - Page Aspiration
- `app/automatisation-portail/page.tsx` - Page Automatisation
- `app/contact/page.tsx` - Page Contact

### Images
Les images sont dans le dossier `public/images/`
Pour ajouter/modifier une image :
1. Placez l'image dans `public/images/`
2. Référencez-la dans le code : `/images/nom-de-votre-image.jpg`

### Couleurs
Les couleurs sont définies dans :
- `tailwind.config.ts` - Couleurs primaires et secondaires
- `app/globals.css` - Variables CSS globales

Couleurs actuelles :
- **Primaire** : Bleu (#1e40af)
- **Secondaire** : Orange (#f59e0b)

### Navigation
Le menu de navigation est dans `components/Header.tsx`

### Footer
Le pied de page est dans `components/Footer.tsx`

## Préparer pour la production

### 1. Construire le site
```bash
npm run build
```

Cette commande crée une version optimisée du site dans le dossier `.next/`

### 2. Tester la version de production localement
```bash
npm start
```

### 3. Déployer
Voir le fichier [DEPLOIEMENT.md](./DEPLOIEMENT.md) pour les instructions complètes.

## Résolution de problèmes

### Le serveur ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez le dossier `.next` et relancez : `rm -rf .next && npm run dev`
- Vérifiez qu'aucun autre processus n'utilise le port 3000

### Les images ne s'affichent pas
- Vérifiez que les images sont bien dans `public/images/`
- Vérifiez le chemin dans le code (doit commencer par `/images/`)
- Redémarrez le serveur

### Les changements ne s'appliquent pas
- Next.js a le Hot Reload automatique, mais parfois il faut :
  - Sauvegarder le fichier modifié
  - Rafraîchir la page du navigateur (F5)
  - Si ça ne fonctionne toujours pas, redémarrer le serveur

### Erreurs TypeScript
- Ignorez les erreurs TypeScript mineures pendant le développement
- Pour un build de production, toutes les erreurs doivent être corrigées

## Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Vérifier les erreurs
npm run lint
```

## Support

- **Documentation du projet** : Voir [README.md](./README.md)
- **Déploiement** : Voir [DEPLOIEMENT.md](./DEPLOIEMENT.md)
- **Améliorations** : Voir [AMELIORATIONS_FUTURES.md](./AMELIORATIONS_FUTURES.md)
- **Résumé technique** : Voir [RESUME_PROJET.md](./RESUME_PROJET.md)

## Pour aller plus loin

1. **Ajouter Google Analytics**
   - Créer un compte Google Analytics
   - Ajouter le code de suivi dans `app/layout.tsx`

2. **Activer le formulaire de contact**
   - Créer un compte EmailJS, SendGrid ou Resend
   - Ajouter la logique d'envoi dans `app/contact/page.tsx`

3. **Ajouter plus de pages**
   - Créer un nouveau dossier dans `app/`
   - Ajouter un fichier `page.tsx` dans ce dossier
   - Le lien sera automatiquement `/nom-du-dossier`

## Bon à savoir

- Le site est **responsive** : il s'adapte automatiquement aux mobiles, tablettes et ordinateurs
- Les **animations** sont automatiques grâce à Framer Motion
- Le **SEO** est optimisé avec les meta tags dans chaque page
- Les **images** sont automatiquement optimisées par Next.js
- Le code est en **TypeScript** pour plus de robustesse

---

Bon développement !

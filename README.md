# Candidate Platform

Ce projet est une application frontend développée avec Next.js 14.  
Elle permet aux **candidats** de remplir un formulaire et aux **recruteurs** de consulter une liste de candidats ainsi que le détail de chaque profil.

## Technologies utilisées

- Next.js 14 (App Router)
- Ant Design
- Redux Toolkit
- React-i18next
- ESLint

## Installation

```bash
git clone https://github.com/WailsCarton/candidate-platform.git
cd candidate-platform
npm install
```

## Lancement

```bash
npm run dev
```

Rendez-vous ensuite sur [http://localhost:3000](http://localhost:3000)

## Pages

- `/` → Page d’accueil avec deux boutons (Candidat / Recruteur)
- `/candidat` → Formulaire de candidature
- `/recruteur` → Liste des candidats
- `/recruteur/[candidateId]` → Détails d’un candidat

## Organisation

```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── candidat/page.js
│   ├── recruteur/page.js
│   └── recruteur/[candidateId]/page.js
├── components/
├── store/
├── i18n/
├── styles/
```

## Remarques

- Les données sont stockées avec Redux (pas de base de données).
- L’application est multilingue (FR / EN).

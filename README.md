
# 💼 Candidate Platform

Plateforme web simple de gestion de candidatures, développée avec **Next.js 14**, **Ant Design**, **Redux Toolkit** et **i18next**.  
Ce projet permet aux candidats de postuler via un formulaire et aux recruteurs de visualiser les candidatures seulement en local sans Base de Données.

---

## 🚀 Fonctionnalités

### 👤 Côté Candidat
- Formulaire de candidature avec :
  - Informations personnelles
  - Compétences
  - Upload de CV et lettre de motivation (PDF)
- Multilingue (🇫🇷 🇬🇧 🇩🇪 🇪🇸)
- Validation de formulaire avec Ant Design

### 🕵️‍♂️ Côté Recruteur
- Liste des candidats sous forme de cartes cliquables
- Détails du candidat avec téléchargement des fichiers envoyés

---

## 🧱 Stack technique

- **Next.js 14** (App Router)
- **Redux Toolkit** (gestion du state)
- **Ant Design** (UI components)
- **i18next** + `react-i18next` (traductions)
- **CSS Modules** (styles propres et localisés)

---

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── candidat/                    # Page du formulaire candidat
│   ├── recruteur/                  # Liste & détails des candidats
│   ├── layout.js                   # Layout global
│   ├── page.js                     # Page d'accueil
│
├── components/                     # Composants réutilisables
│
├── store/                          # Redux (slice, store, hooks)
│
├── providers/                      # StoreProvider
│
├── i18n/                           # Fichiers de traduction
│
├── diagrams/                       # Diagrammes UML
```

---

## 🌐 Langues supportées

- 🇫🇷 Français
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇪🇸 Español

Sélecteur de langue intégré dans le `Header`.

---

## 🧪 Lancer le projet en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/WailsCarton/candidate-platform.git
cd candidate-platform

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

```

Ensuite va sur [http://localhost:3000](http://localhost:3000)

---

## 🧩 Diagramme UML

📄 Voir `/diagrams/uml-candidate-platform.drawio` pour la structure des composants.  
Inclut les relations entre :
- Recruteur
- Candidature
- Candidat
---

## 📎 Auteur

Développé par **Regan S.** – dans le cadre d’un test technique Frontend.

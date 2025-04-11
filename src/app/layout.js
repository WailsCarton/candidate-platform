import '@/styles/globals.css';
import React from 'react';

export const metadata = {
    title: 'Plateforme de candidature',
    desciption: 'Plateforme de candidature et de gestion des candidats',

};

export default function RootLayout({ children }) {
    return (
      <html lang="fr">
        <body>{children}</body>
      </html>
    );
  }
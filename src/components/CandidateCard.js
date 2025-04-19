'use client';

import { Card } from 'antd';
import { useRouter } from 'next/navigation';
import styles from './CandidateCard.module.css';

export default function CandidateCard({ candidate, index }) {
  const router = useRouter();

  const prenom = candidate?.prenom || 'Prénom';
  const nom = candidate?.nom || 'Nom';
  const email = candidate?.email || 'Non renseigné';
  const competences = candidate?.competences || 'Aucune compétence';

  return (
    <Card
      hoverable
      className={styles.card}
      onClick={() => router.push(`/recruteur/${index}`)}
    >
      <h3 className={styles.title}>
        {prenom} {nom}
      </h3>
      <p className={styles.text}>Email : {email}</p>
      <p className={styles.text}>Compétences : {competences}</p>
    </Card>
  );
}

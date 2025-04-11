'use client';

import { Card } from 'antd';
import { useRouter } from 'next/navigation';
import styles from './CandidateCard.module.css';

export default function CandidateCard({ candidate, index }) {
  const router = useRouter();

  return (
    <Card
      hoverable
      className={styles.card}
      onClick={() => router.push(`/recruteur/${index}`)}
    >
      <h3 className={styles.title}>
        {candidate.prenom} {candidate.nom}
      </h3>
      <p className={styles.text}>Email : {candidate.email}</p>
      <p className={styles.text}>Compétences : {candidate.competences}</p>
    </Card>
  );
}

'use client';

import { Card } from 'antd';
import { useRouter } from 'next/navigation';

export default function CandidateCard({ candidate, index }) {
  const router = useRouter();

  return (
    <Card
      hoverable
      style={{ marginBottom: '1rem' }}
      onClick={() => router.push(`/recruteur/${index}`)}
    >
      <h3>{candidate.prenom} {candidate.nom}</h3>
      <p>Email : {candidate.email}</p>
      <p>Compétences : {candidate.competences}</p>
    </Card>
  );
}

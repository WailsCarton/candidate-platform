'use client';

import { useAppSelector } from '@/store/hooks';
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

export default function CandidateDetailPage() {
  const { candidateId } = useParams();
  const candidats = useAppSelector((state) => state.candidate.list);
  const candidat = candidats[candidateId];


  if (!candidat) {
    return <p style={{ padding: '2rem' }}>Candidat introuvable.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title level={2}>Détails du candidat</Typography.Title>
      <Card>
        <p><strong>Nom :</strong> {candidat.nom}</p>
        <p><strong>Prénom :</strong> {candidat.prenom}</p>
        <p><strong>Email :</strong> {candidat.email}</p>
        <p><strong>Compétences :</strong> {candidat.competences}</p>

        {candidat.cv?.[0]?.name && (
          <p><strong>CV :</strong> {candidat.cv[0].name}</p>
        )}
        {candidat.lettre?.[0]?.name && (
          <p><strong>Lettre de motivation :</strong> {candidat.lettre[0].name}</p>
        )}
      </Card>
    </div>
  );
}

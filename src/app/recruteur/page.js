'use client';

import { Typography } from 'antd';
import { useAppSelector } from '@/store/hooks';
import CandidateCard from '@/components/CandidateCard';

export default function RecruteurPage() {
  const candidats = useAppSelector((state) => state.candidate.list);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title level={2}>Liste des candidats</Typography.Title>

      {candidats.length === 0 ? (
        <p>Aucun candidat enregistré pour le moment.</p>
      ) : (
        candidats.map((c, i) => (
          <CandidateCard key={i} candidate={c} index={i} />
        ))
      )}
    </div>
  );
}

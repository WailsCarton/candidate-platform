'use client';

import { useAppSelector } from '@/store/hooks';
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export default function CandidateDetailPage() {
  const { candidateId } = useParams();
  const candidats = useAppSelector((state) => state.candidate.list);
  const { t } = useTranslation();

  const candidat = candidats[candidateId];

  if (!candidat) {
    return <p style={{ padding: '2rem' }}>{t('not_found')}</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title level={2}>{t('details_title')}</Typography.Title>
      <Card>
        <p><strong>{t('label_nom')} :</strong> {candidat.nom}</p>
        <p><strong>{t('label_prenom')} :</strong> {candidat.prenom}</p>
        <p><strong>{t('label_email')} :</strong> {candidat.email}</p>
        <p><strong>{t('label_competences')} :</strong> {candidat.competences}</p>

        {candidat.cv?.[0]?.name && (
          <p><strong>{t('label_cv_name')} :</strong> {candidat.cv[0].name}</p>
        )}
        {candidat.lettre?.[0]?.name && (
          <p><strong>{t('label_lettre_name')} :</strong> {candidat.lettre[0].name}</p>
        )}
      </Card>
    </div>
  );
}

'use client';

import { useAppSelector } from '@/store/hooks';
import { useParams } from 'next/navigation';
import { Card, Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './CandidateDetailPage.module.css';

export default function CandidateDetailPage() {
  const downloadFile = (file) => {
    const url = URL.createObjectURL(file.originFileObj);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const { candidateId } = useParams();
  const candidats = useAppSelector((state) => state.candidate.list);
  const { t } = useTranslation();

  const candidat = candidats[candidateId];

  if (!candidat) {
    return <p className={styles.container}>{t('not_found')}</p>;
  }

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>{t('details_title')}</Typography.Title>
      <Card className={styles.detailCard}>
        <p><strong>{t('label_nom')} :</strong> {candidat.nom}</p>
        <p><strong>{t('label_prenom')} :</strong> {candidat.prenom}</p>
        <p><strong>{t('label_email')} :</strong> {candidat.email}</p>
        <p><strong>{t('label_competences')} :</strong> {candidat.competences}</p>

        {candidat.cv?.[0] && (
          <p>
            <strong>{t('label_cv_name')} :</strong>{' '}
            <Button
              type="link"
              className={styles.downloadButton}
              onClick={() => downloadFile(candidat.cv[0])}
            >
              Télécharger {candidat.cv[0].name}
            </Button>
          </p>
        )}

        {candidat.lettre?.[0] && (
          <p>
            <strong>{t('label_lettre_name')} :</strong>{' '}
            <Button
              type="link"
              className={styles.downloadButton}
              onClick={() => downloadFile(candidat.lettre[0])}
            >
              Télécharger {candidat.lettre[0].name}
            </Button>
          </p>
        )}
      </Card>
    </div>
  );
}

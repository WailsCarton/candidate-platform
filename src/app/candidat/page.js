'use client';

import '@/i18n';
import CandidateForm from '@/components/CandidateForm';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import styles from './CandidatePage.module.css'; // ← ici

export default function CandidatPage() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <div className={styles.container}>
      <Typography.Title level={2} className={styles.title}>
        {t('candidate_form_title')}
      </Typography.Title>
      <p className={styles.subtitle}>{t('welcome_candidate_page')}</p>
      <CandidateForm />
    </div>
  );
}

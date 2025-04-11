'use client';

import '@/i18n';
import CandidateForm from '@/components/CandidateForm';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

export default function CandidatPage() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title level={2}>{t('candidate_form_title')}</Typography.Title>
      <p>{t('welcome_candidate_page')}</p>
      <CandidateForm />
    </div>
  );
}

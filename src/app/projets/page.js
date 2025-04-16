'use client';

import '@/i18n';
import { Typography } from 'antd';
import { useAppSelector } from '@/store/hooks';
import CandidateCard from '@/components/CandidateCard';
import { useTranslation } from 'react-i18next';
import styles from './RecruteurPage.module.css';

export default function RecruteurPage() {
  const candidats = useAppSelector((state) => state.candidate.list);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>{t('recruiter_list_title')}</Typography.Title>

      {candidats.length === 0 ? (
        <p className={styles.message}>{t('no_candidates')}</p>
      ) : (
        candidats.map((c, i) => (
          <CandidateCard key={i} candidate={c} index={i} />
        ))
      )}
    </div>
  );
}

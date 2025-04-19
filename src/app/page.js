'use client';

import "@/i18n";
import { useTranslation } from 'react-i18next';
import { Button, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import styles from './HomePage.module.css';

export default function HomePage() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>{t('title_home')}</Typography.Title>

      <Space direction="vertical" size="large" className={styles.actions}>
        <Button type="primary" size="large" onClick={() => router.push('/candidat')}>
          {t('btn_candidate')}
        </Button>
        <Button size="large" onClick={() => router.push('/recruteur')}>
          {t('btn_recruiter')}
        </Button>
      </Space>

      <div className={styles.language}>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

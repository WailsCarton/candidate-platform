'use client';

import { useTranslation } from 'react-i18next';
import { Button, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <Typography.Title level={2}>{t('title_home')}</Typography.Title>

      <Space direction="vertical" size="large" style={{ marginTop: '2rem' }}>
        <Button type="primary" size="large" onClick={() => router.push('/candidat')}>
          {t('btn_candidate')}
        </Button>
        <Button size="large" onClick={() => router.push('/recruteur')}>
          {t('btn_recruiter')}
        </Button>
      </Space>

      <div style={{ marginTop: '2rem' }}>
        <Button onClick={() => i18n.changeLanguage('fr')} style={{ marginRight: '1rem' }}>
          FR
        </Button>
        <Button onClick={() => i18n.changeLanguage('en')}>
          EN
        </Button>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Layout, Typography, Menu, Dropdown } from 'antd';
import { usePathname } from 'next/navigation';

const { Header } = Layout;

export default function AppHeader() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  if (pathname === '/') return null;

  const languageItems = [
    { key: 'fr', label: 'Français' },
    { key: 'en', label: 'English' },
    { key: 'es', label: 'Español' },
    { key: 'de', label: 'Deutsch' }
  ];

  const handleLanguageChange = ({ key }) => {
    i18n.changeLanguage(key);
  };

  return (
    <Header
      style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        height: 64,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          <Link href="/" style={{ color: '#1677ff' }}>{t('site_title')}</Link>
        </Typography.Title>

        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/candidat">{t('btn_candidate')}</Link>
          <Link href="/recruteur">{t('btn_recruiter')}</Link>
        </nav>
      </div>

      <Dropdown
        menu={{ items: languageItems, onClick: handleLanguageChange }}
        placement="bottomRight"
        arrow
      >
        <a style={{ cursor: 'pointer', color: '#1677ff' }}>
          {i18n.language.toUpperCase()}
        </a>
      </Dropdown>
    </Header>
  );
}

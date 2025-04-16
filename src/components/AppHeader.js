'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Layout, Typography, Menu, Dropdown, Space } from 'antd';
import { usePathname } from 'next/navigation';
import styles from './AppHeader.module.css';

const { Header } = Layout;

export default function AppHeader() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  if (pathname === '/') return null;

  const languageItems = [
    { key: 'fr', label: <Space>🇫🇷 Français</Space> },
    { key: 'en', label: <Space>🇬🇧 English</Space> },
    { key: 'es', label: <Space>🇪🇸 Español</Space> },
    { key: 'de', label: <Space>🇩🇪 Deutsch</Space> },
  ];

  const handleLanguageChange = ({ key }) => {
    i18n.changeLanguage(key);
  };

  const currentLang = i18n.language;

  const flag = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸',
    de: '🇩🇪',
  }[currentLang] || '🌐';

  return (
    <Header className={styles.header}>
      <div className={styles.left}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          <Link href="/" style={{ color: '#1677ff' }}>{t('site_title')}</Link>
        </Typography.Title>

        <nav className={styles.nav}>
          <Link href="/candidat">{t('btn_candidate')}</Link>
          <Link href="/recruteur">{t('btn_recruiter')}</Link>
          <Link href="/projets">{t('btn_projects')}</Link>
        </nav>
      </div>

      <Dropdown
        menu={{ items: languageItems, onClick: handleLanguageChange }}
        placement="bottomRight"
        arrow
      >
        <a className={styles.langBtn}>
          {flag} {currentLang.toUpperCase()}
        </a>
      </Dropdown>
    </Header>
  );
}

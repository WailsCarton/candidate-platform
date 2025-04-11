'use client';

import '@/i18n';
import { useTranslation } from 'react-i18next';
import { Button, Space } from 'antd';

const languages = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'de', label: 'DE', flag: '🇩🇪' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Space>
        {languages.map(({ code, label, flag }) => (
          <Button
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            type={i18n.language === code ? 'primary' : 'default'}
          >
            {flag} {label}
          </Button>
        ))}
      </Space>
    </div>
  );
}

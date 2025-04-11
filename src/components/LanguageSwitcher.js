'use client';

import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

  return (
    
    <div style={{ marginTop: '2rem' }}>
        <Button onClick={() => i18n.changeLanguage('fr')} style={{ marginRight: '1rem' }}>
          FR
        </Button>
        <Button onClick={() => i18n.changeLanguage('en')}>
          EN
        </Button>
      </div>
  );
}

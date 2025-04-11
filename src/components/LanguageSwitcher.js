'use client';

import '@/i18n';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();    

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

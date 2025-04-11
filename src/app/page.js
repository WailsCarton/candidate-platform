'use client';

import { Button, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <Typography.Title level={2}>Bienvenue sur la plateforme</Typography.Title>
      <Space direction="vertical" size="large">
        <Button type="primary" size="large" onClick={() => router.push('/candidat')}>
          Je suis un candidat
        </Button>
        <Button type="default" size="large" onClick={() => router.push('/recruteur')}>
          Je suis un recruteur
        </Button>
      </Space>
    </div>
  );
}

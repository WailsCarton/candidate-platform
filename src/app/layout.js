import StoreProvider from '@/store/StoreProvider';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';

export const metadata = {
  title: 'Candidate Platform',
  description: 'Plateforme de recrutement',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StoreProvider>
          <ConfigProvider>
            {children}
          </ConfigProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

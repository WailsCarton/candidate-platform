import '@/styles/globals.css';
import '@/i18n';
import { ConfigProvider } from 'antd';
import StoreProvider from '@/providers/StoreProvider';
import Layout from 'antd/es/layout/layout';
import AppHeader from '@/components/AppHeader';

const Content = Layout;


export const metadata = {
  title: 'Candidate Platform | Candidatures et Recrutement',
  description: 'Plateforme web moderne permettant aux candidats de postuler et aux recruteurs de gérer les candidatures facilement.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StoreProvider>
          <ConfigProvider>
            <Layout>
              <AppHeader/>
              <Content style={{ padding: '2rem' }}>
                {children}
              </Content>
            </Layout>
          </ConfigProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

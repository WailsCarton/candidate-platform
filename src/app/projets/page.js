'use client';

import '@/i18n';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Projets.module.css';
import { useSelector } from 'react-redux';
import ProjectTable from '@/components/ProjectTable';

export default function Projets() {
  const projects = useSelector((state) => state.project.list);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>{t('projects_table')}</Typography.Title>


      {projects.length === 0 ? (
        <p className={styles.message}>{t('no_candidates')}</p>
      ) : ( <ProjectTable/>)}

    </div>
  );
}

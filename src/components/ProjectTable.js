'use client';

import { Table, Tag, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function ProjectTable() {
  const projets = useSelector((state) => state.project.list);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const { t } = useTranslation();

  const toggleExpand = (record) => {
    setExpandedRowKeys((prev) =>
      prev.includes(record.id)
        ? prev.filter((id) => id !== record.id)
        : [...prev, record.id]
    );
  };

  const columns = [
    {
      title: t('column_title'),
      dataIndex: 'intitule',
      key: 'intitule',
    },
    {
      title: t('column_partner'),
      dataIndex: 'partenaire',
      key: 'partenaire',
    },
    {
      title: t('column_date'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: t('column_learners'),
      key: 'apprenants',
      render: (_, record) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() => toggleExpand(record)}
        />
      ),
    },
    {
      title: t('column_status'),
      dataIndex: 'statut',
      key: 'statut',
      render: (statut) => {
        const colorMap = {
          'Nouveau': 'gold',
          'En attente': 'blue',
          'Qualifié': 'green',
          'En cours': 'cyan',
          'Terminé': 'success',
        };

        return <Tag color={colorMap[statut] || 'default'}>{statut}</Tag>;
      }
    }
  ];

  return (
    <Table
      dataSource={projets}
      columns={columns}
      rowKey="id"
      pagination={true}
      expandable={{
        expandedRowRender: (record) => (
          <div style={{ paddingLeft: '1rem' }}>
            <strong>{t('column_learners')} :</strong>
            {record.apprenants.length === 0 ? (
              <p style={{ marginTop: '0.5rem' }}>{t('apprenants_empty')}</p>
            ) : (
              <div style={{ marginTop: '0.5rem' }}>
                {record.apprenants.map((a, i) => (
                  <Tag color="gray" key={i} style={{ marginBottom: '0.4rem' }}>
                    {a}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        ),
        expandedRowKeys,
        onExpand: (_, record) => toggleExpand(record),
        rowExpandable: () => true,
        expandIcon: () => null
      }}
    />
  );
}

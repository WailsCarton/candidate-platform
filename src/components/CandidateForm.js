'use client';

import { useTranslation } from 'react-i18next';
import { Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { addCandidate } from '@/store/candidateSlice';
import { useRouter } from 'next/navigation';

export default function CandidateForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const normFile = (e) => {
    return Array.isArray(e) ? e : e?.fileList;
  };

  const onFinish = (values) => {
    dispatch(addCandidate(values));
    message.success(t('success_message'));
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600, margin: '0 auto' }}>
      <Form.Item
        label={t('label_nom')}
        name="nom"
        rules={[{ required: true, message: t('label_nom') + ' ?' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('label_prenom')}
        name="prenom"
        rules={[{ required: true, message: t('label_prenom') + ' ?' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('label_email')}
        name="email"
        rules={[{ required: true, type: 'email', message: t('label_email') + ' ?' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('label_competences')}
        name="competences"
        rules={[{ required: true, message: t('label_competences') + ' ?' }]}
      >
        <Input.TextArea rows={4} placeholder="Ex: React, Node.js, SQL..." />
      </Form.Item>

      <Form.Item
        label={t('label_cv')}
        name="cv"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          beforeUpload={() => false}
          accept="application/pdf"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>{t('upload_button')}</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label={t('label_lettre')}
        name="lettre"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          beforeUpload={() => false}
          accept="application/pdf"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>{t('upload_button')}</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t('submit_button')}
        </Button>
      </Form.Item>
    </Form>
  );
}

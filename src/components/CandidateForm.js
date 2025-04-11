'use client';

import { Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { addCandidate } from '@/store/candidateSlice';
import { useRouter } from 'next/navigation';

export default function CandidateForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onFinish = (values) => {
    dispatch(addCandidate(values));
    message.success('Candidat enregistré avec succès !');
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600, margin: '0 auto' }}>
      <Form.Item
        label="Nom"
        name="nom"
        rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Prénom"
        name="prenom"
        rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Compétences"
        name="competences"
        rules={[{ required: true, message: 'Veuillez entrer vos compétences' }]}
      >
        <Input.TextArea rows={4} placeholder="Ex: React, Node.js, SQL..." />
      </Form.Item>

      <Form.Item
        label="CV (PDF)"
        name="cv"
        valuePropName="fileList"
        getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
      >
        <Upload beforeUpload={() => false} accept="application/pdf">
          <Button icon={<UploadOutlined />}>Choisir un fichier</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Lettre de motivation (PDF)"
        name="lettre"
        valuePropName="fileList"
        getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
      >
        <Upload beforeUpload={() => false} accept="application/pdf">
          <Button icon={<UploadOutlined />}>Choisir un fichier</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Envoyer la candidature
        </Button>
      </Form.Item>
    </Form>
  );
}

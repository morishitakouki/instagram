import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { postsAPI } from '../urls/indexurl';
import '../App.css'; 

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' ) {
      setError('タイトルは必須です');
      return;
    }

    if (content.trim() === '' ) {
      setError('内容は必須です');
      return;
    }

    if (title.length > 100) {
      setError('タイトルは100文字以内で入力してください');
      return;
    }

    if (content.length > 1000) {
      setError('内容は1000文字以内で入力してください');
      return;
    }

    const postData = { title, content };

    axios.post(postsAPI, postData)
      .then(() => {
        setShowMessage(true);
        setError('');
        setTitle('');
        setContent('');

        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="mt-5">
      {showMessage && (
        <Alert variant="success" style={{ animation: `${showMessage ? 'slide-in 0.5s ease-out' : 'slide-out 0.5s ease-in'}` }}>
        投稿に成功しました
        </Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="mb-4">投稿を作成</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postTitle">
              <Form.Label>タイトル</Form.Label>
              <Form.Control
                type="text"
                placeholder="タイトルを入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="postContent">
              <Form.Label>内容</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="内容を入力"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              投稿
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Create;
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({ handleOnchange, handleOnsubmit, formSwitcher, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Giriş Yapınız</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnsubmit}>
            <Form.Group>
              <Form.Label>E-posta Adresiniz :</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnchange}
                placeholder="E-posta adresinizi girin"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Şifreniz :</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnchange}
                placeholder="Şifrenizi girin"
                required
              />
            </Form.Group>
            <Button type="submit">Giriş Yap</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('reset')} >Şifremi unuttum</a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnsubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

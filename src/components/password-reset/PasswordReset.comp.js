import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({ handleOnchange, handleOnResetsubmit, formSwitcher, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Şifrenizi Sıfırlayın</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetsubmit}>
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
            <Button type="submit">Sıfırla</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('login')}>Giriş Yapın</a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetsubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};

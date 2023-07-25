import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

function PostPage() {

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <p>Post component</p>
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className={`${appStyles.headerText} d-none d-lg-block p-0 p-lg-2`}>
      <i class="fa-solid fa-users"></i> Discover People
      </Col>
    </Row>
  );
}

export default PostPage;
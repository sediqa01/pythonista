import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center pt-0 pt-lg-4">
      <Form.Group>
        <Form.Label className={appStyles.headerText}>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          className={appStyles.Input}
        />
      </Form.Group>
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-5 mb-0`}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-5 mb-0`} type="submit"
      >
      Post
      </Button>
    </div>
  );

  return (
    <Form className="mt-2 mt-md-5">
      <Row>
        <Col className="py-2 p-0 p-md-2">
          <Container
            className={`${styles.Container} d-flex flex-column justify-content-center pb-3 pt-2`}
          >
            <Form.Group className="text-center">
              
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click or to uplaod an Image" />
              </Form.Label>

          </Form.Group>

            <div className="mb-6">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
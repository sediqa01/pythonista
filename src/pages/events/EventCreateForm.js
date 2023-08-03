import React, { useState } from "react";
import {
    Form,
    Button,
    Row,
    Col,
    Container,
    Image,
    Alert,
  } from "react-bootstrap";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function EventCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center pt-0 pt-lg-4 p-2">
        <Form.Group>
            <Form.Label className={appStyles.headerText}>Title</Form.Label>
            <Form.Control
            type="text"
            name="title"
            aria-label="text-box"
            className={appStyles.Input}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label className={appStyles.headerText}>Description</Form.Label>
            <Form.Control
            as="textarea"
            rows={6}
            name="content"
            aria-label="text-area"
            className={appStyles.Input}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label className={appStyles.headerText}>Event Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="date"
              aria-label="date-picker"
              className={appStyles.Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={appStyles.headerText}>Start Time</Form.Label>
            <Form.Control
              required
              type="time"
              name="start_time"
              aria-label="time-packer"
              className={appStyles.Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={appStyles.headerText}>End Time</Form.Label>
            <Form.Control
              required
              type="time"
              name="end_time"
              aria-label="time-packer"
              className={appStyles.Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={appStyles.headerText}>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              aria-label="text-box"
              className={appStyles.Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={appStyles.headerText}>Organizer</Form.Label>
            <Form.Control
              type="text"
              name="organizer"
              aria-label="text-box"
              className={appStyles.Input}
             
            />
          </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-3 mb-0`}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-3 mb-0`}
        type="submit"
      >
      Add Event
      </Button>
    </div>
  );

  return (
    <Form className="mt-2 mt-md-3">
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

export default EventCreateForm;
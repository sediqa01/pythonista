import React from "react";

import { Form, Row, Col, Container } from "react-bootstrap";
import Event from "./Event";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";


function EventsPage() {
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>List of events here</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Upcoming events for desktop here</p>
      </Col>
    </Row>
  );
}

export default EventsPage;
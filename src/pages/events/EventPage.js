import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Col, Row, Container }from "react-bootstrap";
import appStyles from "../../App.module.css";
import Event from '../events/Event'

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: event }] = await Promise.all([
              axiosReq.get(`/events/${id}`),
            ]);
            setEvent({ results: [event] });
            // console.log(event);
          } catch (err) {
            // console.log(err);
          }
        };
    
        handleMount();
      }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <Event {...event.results[0]} setEvents={setEvent} />
        <Container className={appStyles.Content}>
          Conversations
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
         Upcoming Events for desktop
      </Col>
    </Row>
  );
}

export default EventPage;
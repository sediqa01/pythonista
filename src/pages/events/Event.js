import React from 'react'
import styles from "../../styles/Event.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip, } from 'react-bootstrap'
import { Link} from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";


const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        conversations_count,
        joins_count,
        join_id,
        image,
        title,
        description,
        updated_at,
        event_date,
        starts_at,
        ends_at,
        location,
        organizer,
        eventPage,
        setEvents,
      } = props;
    
      const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;

      const handleJoined = async () => {
        try {
          const { data } = await axiosRes.post("/joins/", { event: id });
          setEvents((prevEvents) => ({
            ...prevEvents,
            results: prevEvents.results.map((event) => {
              return event.id === id
                ? {
                    ...event,
                    joins_count: event.joins_count + 1,
                    join_id: data.id,
                  }
                : event;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };
    
      const handleNotJoined = async () => {
        try {
          await axiosRes.delete(`/joins/${join_id}/`);
          setEvents((prevEvents) => ({
            ...prevEvents,
            results: prevEvents.results.map((event) => {
              return event.id === id
                ? {
                    ...event,
                    joins_count: event.joins_count - 1,
                    join_id: null,
                  }
                : event;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };

  return (
    <Card className={styles.Event}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
            <div>
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                </Link>
                <span>{owner}</span>
            </div>
            <div className="d-flex align-items-center">
                <small>{updated_at}</small>
                {is_owner && eventPage && ".."}
            </div>
            </Media>
        </Card.Body>
        <Card.Body>
            <Link to={`/events/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Link to={`/events/${id}`}>
                <Card.Title className={`text-center ${styles.Title}`}>
                 {title}
                </Card.Title>
            </Link>k
            {description && <Card.Text className={styles.EventContent}>{description}</Card.Text>}
            <div  className={`${styles.EventBar} text-align-left text-md-start mt-4 m-3"`}>
            {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't mark Join your own event!</Tooltip>}
            >
              <i
                className={`fa-solid fa-circle-check ${styles.JoinImpossible}`}
              />
            </OverlayTrigger>
          ) : join_id ? (
            <span onClick={handleNotJoined}>
              <i className={`fa-solid fa-circle-check ${styles.Joined}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleJoined}>
              <i className={`fa-solid fa-circle-check ${styles.NotJoined}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to Join events!</Tooltip>}
            >
              <i
                className={`fa-solid fa-circle-check ${styles.JoinImpossible}`}
              />
            </OverlayTrigger>
          )}
          {joins_count}
          <Link to={`/posts/${id}`}>
            <i className="fa-solid fa-message" />
          </Link>
          {conversations_count}
           </div>
        </Card.Body>


    </Card>
  )
}

export default Event
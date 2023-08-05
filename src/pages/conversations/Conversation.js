import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Conversation = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setEvent,
    setConversation,
} = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/conversations/${id}/`)
        setEvent(prevEvent => ({
            results: [
                {
                ...prevEvent.results[0],
                conversations_count: prevEvent.results[0].conversations_count - 1
                },
            ],
        }));

        setConversation((prevConversations) => ({
            ...prevConversations,
            results: prevConversations.results.filter((conversation) => conversation.id !== id),
        }));
    } catch (err) {
        console.log(err)
    }
};

  return (
    <div className="mt-3"> 
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <MoreDropdown
            handleEdit={() => {}}
            handleDelete= {handleDelete}
         />
        )}
      </Media>
    </div>
  );
};

export default Conversation;
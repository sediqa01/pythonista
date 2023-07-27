import React from 'react'
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        image,
        content,
        updated_at,
        postPage,
        setPosts,
      } = props;
    
      const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;

      const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                return post.id === id
                    ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                    : post;
                }),
            }));
            } catch (err) {
            console.log(err);
        }
      };
    
      const handleUnlike = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);

        }
      };

  return (
    <Card className={styles.Post}>
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
              {is_owner && postPage && ".."}
            </div>
          </Media>
            {content && <pre className={styles.PostContent}>{content}</pre>}
        <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={content} />
        </Link>
        <div  className={`${styles.PostIcons} text-center text-md-start`}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeImpossible}`} />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa-solid fa-thumbs-up ${styles.Liked}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className="fa-solid fa-thumbs-up" />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className={`fa-solid fa-thumbs-up ${styles.LikeImpossible}`} />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
          <i className="fa-solid fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
    
  )
}

export default Post
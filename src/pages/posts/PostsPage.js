import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({message}) {

    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");
    const currentUser = useCurrentUser();

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?search=${query}`);
            setPosts(data);
            setHasLoaded(true);
          } catch (err) {
            // console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchPosts();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
       
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset
                 icon="fa-brands fa-searchengin"
                  message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col lg={4} className={`${appStyles.headerText} d-none d-lg-block p-0 p-lg-2`}>
      <i className="fa-solid fa-users"></i> Discover People
      </Col>
    </Row>
  );
}

export default PostsPage;
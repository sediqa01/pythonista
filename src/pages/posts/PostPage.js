import React, {useState, useEffect} from "react";

import {Col, Row, Container } from "react-bootstrap";


import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import appStyles from "../../App.module.css";

function PostPage() {

  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

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
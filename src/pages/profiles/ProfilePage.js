import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);


  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
          <h2 className={styles.Owner}>{profile?.owner}</h2>
        </Col>
        <Col lg={6}>
           {profile?.bio && <Col className="p-3">{profile.bio}</Col>}
          <Row className="mt-4 justify-content-space-between">
          <Col className="my-2">
              <div className={styles.Count}>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col className="my-2">
              <div className={styles.Count}>{profile?.events_count}</div>
              <div>events</div>
            </Col>
            <Col className="my-2">
              <div className={styles.Count}>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col className="my-2">
              <div className={styles.Count}>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
              className={`${btnStyles.Button} ${btnStyles.BlueOutline}`}
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => {}}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );


  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  const mainProfileEvents = (
    <>
      <hr />
      <p className="text-center">Profile owner's Event post</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>

        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
              {mainProfileEvents}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
     
    </Row>
  );
}

export default ProfilePage;
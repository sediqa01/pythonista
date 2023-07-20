import React, { useState } from "react";
import styles from "../../styles/Registaration.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Image
} from "react-bootstrap";

function SignInForm() {
    const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });
    const { username, password } = signInData;
    const history = useHistory();

    const handleChange = (event) => {
      setSignInData({
        /* split out earlier signup information so that just the pertinent characteristic is updated */
        ...signInData,
        /* create key: value pair of name: value */
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
        /* prevent the page from refreshing */
        event.preventDefault();
        try {
          /* include the signInData supplied and reroute to the URL */
          const { data } = await axios.post("dj-rest-auth/login/", signInData);
          setCurrentUser(data.user);
          setTokenTimestamp(data);
          history.goBack();
        } catch (err) {
          /* optional chaining (?) to check if there is a an error response */
          setErrors(err.response?.data);
        }
      };
  

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}

              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
           
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button>
          </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/drpij1z8t/image/upload/v1689891014/signin_img_muiztv.png"}
        />
      </Col>
    </Row>
  );
}

export default SignInForm;
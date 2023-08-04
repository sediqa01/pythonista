import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

const CreateEventButton = ({ url, text, mobile }) => {
  return (
    <Container className={`${btnStyles.Container} ${mobile && "d-lg-none text-center mb-2 m-0 p-0"}`}>
      {mobile ? (
        <Button
          className={`d-flex justify-content-around ${btnStyles.AddEventtButton} ${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Wide}`}
          as={Link}
          to={url}
        >
        {text}
        </Button>
      ) : (
        <Button
          className={`${btnStyles.AddEventtButton} ${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Wide}`}
          as={Link}
          to={url}
        >
         {text}
        </Button>
      )}
    </Container>
  );
};

export default CreateEventButton;
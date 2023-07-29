import React from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'

const PopularProfiles = () => {
  return (
    <Container className={appStyles.Content}>
       <i className="fa-solid fa-users"></i> Discover Profiles
    </Container>
  )
}

export default PopularProfiles
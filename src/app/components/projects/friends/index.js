import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import friends from '../screenshots/friends.png'
import { SiteContainer, ProjectsH3, ProjectsP, Bold } from '../emoProjects'

const Friends = () => (
  <SiteContainer h='100%' fdc w='95%' minh='100vh' p='10px 0 70px 0'>
    <ProjectsH3 asc>Friends</ProjectsH3>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/favouriteContacts'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      textdec='underline'
      href='https://favfriends.herokuapp.com/'
    >
      Deployed Site
    </A>
    <ProjectsP p='10px 0'>
      Side project built in a couple days. A full stack JavaScript application
      with user authentication and authorization, persistent data using
      PostgreSQL, Continous Deployment using Heroku, full CRUD functionality.
      React front end, Express back end. Express serves the react application on
      the same domain. Modals created using custom hook. Emotion for styling.
      Formik for forms with Yup for form validation.
    </ProjectsP>
    <ProjectsP p='10px 0'>
      <Bold>Key Contributions:</Bold> Full app, front end and back end, database
      and deployment.
    </ProjectsP>
    <ProjectsP m='10px 0'>
      <Bold>Stack:</Bold> React, ReduxTookit, Emotion, React Router, Formik,
      Yup, Express, Bcrypt, JWT, Knex, PostgreSQL
    </ProjectsP>
    <BasicImg src={friends} w='100%' m='10px 0 0' />
  </SiteContainer>
)

export default Friends

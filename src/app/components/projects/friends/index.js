import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import friends from './friends.png'
import { SiteContainer, ProjectsH3, ProjectsP } from '../emoProjects'

const F = () => (
  <SiteContainer m='20px 0' h='100%' minh='90%' p='10px' fdc mainColor w='95%'>
    <ProjectsH3 asc>Friends</ProjectsH3>
    <ProjectsP p='10px 0'>
      A full stack JavaScript application with user authentication and
      authorization, persistent data using PostgresQL, CD using Heroku, full
      CRUD functionality. React front end, Express back end. Express serves the
      react application on the same domain.
    </ProjectsP>
    <ProjectsP p='10px 0'>Key Contributions: App fully built by me.</ProjectsP>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/favouriteContacts'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A href='https://favfriends.herokuapp.com/'>
      <BasicImg src={friends} w='100%' />
    </A>
  </SiteContainer>
)

export default F

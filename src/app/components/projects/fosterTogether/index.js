import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import fostertogether from '../screenshots/fostertogether.png'
import { SiteContainer, ProjectsH3, ProjectsP, Bold } from '../emoProjects'

const FosterTogether = () => (
  <SiteContainer h='100%' fdc w='95%' minh='100vh' p='10px 0 70px 0'>
    <ProjectsH3 as='h3' h3 fw='bold' asc>
      Foster Together
    </ProjectsH3>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/foster-together-be'
      textdec='underline'
    >
      View backend on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/foster-together-fe/tree/serverless'
      textdec='underline'
    >
      View front end on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      textdec='underline'
      href='https://fostertogether.mytestdeployments.com/'
    >
      Deployed Site
    </A>
    <ProjectsP as='p' lh='1.25' m='10px 0'>
      Foster Together is a nonprofit organization helping foster parents. View
      their{' '}
      <A href='https://fostertogether.co' textdec='underline'>
        public site
      </A>{' '}
      for more information about their mission. This project is designed to help
      them with the administrative and onboarding tasks for their organization
      and its volunteers.
    </ProjectsP>
    <ProjectsP as='p' lh='1.25' m='10px 0'>
      This is a project that I worked with on a team and later refactored to be
      fully serverless. The backend repo is there for reference, but the link
      shown is a front end site hosted on Amplify and using API gateway, Lambda,
      Cognito and DynamoDB.
    </ProjectsP>
    <ProjectsP as='p' lh='1.25' m='10px 0'>
      <Bold>Key Contributions:</Bold> Application architecture, CI/CD, AWS
      Deployment, authentication/authorization, database design, Backend
      Engineering, SendGrid integration, front end state management with Redux
      Toolkit. Serverless refactor of backend.
    </ProjectsP>
    <ProjectsP as='p' lh='1.25' m='10px 0'>
      <Bold>Stack:</Bold> React, Express, Redux Toolkit, Knex, Styled
      Components, Jest, PostgreSQL, SendGrid, AWS
    </ProjectsP>
    <BasicImg
      src={fostertogether}
      w='100%'
      m='10px 0 0'
      alt='Foster Together Project'
    />
  </SiteContainer>
)

export default FosterTogether

import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import fostertogether from '../screenshots/fostertogether.png'
import { SiteContainer, ProjectsH3, ProjectsP, Bold } from '../emoProjects'

const FosterTogether = () => (
  <SiteContainer h='100%' fdc w='95%' minh='100vh' p='10px 0 70px 0'>
    <ProjectsH3 asc>Foster Together</ProjectsH3>
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
      href='https://github.com/michelangelo17/foster-together-fe'
      textdec='underline'
    >
      View front end on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      textdec='underline'
      href='https://app.fostertogether.co'
    >
      Deployed Site
    </A>
    <ProjectsP m='10px 0'>
      Foster Together is a nonprofit organization helping foster parents. View
      their{' '}
      <A href='https://fostertogether.co' textdec='underline'>
        public site
      </A>{' '}
      for more information about their mission. This project is designed to help
      them with the administrative and onboarding tasks for their organization
      and its volunteers.
    </ProjectsP>
    <ProjectsP m='10px 0'>
      Planned and designed app with a team of 5 developers including myself, and
      2 UX designers over a 7 week period to design, architect and build the app
      to the stakeholders specifications. Used Agile methodology and held
      frequent meetings with stakeholders to update and adapt product as it was
      developed. Worked as a Full Stack Developer, primarily on the backend.
      Solely built out full authentication/authorization system from scratch to
      handle different distinct user types. Handled all AWS alone for both Front
      End and Back End. Hosted fully on AWS using Elastic Beanstalk, CodeBuild,
      S3, CloudFront, RDS and CodePipeline. Fully automated CD/CI pipeline
      designed, with manual review from staging to production. The project is
      ongoing with a new team. The GitHub links are a fork of the project at the
      time my team moved on.
    </ProjectsP>
    <ProjectsP m='10px 0'>
      <Bold>Key Contributions:</Bold> Application architecture, CI/CD, AWS
      Deployment, authentication/authorization, database design, Backend
      Engineering, SendGrid integration, front end state management with Redux
      Toolkit.
    </ProjectsP>
    <ProjectsP m='10px 0'>
      <Bold>Stack:</Bold> React, Express, Redux Toolkit, Knex, Styled
      Components, Jest, PostgreSQL, SendGrid, AWS
    </ProjectsP>
    <BasicImg src={fostertogether} w='100%' m='10px 0 0' />
  </SiteContainer>
)

export default FosterTogether

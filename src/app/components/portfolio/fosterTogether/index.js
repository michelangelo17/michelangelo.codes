import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import fostertogether from './fostertogether.png'
import { SiteContainer, PortfolioH3, PortfolioP } from '../emoPortfolio'

const FT = () => (
  <SiteContainer m='20px 0' h='100%' minh='90%' p='10px' fdc mainColor w='95%'>
    <PortfolioH3 asc>Foster Together</PortfolioH3>
    <PortfolioP m='10px 0'>
      Foster Together is a nonprofit organization helping foster parents. View
      their{' '}
      <A href='https://fostertogether.co' textdec='underline'>
        public site
      </A>{' '}
      for more information about their mission. The project is designed to help
      them with the administrative and onboarding tasks for their organization
      and its volunteers.
    </PortfolioP>
    <PortfolioP m='10px 0'>
      Planned and designed app with my team to choose the tech stack, the
      architecture and goals of the site with the stakeholders. Worked as a Full
      Stack Developer, primarily on the backend and managed DevOps for Foster
      Together. Hosted fully on AWS using Elastic Beanstalk, CodeBuild, S3,
      CloudFront, RDS and CodePipeline. Fully automated CD/CI pipeline designed,
      with manual review from staging to production. The project is ongoing with
      a new team. At the time of writing, you can log in as a dummy
      administrator to see an admin dashboard with grace@email.com, password
      grace.
    </PortfolioP>
    <PortfolioP p='10px 0'>
      Key Contributions: Application architecture, CI/CD, AWS Deployment,
      database design, Backend Engineering, SendGrid integration, front end
      state management with ReduxToolkit.
    </PortfolioP>
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
    <A href='https://app.fostertogether.co'>
      <BasicImg src={fostertogether} w='100%' m='10px 0 0' />
    </A>
  </SiteContainer>
)

export default FT

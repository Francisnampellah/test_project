"use client";
import React from 'react';

import Image from "next/image";
import Navbar from "./component/navBar"; 
import Minion from "./assets/minion.jpg";
import { MdVerified } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoCalendar, GoDotFill } from "react-icons/go";
import { CiLocationOn, CiClock2,CiMonitor } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

import Accordion from "./component/Accordion";
import TopTal from "./component/TopTal";


interface FooterLinksProps {
  data: {
    [key: string]: string[];
  };
}

export default function Home() {



  return (
    <div className="text-gray-600">
      <Navbar/>
      <div className="flex flex-row pt-16 px-48 gap-4">
      <aside
        className="flex-2 pl-16 p-4 flex flex-col h-screen sticky top-0 gap-4"
      >
        <Image
          src={Minion}
          width={400}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex border-l-4 h-16 border-green-400 rounded justify-between pl-4 items-center">
          <h1>
            Gianluca is <span className="text-green-500">available</span> for hire
          </h1>
          <button className="bg-green-500 p-2 rounded text-sm text-white">
            Hire a developer
          </button>
        </div>
      </aside>

      <main
        className="flex-1 p-4 no-scrollbar"
      >
        <section className="flex flex-col gap-4">
          <h1 className="text-blue-700 text-2xl font-bold">Gianluca Vaccarini</h1>
          <div className="flex items-center gap-2">
            <MdVerified className="text-green-700" />
            <h3 className="text-green-700 text-sm"> <span className="font-semibold"> Verified Expert </span> in Engineering</h3>
          </div>
          <div className="flex flex-col gap-2">
            <InfoItem icon={<IoCodeSlashOutline />} text="Full-stack Developer" />
            <InfoItem icon={<CiLocationOn />} text="Seattle, WA, United States" />
            <InfoItem icon={<GoCalendar />} text="Toptal member since January 28, 2022" />
          </div>
        </section>

        <ExpertiseSection />

        <BioSection />

        <hr className="w-full my-4" />

        <ProjectsSection />

        <AvailabilityCards />

        <AccordionSections />
      </main>
    </div>

      <FooterSections />
    </div>
  );
}


const InfoItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center gap-4 p-2">
    {icon}
    {text}
  </div>
);

const ExpertiseSection = () => (
  <div className="flex flex-col px-4 gap-2 mt-6">
    <h1 className="text-sm">Expertise</h1>
    <div className="flex flex-row flex-wrap gap-1">
      {techSkills.map((item, index) => (
        <SkillTag key={index} skill={item} />
      ))}
    </div>
  </div>
);

const BioSection = () => (
  <div className="flex flex-col px-4 gap-2 mt-6">
    <h1 className="text-sm">Bio</h1>
    <p>
      Gianluca is a highly versatile full-stack software engineer. He has helped
      many companies take an idea and turn it into a product that serves
      thousands to millions of users. He built the software that powers Tesla
      service centers for scheduling from scratch and worked at big tech companies,
      such as Atlassian, Adobe, Snapchat, Starbucks, and T-Mobile. Known for
      building fast and exceptionally well, Gianluca can work on either end of the stack.
    </p>
  </div>
);

const ProjectsSection = () => (
  <div className="flex flex-row my-8">
    <div className="flex flex-col px-4 gap-4 ">
      <h1 className="text-md font-bold mb-4 text-black">Portfolio</h1>
      <div className="flex flex-col gap-1">
        {expertiseData.map((item, index) => (
          <div key={index} className="my-4">
            <h3 className="text-blue-700 text-sm">{item.company}</h3>
            <div>
             {item.technologies.map((item,index)=>(
              <span key={index}>{item},</span>
             ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="px-4 gap-4  w-[40%]">
    <h1 className="text-md font-bold my-4 text-black">Experience</h1>
      <div className="flex flex-row flex-wrap gap-1">
        {techExperiance.map((item, index) => (
          <SkillTag key={index} skill={item} />
        ))}
      </div>
    </div>
  </div>
);

const AvailabilityCards = () => (
  <div className="flex-row flex gap-4 justify-around">
    {professionalDetails.map((item, index) => (
      <div
        key={index}
        className="flex gap-4 w-[30%] h-64 flex-col bg-gray-100 p-4"
      >
        <div>
          {item.icon}
        </div>
        <h3>{item.title}</h3>
        <p>
         {item.content}
        </p>
      </div>
    ))}
  </div>
);

const AccordionSections = () => (
  <div className="pr-20 mt-8">
    <Accordion title="Work Experience">
      {experienceData.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </Accordion>

    <Accordion title="Experience">
      {projectsData.map((item, index) => (
        <ReferMeSection key={index} item={item} />
      ))}
    </Accordion>

    <Accordion title="Education">
      <EducationSection />
    </Accordion>

    <Accordion title="Skills">
      {Object.entries(techStack).map(([title, content], index) => (
        <SkillSection key={index} title={title} content={content.join(', ')} />      ))}
    </Accordion>
  </div>
);


const FooterSections = () => (
  <>
    <div className="flex items-center justify-center flex-col gap-2 my-6">
      <span className="text-gray-600 text">Collaboration That Works</span>
      <h1 className="text-black text-5xl font-bold">How to Work with Toptal</h1>
      <span className="text-gray-600 text">
        Toptal matches you directly with global industry experts from our network in hours—not weeks or months.
      </span>
      <TopTal />
    </div>

    <div className="flex w-full h-24 items-center justify-center bg-gray-100 gap-4">
      Top talent is in high demand.
      <button className="bg-green-500 p-2 rounded text-sm text-white">
        Hire a developer
      </button>
    </div>

    <div className="flex flex-col bg-blue-900 p-24">
      <FooterLinks data={contentMap} />
    </div>
  </>
);


const SkillTag = ({ skill }: { skill: string }) => (
  <div className="border text-blue-700 border-blue-700 p-1 rounded-2xl text-[12px]">
    {skill}
  </div>
);

const ExperienceCard = ({item }: {item:any}) => (
  <div  className="flex">
    <div className="w-4 pt-2 flex flex-col items-center">
      <GoDotFill className="text-sm text-blue-900" />
      <div className="h-full border-l-2 border-dashed border-gray-400"></div>
    </div>
    <div className="ml-4 p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-red-400">{item.role}</h3>
          <span className="text-gray-500">{item.company}</span>
        </div>
        <span>{item.period}</span>
      </div>
      <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">

      {item.description.map(({each}:{each:string}) => (
  <li >{each}</li>
))}

      </ul>
    </div>
  </div>
);

const ReferMeSection = ({item}: {item:any}) => (
  <div className="flex flex-col gap-2 m-2">
  <h3 className="text-gray-400 text-lg font-semibold">{item.name}</h3>
  <a className="text-blue-500">{item.url}</a>
  <p>{item.description}</p>
</div>
);

const EducationSection = () => (
  <div className="flex w-full flex-col">
  <div className="flex justify-between">
    <div>
      <h3 className="text-lg font-bold">
        Bachelors Degree in Computer Science
      </h3>
    </div>

    <span>2014 - 2018</span>
  </div>

  <span>
    University of Washington - Seattle, USA
  </span>

</div>
);

const SkillSection = ({title,content}: {title:string,content:string}) => (
  <div className="flex w-full flex-col gap-2 my-4">
    <h3 className="text-lg font-bold">
      {title}
    </h3>
    <div className='flex flex-wrap'>
      {content.split('').map((each, index) =>(
        <span key={index}>{each}</span>
      ))}
    </div>
  </div>
);

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
  return (
<div className="flex bg-blue-900 h-96 p-16 justify-center gap-6 text-white">
  {Object.entries(data).map(([title, links], index) => (
    title === "Featured Developer Skills" ? (
      <div key={index} className="flex-1 flex flex-col ">
        <h3 className='m-4'>{title}</h3>
        <hr className="text-gray-300" />
        <ul className={`flex ${index === 1 ? 'flex-row flex-wrap gap-4' : 'flex-col pt-4'}`}>
          {links.map((link, linkIndex) => (
            <li className="w-96" key={linkIndex}>{link}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div key={index} className={`flex-2 ${index === 1 ? 'flex' : 'flex-2'} flex-col`}>
        <h3 className='m-4' >{title}</h3>
        <hr className="text-gray-300" />
        <ul className={`flex ${index === 1 ? 'flex-row flex-wrap gap-4' : 'flex-col pt-4'}`}>
          {links.map((link, linkIndex) => (
            <li key={linkIndex}>{link}</li>
          ))}
        </ul>
      </div>
    )
  ))}
</div>

  );
};


const contentMap = {
  "Hire Talent": [
    "Hire Freelance Developers",
    "Hire Freelance Designers",
    "Hire Freelance Marketers",
    "Hire Freelance Product Managers",
    "Hire Freelance Project Managers",
    "Hire Freelance Finance Experts"
  ],
  "Featured Developer Skills": [
    "Full-stack Developers",
    "Front-end Developers",
    "Software Developers",
    "Web Developers",
    "Mobile App Developers",
    "AI Engineers",
    "Android Developers",
    "AngularJS Developers",
    "Django Developers",
    "Drupal Developers",
    "Game Developers",
    "Hadoop Developers",
    "iOS Developers",
    "Java Developers",
    "JavaScript Developers",
    "Kubernetes Developers",
    "Magento Developers",
    "Node.js Developers",
    "PHP Developers",
    "PostgreSQL Developers",
    "Python Developers",
    "React.js Developers",
    "Ruby on Rails Developers",
    "Salesforce Developers",
    "Scala Developers",
    "Unity Developers",
    "WordPress Developers"
  ],
  "About": [
    "Why Toptal",
    "Contact Us",
    "Press Center",
    "Careers",
    "FAQ",
    "Community",
    "About Us"
  ]
};


const techStack = {
  librariesAPIs: [
    "React", "Node.js", "REST APIs", "Redux-Saga", "React Redux", 
    "JSON API", "React Router", "Antd", "Web3.js", "fp-ts"
  ],
  tools: [
    "Jira", "Redux Thunk", "Git", "GitHub", "Slack", "Redux Toolkit", 
    "Figma", "Webpack", "Babel", "Mongoose"
  ],
  languages: [
    "JavaScript", "TypeScript", "HTML", "CSS", "Java", "SQL", 
    "GraphQL", "PHP", "C#", "Python", "Less", "SCSS", "Python 3"
  ],
  frameworks: [
    "Redux", "Express.js", "Next.js", "Jest", "Vanilla JS", "Bootstrap", 
    "Material UI", "Cypress", "OAuth 2", "Tailwind CSS", ".NET", 
    "Serverless Framework", "JSON Web Tokens (JWT)"
  ],
  paradigms: [
    "REST", "Testing", "Test-driven Development (TDD)", "Unit Testing", 
    "E2E Testing", "Search Engine Optimization (SEO)", "UX Design", 
    "UI Design"
  ],
  platforms: [
    "Amazon Web Services (AWS)", "Contentful", "Docker", "Klaviyo", 
    "Android", "Google Cloud Platform (GCP)", "Ethereum", "Heroku", 
    "Blockchain", "Amazon EC2", "Vercel"
  ],
  storage: [
    "Amazon S3 (AWS S3)", "JSON", "Databases", "NoSQL", "MongoDB", 
    "PostgreSQL", "Amazon DynamoDB", "Redis"
  ],
  other: [
    "Full-stack", "Back-end Development", "Data Structures", 
    "Data Visualization", "Front-end Development", "Styled-components", 
    "ESLint", "CI/CD Pipelines", "Software Architecture", 
    "Integration Testing", "Front-end Architecture", "User Experience (UX)", 
    "User Interface (UI)", "Performance", "Front-end", "APIs", 
    "UI Components", "Chakra UI", "Zustand", "OpenAI", "OpenAI GPT-3 API", 
    "OpenAI GPT-4 API", "Headless CMS", "A11Y", "i18n", 
    "Internationalization", "Algorithms", "Server-side Rendering (SSR)", 
    "Design", "Storybook", "Web3", "ECS", "Cloudflare"
  ]
};



const projectsData = [
  {
    name: "Refer Me",
    url: "http://www.refer.me",
    description: "Refer Me allows job seekers to get referrals from industry professionals. Companies benefit by accessing top talent through their hiring pipelines. The platform also supports resume reviews, career coaching, and mock interviews."
  },
  {
    name: "Noonlight Dealer Portal",
    url: "https://dealer-portal-beta.noonlight.com/login",
    description: "A React-based application built as a proof of concept (POC) for Noonlight within three weeks. I led the client-side architecture and development, working with leadership and the team to implement best UI/UX practices. Technologies include React, React-Query, Jest, and Cypress."
  },
  {
    name: "Interview.study",
    url: "http://www.interview.study",
    description: `Interview.study is an AI-powered interview preparation platform designed to offer users an interactive practice experience. I led the full-stack development, from conceptualization to deployment. 
      The platform includes a vectorized semantic search powered by large language models (LLMs), which enhances search accuracy and facilitates natural conversational interactions. 
      I also implemented a CI/CD pipeline to streamline deployments and ensure the platform's continuous innovation.`
  }
];


const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Atlassian",
    period: "2024 - PRESENT",
    description: [
      "Implemented several features across Atlassian core products.",
      "Led and oversaw the high-level architecture of multiple initiatives.",
      "Implemented various performance-related initiatives to improve customer experience."
    ],
    technologies: [
      "React", "GraphQL", "TypeScript", "Figma", "Python 3", "SQL", "JSON", "JSON API"
    ]
  },
  {
    role: "CTO | Co-Founder",
    company: "Refer Me",
    period: "2022 - PRESENT",
    description: [
      "Designed and built the entire UI/UX for Refer Me, which has served over 100,000 registered users and over 1m experiences.",
      "Built several AI tools such as AI resume reviewer, AI resume builder, AI mock interviews, AI matching and ranking.",
      "Implemented SSR and SEO to rank us in the top 100 websites related to jobs in the USA.",
      "Implemented authentication, file upload to S3, profile state management, analytics, data pipelines, and complex user flows."
    ],
    technologies: [
      "AWS S3", "SQL", "PostgreSQL", "React", "Next.js", "Node.js", "Python", "Vercel", "OpenAI GPT-3 API", "OpenAI GPT-4 API", 
      "SEO", "Klaviyo", "JSON", "JSON API", "AWS", "Contentful", "Headless CMS", "Chakra UI"
    ]
  },
  {
    role: "Principle Software Engineer",
    company: "Pidwin",
    period: "2022 - 2023",
    description: [
      "Built, managed, and scaled a blockchain-based payment system processing millions of dollars.",
      "Led the re-architecture of a large static React application to a scalable server-side rendered Next.js app.",
      "Created test suite infrastructure and automation to increase code coverage.",
      "Implemented data pipelines to surface data in Mixpanel for non-technical teams."
    ],
    technologies: [
      "Web3", "React", "Next.js", "MongoDB", "AWS S3", "Node.js", "REST", "Docker", "SCSS", "SEO", "JSON", "JSON API", "AWS", "Headless CMS"
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Yuga Labs",
    period: "2022 - 2023",
    description: [
      "Architected and launched a Twitter bot to detect fraudulent accounts impersonating the company.",
      "Rearchitected the back end from key-value storage systems to AWS DynamoDB with an S3 layer.",
      "Built Web3 integrations for smart contracts."
    ],
    technologies: [
      "Node.js", "PostgreSQL", "AWS DynamoDB", "AWS", "React", "TypeScript", "Ethereum", "Web3.js", "Material UI", "Docker", 
      "Heroku", "Jest", "Cypress", "OAuth 2", "Redux Toolkit", "SEO", "JSON", "JSON API", "Contentful", "Headless CMS"
    ]
  },
  {
    role: "Senior Full-stack Developer",
    company: "Snapchat",
    period: "2021 - 2022",
    description: [
      "Led the architecture and design for Snapchat's Audience Insights tool.",
      "Led design meetings, sprint planning, and development steps for high-profile applications.",
      "Adjusted pixel mapping in Shopify to better track user interactions from Snapchat.",
      "Created a component design and versioning system used across teams."
    ],
    technologies: [
      "JavaScript", "Redux", "React", "GraphQL", "GCP", "Node.js", "Next.js", "Cypress", "TypeScript", "Jira", "REST", 
      "Figma", "SSR", "Jest", "CI/CD", "Python", "Redux-Saga", "Git", "Material UI"
    ]
  },
  {
    role: "Senior Full-stack Developer",
    company: "Adobe",
    period: "2019 - 2021",
    description: [
      "Migrated old ES5 PHP stacks to modern frameworks such as Node.js, React, and Redux.",
      "Integrated API reporting and health monitoring for new services.",
      "Created microservices for Adobe, such as a standalone search service for stock assets.",
      "Led various product architectures used by millions."
    ],
    technologies: [
      "PHP", "Node.js", "JavaScript", "React", "Redux", "GraphQL", "Figma", "Jira", "REST", "TypeScript", "SSR", 
      "Jest", "Docker", "CI/CD", "Python", "Redux-Saga", "AWS S3", "JSON", "Contentful"
    ]
  },
  {
    role: "Full-stack Software Developer",
    company: "Tesla",
    period: "2018 - 2019",
    description: [
      "Migrated the internal service application to a custom in-house stack using Node.js, React, and Redux.",
      "Built a company-wide Node.js template for teams to spin up new apps with Tesla OAuth.",
      "Created dashboards for service center metrics reporting."
    ],
    technologies: [
      "C#", ".NET", "JavaScript", "Node.js", "React", "Redux", "Express.js", "OAuth 2", "Docker", "REST", "Jira", 
      "ESLint", "Python", "CI/CD", "TDD", "AWS S3", "JSON", "React Router"
    ]
  },
  {
    role: "Software Engineer Instructor",
    company: "Codecademy",
    period: "2016 - 2019",
    description: [
      "Led classes on various languages and stack topics.",
      "Graded and taught students to write scalable code.",
      "Worked with hundreds of students to teach different programming topics."
    ],
    technologies: [
      "PHP", "Python", "SQL", "MongoDB", "React", "Redux", "JavaScript", "Jira", "ESLint", "HTML", "CSS", "TDD", "Git", "JSON API"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "T-Mobile",
    period: "2017 - 2018",
    description: [
      "Built an automated full-stack portal for job assignment at NOC.",
      "Created a team portal for showcasing projects to the larger company.",
      "Led the design and development of various features."
    ],
    technologies: [
      "Node.js", "Express.js", "React", "MongoDB", "JavaScript", "HTML", "CSS", "NoSQL", "Jira", "REST", "Git", "UI Components"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Starbucks",
    period: "2016 - 2017",
    description: [
      "Built a live KPI dashboard that displayed changes in several metrics to executives.",
      "Created a live sentiment dashboard that averaged public sentiment about Starbucks using NLP.",
      "Designed and developed full-stack projects for internal teams."
    ],
    technologies: [
      "MongoDB", "Express.js", "Node.js", "React", "HTML", "CSS", "JavaScript", "Jira", "REST", "Python", "Git", "JSON API"
    ]
  }
];



const professionalDetails = [
  {
    icon: <CiClock2 className="w-16 h-16 text-blue-500 font-weight"  />,
    title: "Availability",
    content: "Part-time"
  },
  {
    icon: <CiMonitor className="w-16 h-16 text-blue-500 font-weight"  />,
    title: "Preferred Environment",
    content: "Node.js, React, Redux, GraphQL, Front-end Development, Full-stack, TypeScript, CI/CD Pipelines, Testing, NoSQL"
  },
  {
    icon: <CiStar className="w-16 h-16 text-blue-500 font-weight"  />,
    title: "The most amazing...",
    content: "project I've done was joining a pre-seed startup, architecting their application, and bringing their idea from zero to one, ultimately going for funding."
  }
];

const expertiseData = [
  {
    company: "Atlassian",
    technologies: [
      "React", 
      "GraphQL", 
      "TypeScript", 
      "Figma", 
      "Python 3", 
      "SQL", 
      "JSON", 
      "JSON API"
    ]
  },
  {
    company: "Refer Me",
    technologies: [
      "Amazon S3 (AWS S3)", 
      "SQL", 
      "PostgreSQL", 
      "React", 
      "Next.js", 
      "Node.js", 
      "Python", 
      "Vercel"
    ]
  },
  {
    company: "Pidwin",
    technologies: [
      "Web3", 
      "Web3.js", 
      "Blockchain", 
      "React", 
      "Next.js", 
      "Server-side Rendering (SSR)", 
      "MongoDB"
    ]
  }
];

const techSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Django",
  "SQL",
  "GraphQL",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Docker",
  "Kubernetes",
  "Git",
  "REST APIs",
  "MongoDB",
  "AWS",
  "Jenkins",
  "Tailwind CSS",
  "React Native",
  "Machine Learning",
  "Java",
  "Spring Boot",
  "Azure",
  "PostgreSQL",
  "Redis",
  "Flutter",
  "PHP",
  "Laravel",
  "Ruby on Rails",
  "Next.js",
  "Vue.js",
  "Sass",
  "Webpack",
  "Firebase",
  "ElasticSearch",
  "Go",
  "TensorFlow",
  "Redux",
  "Bash",
  "Swift",
  "Objective-C"
];


const techExperiance = [
  "Front-end Development - 6 years",
  "Back-end Development - 5 years",
  "React.js - 4 years",
  "Node.js - 5 years",
  "TypeScript - 3 years",
  "GraphQL - 3 years",
  "Python - 4 years",
  "Django - 3 years",
  "MongoDB - 4 years",
  "SQL - 5 years",
  "Docker - 2 years",
  "Kubernetes - 2 years",
  "AWS - 4 years",
  "Tailwind CSS - 3 years",
  "CI/CD Pipelines - 4 years"
];


"use client";

import Image from "next/image";
import Navbar from "./component/navBar";
import Minion from "./assets/minion.jpg";
import { MdVerified } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import Accordion from "./component/Accordion";
import { GoDotFill } from "react-icons/go";
import TopTal from "./component/TopTal";

export default function Home() {
  return (
    <div className="text-black">
      <Navbar />

      <div className="flex flex-row pt-16 gap-4 ">
        <div className="flex-2 pl-16 p-4 flex flex-col gap-4">
          <Image
            src={Minion}
            width={400}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex border-l-4 h-16 border-green-400 rounded justify-between pl-4 items-center ">
            <h1>
              Gianluca is <span className="text-green-500">available</span> for
              hire
            </h1>

            <button className="bg-green-500 p-2 rounded text-sm text-white">
              Hire a developer
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-700 text-2xl">Gianluca Vaccarini</h1>

            <div className="flex">
              <MdVerified className="text-green-700" />
              <h3 className="text-green-700 text-sm">Gianluca Vaccarini</h3>
            </div>

            <div>
              <div className="flex items-center gap-4 p-2">
                <IoCodeSlashOutline className="w-6 h-6" />
                Full-stack Developer
              </div>

              <div className="flex items-center gap-4 p-2">
                <CiLocationOn className="w-6 h-6" />
                Seattle, WA, United States
              </div>

              <div className="flex items-center gap-4 p-2">
                <GoCalendar className="w-6 h-6" />
                Toptal member since January 28, 2022
              </div>
            </div>

            {/* expertise */}

            <div className="flex flex-col px-4 gap-2">
              <h1 className="text-sm">Expertise</h1>

              <div className="flex flex-row flex-wrap gap-1">
                {techSkills.map((item, index) => (
                  <div
                    className="border text-blue-700 border-blue-700 p-1 rounded-2xl text-[12px]"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}

            <div className="flex flex-col px-4 gap-2">
              <h1 className="text-sm">Bio</h1>

              <p>
                Gianluca is a highly versatile full-stack software engineer. He
                has helped many companies take an idea and turn it into a
                product that serves thousands to millions of users. He's built
                the software that powers Tesla's service centers for scheduling
                from scratch and worked at big tech companies, such as
                Atlassian, Adobe, Snapchat, Starbucks, and T-Mobile. Known for
                building fast and exceptionally well, Gianluca can work on
                either end of the stack.
              </p>
            </div>
          </div>
          <hr className="w-full my-4" />

          <div className="flex flex-row my-8">
            <div className="flex flex-col px-4 gap-4">
              <h1 className="text-sm">Expertise</h1>

              <div className="flex flex-1 flex-row flex-wrap gap-1">
                {[1, 2, 3].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-blue-700 text-sm">{"Hello"}</h3>

                    <p>
                      React, GraphQL, TypeScript, Figma, Python 3, SQL, JSON,
                      JSON API
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-2 flex-col px-4 gap-4 ">
              <h1 className="text-sm">Expertise</h1>

              <div className="flex flex-row flex-wrap gap-1">
                {techSkills.map((item, index) => (
                  <div
                    className="border text-blue-700 border-blue-700 p-1 rounded-2xl text-[12px]"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-row flex gap-4 justify-around ">
            {[1, 2, 3].map(() => (
              <div className="flex gap-4 w-[30%] h-64 flex-col  bg-gray-100 p-4">
                <div className="">
                  <CiClock2 className="w-16 h-16 text-blue-500 font-weight" />
                </div>
                <h3>Availability</h3>
                <p>
                  Node.js, React, Redux, GraphQL, Front-end Development,
                  Full-stack, TypeScript, CI/CD Pipelines, Testing, NoSQL
                </p>
              </div>
            ))}
          </div>

          <div>
            <Accordion title="Work Experience">
              {[1, 2, 4, 5].map(() => (
                <div className="flex">
                  <div className="w-4 pt-2 flex flex-col items-center">
                    <GoDotFill className="text-sm text-blue-900" />
                    <div className="h-full border-l-2 border-dashed border-gray-400"></div>
                  </div>
                  <div className="ml-4 p-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-red-400">
                          Senior Software Engineer
                        </h3>
                        <span className="text-gray-500">Atlassian</span>
                      </div>

                      <span>2024 - PRESENT</span>
                    </div>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                      <li>
                        Implemented several features across Atlassian core
                        products.
                      </li>
                      <li>
                        Led and oversaw the high-level architecture of multiple
                        initiatives.
                      </li>
                      <li>
                        Implemented various performance-related initiatives to
                        improve customer experience.
                      </li>
                      <li>
                        Worked with cross-functional teams to enhance product
                        quality.
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

            </Accordion>

            <Accordion title="Experience">

              {[1, 2, 3, 4].map(() => (
                <div className="flex flex-col gap-2 m-2">
                  {/* Left side - Dot and vertical dashed line */}
                  <h3 className="text-gray-400 text-lg font-semibold">Refer me</h3>
                  <a className="text-blue-500">http://www.refer.me</a>

                  <p>Refer Me allows job seekers to get referrals from people in the industry. Companies who our referrers work for get top talent through their hiring pipelines via refer.me. The platform also supports resume reviews, career coaching, and mock interviews.</p>
                </div>
              ))}

            </Accordion>

            <Accordion title="Education">
              <div className="flex w-full flex-col">
                {/* Left side - Dot and vertical dashed line */}
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold">
                      Bachelor's Degree in Computer Science
                    </h3>
                  </div>

                  <span>2014 - 2018</span>
                </div>

                <span>
                  University of Washington - Seattle, USA
                </span>

              </div>
            </Accordion>


            <Accordion title="Skills">

              {[1, 2, 3, 4].map(() => (
                <div className="flex w-full flex-col gap-2 my-4">
                  <h3 className="text-lg font-bold">
                    Paradigms
                  </h3>


                  <p>
                    REST, Testing, Test-driven Development (TDD), Unit Testing, E2E Testing, Search Engine Optimization (SEO), UX Design, UI Design                </p>

                </div>
              ))}

            </Accordion>


          </div>



        </div>


      </div>


      <div className="flex items-center justify-center flex-col">

        <span className="text-gray-600 text-sm">Collaboration That Works
        </span>
        <h1 className="text-3xl">How to Work with Toptal
        </h1>

        <span className="text-gray-600 text-sm">Toptal matches you directly with global industry experts from our network in hours—not weeks or months.</span>

        <TopTal />
      </div>

      <div className="flex w-full h-24 items-center justify-center bg-gray-100">
        Top talent is in high demand.


        <button className="bg-green-500 p-2 rounded text-sm text-white">
          Hire a developer
        </button>


      </div>


      <div className="flex bg-blue-900 h-96 p-16 justify-center gap-6">

        <div className="flex-2 flex flex-col ">
          <h3>Hire Talent
          </h3>
          <hr/>
          <ul>
            <li>Hire Freelance Developers
            </li>

            <li>Hire Freelance Developers
            </li>

            <li>Hire Freelance Developers
            </li>
            
            </ul>

          </div>

          <div className="flex-1">
          <h3>Hire Talent
          </h3>
          <hr/>


          <ul className="flex flex-row w-full  flex wrap gap-4">


          {[1,2,3,4].map(()=>(
             <li>Hire Freelance Developers
             </li>
          ))}
           
            
            </ul>

          </div>

          <div className="flex-2">
          <h3>Hire Talent
          </h3>
          <hr/>
          <ul>
            <li>Hire Freelance Developers
            </li>

            <li>Hire Freelance Developers
            </li>

            <li>Hire Freelance Developers
            </li>
            
            </ul>

          </div>

      </div>
    </div>
  );
}

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
  "Objective-C",
];

import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiJqueryLogo,
  DiBootstrap,
  DiNodejs,
  DiNpm,
  DiMysql,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import {
  SiJest,
  SiHeroku,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Technologies() {
  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="tech-class">
            <h3>Front-End</h3>
            <ul className="tech-icons">
              <li>
                <DiHtml5 className="html" title="HTML" />
              </li>
              <li>
                <DiCss3 className="css" title="CSS" />
              </li>
              <li>
                <DiJsBadge className="javascript" title="JavaScript" />
              </li>
            </ul>
            <ul className="tech-icons">
              <li>
                <DiReact className="react" title="React" />
              </li>
              <li>
                <DiJqueryLogo className="jquery" title="jQuery" />
              </li>
              <li>
                <DiBootstrap className="bootstrap" title="Bootstrap" />
              </li>
              <li>
                <SiTailwindcss className="tailwind" title="Tailwind" />
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tech-class">
            <h3>Back-end</h3>
            <ul className="tech-icons">
              <li>
                <DiNodejs className="nodejs" title="Node.js" />
              </li>
              <li>
                <DiNpm className="npm" title="npm" />
              </li>
              <li>
                <DiMysql className="mysql" title="mySQL" />
              </li>
            </ul>
            <ul className="tech-icons">
              <li>
                <DiMongodb className="mongodb" title="MongoDB" />
              </li>
              <li>
                <GrGraphQl className="graphql" title="GraphQL" />
              </li>{" "}
              <li>
                <SiFirebase className="firebase" title="Firebase" />
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tech-class">
            <h3>Developer Tools</h3>
            <ul className="tech-icons">
              <li>
                <DiGit className="git" title="Git" />
              </li>
              <li>
                <SiJest className="jest" title="Jest" />
              </li>
            </ul>
            <ul className="tech-icons">
              <li>
                <SiHeroku className="heroku" title="Heroku" />
              </li>
              <li>
                <SiPostman className="postman" title="Postman" />
              </li>
              <li>
                <SiNextdotjs className="next-js" title="Next.js" />
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

import {
  TechnologyBtnWrapper,
  TechnologyBtnLink,
} from "./TechnologyBtnElements";

const TechnologyBtn = () => {
  return (
    <TechnologyBtnWrapper>
    <TechnologyBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://www.mongodb.com/"
    >
      <SiMongodb />
    </TechnologyBtnLink>
    <TechnologyBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://expressjs.com/"
    >
      <SiExpress />
    </TechnologyBtnLink>
    <TechnologyBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://reactjs.org/"
    >
      <SiReact />
    </TechnologyBtnLink>

    <TechnologyBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://nodejs.org/"
    >
      <SiNodedotjs />
    </TechnologyBtnLink>

  </TechnologyBtnWrapper>
  );
};

export default TechnologyBtn;



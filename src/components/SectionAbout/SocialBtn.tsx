import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

import {
    SocialBtnLink,
    SocialBtnWrapper
} from "./SocialBtnElements";

const SocialBtn = () => {
  return (
    <SocialBtnWrapper>
    <SocialBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://github.com/CaioLemec"
    >
      <BsGithub />
    </SocialBtnLink>
    <SocialBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://twitter.com/CaioLemec"
    >
      <BsTwitter />
    </SocialBtnLink>
    <SocialBtnLink
      rel="noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/caiolemec/"
    >
      <BsLinkedin />
    </SocialBtnLink>
  </SocialBtnWrapper>
  );
};

export default SocialBtn;

import { SocialBtnLink, SocialBtnWrapper } from "./SocialBtnElements";

import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

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
      <SocialBtnLink
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/caiolemec/"
      >
        <BsFacebook />
      </SocialBtnLink>
      <SocialBtnLink
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/caiolemec/"
      >
        <BsInstagram />
      </SocialBtnLink>
    </SocialBtnWrapper>
  );
};

export default SocialBtn;

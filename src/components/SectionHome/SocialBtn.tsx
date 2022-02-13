import { BsGithub, BsTwitter, BsLinkedin, BsFacebook, BsSpotify } from "react-icons/bs";

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
      href="https://open.spotify.com/user/caio.lemec"
    >
      <BsSpotify />
    </SocialBtnLink>

  </SocialBtnWrapper>
  );
};

export default SocialBtn;



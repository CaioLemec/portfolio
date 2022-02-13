import my_picture from "../../images/MyPicture.png";
import video_bv from "../../videos/video_bv.mp4";
import video_wv from "../../videos/video_wv.mp4";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import SocialBtn from "./SocialBtn";

import {
  AboutContainer,
  MaxWidthLimitWrapper,
  AboutBg,
  VideoBg,
  DescriptionAboutWrapper,
  DescriptionTitle,
  SubDescriptionTitle,
  MyPictureWrapper,
  MyPictureContainer,
  MyPicture,
} from "./SectionHomeElements";
import { DynamicTxt } from "./DynamicTxt";

const SectionHome = () => {
  const theme = useContext(ThemeContext);
  return (
    <AboutContainer id="home">
      <AboutBg>
        {theme.name === "first" ? (
          <VideoBg autoPlay loop muted src={video_bv} />
        ) : (
          <VideoBg autoPlay loop muted src={video_wv} />
        )}
      </AboutBg>
      <MaxWidthLimitWrapper>
        <DescriptionAboutWrapper>
          <SubDescriptionTitle>Hi,</SubDescriptionTitle>
          <DescriptionTitle>I'm Caio Lemec</DescriptionTitle>
          <SubDescriptionTitle>
            <DynamicTxt />
          </SubDescriptionTitle>
          <SocialBtn />
        </DescriptionAboutWrapper>
        <MyPictureWrapper>
          <MyPictureContainer>
            <MyPicture src={my_picture} />
          </MyPictureContainer>
        </MyPictureWrapper>
      </MaxWidthLimitWrapper>
    </AboutContainer>
  );
};

export default SectionHome;

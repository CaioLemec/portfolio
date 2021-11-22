import my_picture from "../../images/MyPicture.png";
import video_bv from "../../videos/video_bv.mp4";
import video_wv from "../../videos/video_wv.mp4";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

import {
  AboutContainer,
  MaxWidthLimitWrapper,
  AboutBg,
  VideoBg,
  DescriptionAboutWrapper,
  DescriptionTitle,
  DescriptionTxt,
  DownloadResumeWrapper,
  LinkDownloadResume,
  MyPictureWrapper,
  MyPictureContainer,
  MyPicture,
} from "./SectionAboutElements";

const SectionAbout = () => {
  const theme = useContext(ThemeContext);
  return (
    <AboutContainer id="about">
      <AboutBg>
        {theme.name === "first" ? (
          <VideoBg autoPlay loop muted src={video_bv} />
        ) : (
          <VideoBg autoPlay loop muted src={video_wv} />
        )}
      </AboutBg>

      <MaxWidthLimitWrapper>
        <DescriptionAboutWrapper>
          <DescriptionTitle>Caio Lemec</DescriptionTitle>
          <DescriptionTxt>
            I am a passionate self-taught front-end developer. I'm from Brazil,
            living in Rio de Janeiro and currently work as an intern in software
            developer. I started my career in engineering and marketing, but
            found in programming the passion I was looking for to move forward.
          </DescriptionTxt>
          <DownloadResumeWrapper>
            <LinkDownloadResume>
              {" "}
              {/*disponibilizar download*/}
              pt-BR
            </LinkDownloadResume>
            <LinkDownloadResume>
              {" "}
              {/*disponibilizar download*/}
              en-US
            </LinkDownloadResume>
          </DownloadResumeWrapper>
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

export default SectionAbout;

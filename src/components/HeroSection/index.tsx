import video from '../../videos/video.mp4';
import { BsGithub, BsTwitter, BsLinkedin, BsEnvelope } from 'react-icons/bs'

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    LinkBtnSocial,
    HeroDownloadResumeWrapper,
    LinkDownloadResume
} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Caio Lemec</HeroH1>
                <HeroP>
                    I started my career in engineering and marketing,
                    but found in programming the passion I was looking
                    for to move forward.
                </HeroP>
                <HeroBtnWrapper>
                    <LinkBtnSocial rel="noreferrer" target="_blank" href="https://github.com/CaioLemec">
                        <BsGithub />
                    </LinkBtnSocial>
                    <LinkBtnSocial rel="noreferrer" target="_blank" href="https://twitter.com/CaioLemec">
                        <BsTwitter />
                    </LinkBtnSocial>
                    <LinkBtnSocial rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/caiolemec/">
                        <BsLinkedin />
                    </LinkBtnSocial>
                    <LinkBtnSocial rel="noreferrer" target="_blank" href="mailto:caiolemec@gmail.com">
                        <BsEnvelope />
                    </LinkBtnSocial>
                </HeroBtnWrapper>
                <HeroP>
                    Download Resume
                </HeroP>
                <HeroDownloadResumeWrapper> 
                    <LinkDownloadResume>  {/*disponibilizar download*/}
                    pt-BR
                    </LinkDownloadResume>
                    <LinkDownloadResume>  {/*disponibilizar download*/}
                    en-US
                    </LinkDownloadResume>
                </HeroDownloadResumeWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection



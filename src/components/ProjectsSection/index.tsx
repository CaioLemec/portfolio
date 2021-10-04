import React from 'react'
import { Button } from 'react-scroll'

const ProjectsSection = () => {
    return (
        <ProjectContainer id={id}>
            <ProjectWrapper>
                <ProjectRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home"></Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                </ProjectRow>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default ProjectsSection

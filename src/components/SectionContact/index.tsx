import React from "react";

import {
  ContactContainer,
  MaxWidthLimitWrapper,
  ContactContent,
  ContactImgWrapper,
  ContactImg,
  ContactFormWrapper,
  ContactForm,
  ContactInputTitle,
  ContactInput,
  ContactArea,
  ContactSubmitButton
} from "./SectionContactElements";

const SectionContact = () => {
  return (
    <ContactContainer id="contact">
      <MaxWidthLimitWrapper>
        <ContactContent>

          <ContactImgWrapper>
          <ContactImg />
          </ContactImgWrapper>

          <ContactFormWrapper>
          <ContactForm>

            <ContactInputTitle>
              Full Name*
            </ContactInputTitle>
            <ContactInput />

            <ContactInputTitle>
              Email*
            </ContactInputTitle>
            <ContactInput />

            <ContactInputTitle>
              Message*
            </ContactInputTitle>
            <ContactArea />

            <ContactSubmitButton />
            
          </ContactForm>
          </ContactFormWrapper>

        </ContactContent>
      </MaxWidthLimitWrapper>
    </ContactContainer>
  );
};

export default SectionContact;

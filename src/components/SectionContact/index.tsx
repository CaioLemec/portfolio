import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import {
  ContactContainer,
  MaxWidthLimitWrapper,
  ContactContent,
  ContactImgWrapper,
  ContactImg,
  ContactFormWrapper,
  ContactForm,
  ContactInputTitle,
  ErrorText,
  ContactInput,
  ContactArea,
  SubmitInput,
} from "./SectionContactElements";

type FormData = {
  userName: string;
  userEmail: string;
  userMessage: string;
};

const SectionContact = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        e.currentTarget,
        `${process.env.REACT_APP_EMAIL_JS_USER_ID}`
      )
      .then(
        (result) => {
          console.log('Result =', result.text);
        },
        (error) => {
          console.log('Error =', error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <ContactContainer>
      <MaxWidthLimitWrapper>
        <ContactContent>
          <ContactImgWrapper>
            <ContactImg />
          </ContactImgWrapper>

          <ContactFormWrapper>
            <ContactForm onSubmit={sendEmail}>
              <ContactInputTitle>Full Name*</ContactInputTitle>
              <ContactInput
                {...register("userName", {
                  required: "User name is required.",
                  minLength: {
                    value: 4,
                    message:
                      "Please, insert more then 4 character as a user name.",
                  },
                })}
                placeholder="Name"
                name="userName"
              />
              <ErrorText>{errors.userName?.message}</ErrorText>
              <ContactInputTitle>Email*</ContactInputTitle>
              <ContactInput
                {...register("userEmail", {
                  required: "E-mail adress is required.",
                })}
                placeholder="E-mail"
                name="userEmail"
              />
              <ErrorText>{errors.userEmail?.message}</ErrorText>
              <ContactInputTitle>Message*</ContactInputTitle>
              <ContactArea
                {...register("userMessage", {
                  required: "Message is required.",
                })}
                placeholder="Message"
                name="userMessage"
              />
              <ErrorText>{errors.userMessage?.message}</ErrorText>
              <SubmitInput type="submit" />
            </ContactForm>
          </ContactFormWrapper>
        </ContactContent>
      </MaxWidthLimitWrapper>
    </ContactContainer>
  );
};

export default SectionContact;

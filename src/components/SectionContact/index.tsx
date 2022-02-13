import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Footer from "../Footer";

import {
  ContactContainer,
  MaxWidthLimitWrapper,
  ContactContent,
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

const schema = yup
  .object({
    userName: yup.string().required("Full name is a required field."),
    userEmail: yup
      .string()
      .email("Must be a valid email.")
      .required("Email is a required field."),
    userMessage: yup.string().required("Please insert a message."),
  })
  .required();

const SectionContact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send(
        `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        data,
        `${process.env.REACT_APP_EMAIL_JS_USER_ID}`
      )
      .then(
        (result) => {
          console.log("Result =", result.text);
        },
        (error) => {
          console.log("Error =", error.text);
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <MaxWidthLimitWrapper>
        <ContactContent>
          <ContactFormWrapper>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <ContactInputTitle>Full Name</ContactInputTitle>
              <ContactInput
                {...register("userName")}
                placeholder="Name"
                name="userName"
              />
              {errors.userName && (
                <ErrorText>
                  {errors.userName?.message}
                  <span>*</span>
                </ErrorText>
              )}
              <ContactInputTitle>Email</ContactInputTitle>
              <ContactInput
                {...register("userEmail", {
                  required: "E-mail adress is required.",
                })}
                placeholder="E-mail"
                name="userEmail"
              />
              {errors.userEmail && (
                <ErrorText>
                  {errors.userEmail?.message}
                  <span>*</span>
                </ErrorText>
              )}
              <ContactInputTitle>Message</ContactInputTitle>
              <ContactArea
                {...register("userMessage")}
                placeholder="Message"
                name="userMessage"
              />
              {errors.userMessage && (
                <ErrorText>
                  {errors.userMessage?.message}
                  <span>*</span>
                </ErrorText>
              )}
              {errors.userMessage || errors.userEmail || errors.userName ? (
                <SubmitInput disabled type="submit" />
              ) : (
                <SubmitInput type="submit" />
              )}
            </ContactForm>
          </ContactFormWrapper>
        </ContactContent>
      </MaxWidthLimitWrapper>
      <Footer />
    </ContactContainer>
  );
};

export default SectionContact;

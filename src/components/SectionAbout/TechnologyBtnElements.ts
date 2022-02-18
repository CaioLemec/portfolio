import styled from "styled-components";

export const TechnologyBtnWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.fontColor};
  align-items: center;
`;

export const TechnologyBtnLink = styled.a`
  color: ${(props) => props.theme.colors.fontColor};
  margin-right: 1.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.highLight};
  }

  @media screen and (max-width: 500px) {
    margin-right: 1rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 375px) {
    margin-right: 0.8rem;
    font-size: 1.5rem;
  }
`;

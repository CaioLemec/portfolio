import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey; 
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.highLight};
  height: 1rem;
  border-radius: 20px;      
  border: 5px solid ${(props) =>
    props.theme.colors.background};
}

  body {
    background: ${(props) => props.theme.colors.background};
  }

`;

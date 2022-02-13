import styled from "styled-components";

export const AboutMapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 60%;
  background-color: purple;

  .leaflet-container {
  width: 100%;
  height: 100%;
  }

  .leaflet-tile-pane {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

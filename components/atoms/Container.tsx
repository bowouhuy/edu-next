import styled from "styled-components";
import { media } from "../../utils/media";

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1320px) {
    padding: 0 2rem;
    width: -webkit-fill-available;
  }
  ${media("<=phone")} {
    padding: 0 1.5rem;
  }
`;

export default Container;

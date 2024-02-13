import styled from "styled-components";
import { media } from "../../utils/media";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  ${media(">=largeDesktop")} {
    max-width: 1320px;
  }

  ${media("<=desktop", "<largeDesktop")} {
    max-width: 1280px;
  }
  
  ${media(">=tablet", "<desktop")} {
    max-width: 960px;
  }

  ${media(">=phone", "<tablet")} {
    max-width: 700px;
  }

  ${media(">=smallPhone", "<phone")} {
    max-width: 540px;
  }
`;

export default Container;

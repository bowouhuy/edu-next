import styled from "styled-components";
import { media } from "../../utils/media";

interface IBasicSection {
  themes?: string;
}

const BasicSection = styled.section<IBasicSection>`
  overflow: hidden;
  background-color: transparent;
  ${(props) =>
    (props?.themes == "black" &&
      "color:rgb(var(--textSecondary));background-color:rgb(var(--black))")
  };
  ${(props) =>
    (props?.themes == "gray" &&
      "background-color: rgb(var(--grayBackground))")
  };
  ${(props) =>
    (props?.themes == "layerTop" &&
      "background-color: rgb(var(--graySection))")
  };
  padding: 75px 0px;

  ${media("<=phone")} {
    padding: 50px 0px;
  }
`;

export default BasicSection;

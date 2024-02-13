import styled from "styled-components";

interface TitleColorProps {
  fontSize?: number;
}

const TitleColor = styled.h1<TitleColorProps>`
    font-weight:700;
    text-transform: capitalize;
    color: #0074B2;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '40px')};
    line-height: 1.3;
    margin: 0;  
` 

export default TitleColor;
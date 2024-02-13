import styled from 'styled-components';

interface ArrRight {
  color?: string
}

const ArrowRight = styled.svg`
  display: flex;
  transition: transform 0.6s ease-in-out;
  text-decoration: none;
  width: 58px;
  &:hover {
    svg {
      transform: translateX(8px);    
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export default function Arrow ({ color} : ArrRight) {
  return (
    <>
      <ArrowRight width="58" height="7" viewBox="0 0 58 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58 3.5L53 0.613249V6.38675L58 3.5ZM0 4H53.5V3H0V4Z" fill={color ? color : "#0074B2"}/>
        </ArrowRight>
    </>
  );
};
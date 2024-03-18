import { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = PropsWithChildren<{
  backgroundcolor?: string;
  padding?: number;
  href: string;
  color?: string;
  bordercolor?: string;
  onClick?: void;
}>;

export default function Button({
  href,
  children,
  color,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
      <Anchor
        href={href}
        color={color}
        onClick={onClick}
      >
        {children}
      </Anchor>
  );
}

const Anchor = styled.a<ButtonProps>`
  border: 1px solid var(--primary);
  text-decoration: none;
  text-align: center;
  padding: 20px 30px;         
  background: white;
  border-radius: 10px;
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : '#0074B2')};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: 700;     
  letter-spacing: 0.1em;
  display: inline-block;      
  width:100%;    
  margin-top: 10px;
  span {
      margin-left: 2rem;
  }
  &:hover {
      background: var(--primary);
      transition: all 0.3s ease-in-out;
      border: 1px solid var(--primary);
      color: white;
  }
  &:first-child {
      background: var(--primary);
      color: white;
      &:hover {
          background: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
      }
  } 
`;

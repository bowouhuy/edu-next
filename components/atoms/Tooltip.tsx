import React from 'react';
import styled from 'styled-components';


interface TooltipProps {
    text: string;
    children: React.ReactNode;
}
  
const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <TooltipContainer>
      {children}
      <Tooltips>
        {text}
      </Tooltips>
    </TooltipContainer>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
    position: relative;
    display: flex;
    width: 19px;
    height: 19px;
    border-radius:50px;
    background: #EFEFEF;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    cursor:pointer;       
    &:hover {
        div {
            visibility: visible;
        }
    }
`
const Tooltips = styled.div`
  visibility: hidden;
  background-color: white;
  color: #18181880;
  box-shadow: 0 0 20px 4px #00000010;
  border-radius: 15px;
  line-height: 1.5; 
  padding: 15px;
  position: absolute;
  font-size: 10px;
  text-transform: none;
  font-weight: 400;
  width: 180px;
  z-index: 1;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  white-space: break-spaces;
  &:after {
      content: "";
      width: 0; 
      height: 0; 
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 16px solid white;
      position: absolute;
      bottom: -15px;
      left: 96.5px;
  }
  
`




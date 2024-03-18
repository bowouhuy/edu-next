import styled from "styled-components";
import { media } from "@/utils/media";

const NavItemWrapper = styled.li`
  font-size: 1.3rem;
  // text-transform: uppercase;
  line-height: 2;
  position: relative;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  ${media('<desktop')} {
    align-items:start;
  }
  &:before { 
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    left: 0;
    background-color: var(--primary);
    bottom: 0;
    margin-bottom: -33px;
    display: none;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    position: relative;
    color: rgb(var(--navText));
    text-decoration: none;
    font-weight: 400;
    margin: 0;
    font-size: 14px;
    font-family: '__Poppins_ad20f7';
    line-height: normal;
    transition: all 0.4 ease-in-out;
    &:hover {
      color: #0074B2;
      ${media('<desktop')} {
        color: white;
      }
    }
  }
  
  &:hover {
    ul {
      display:flex;
      text-transform: unset;
    }
    button {
      span {
        border-top: 7px solid #0074B2;
        transition: 0.40s;
        -webkit-transition: 0.40s;
        -moz-transition: 0.40s;
        -ms-transition: 0.40s;
        -o-transition: 0.40s;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      ${media('<desktop')} {
        span {
          border-top: 7px solid white;
        }
      }
    }
  }
  .active {
    &:before { 
      content: '';
      width: 100%;
      height: 7px;
      position: absolute;
      left: 0;
      background-color: var(--primary);
      bottom: 0;
      margin-bottom: -36px;
      display: inline-block;
      z-index: 997;
      ${media('<desktop')} {
        display: none;
      }
    }
    span {
      border-top: 7px solid var(--primary);     
        ${media('<desktop')} {
          border-top: 7px solid white;
        }
    }
  }
`;

export default NavItemWrapper;
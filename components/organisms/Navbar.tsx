'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';
import Logo from "../molecules/Navbar/Logo";
import VisitWebsite from "../molecules/Navbar/VisitWebsite";
import styled, { css } from 'styled-components';
import Container from "../atoms/Container";
import MenuItem from '../molecules/Navbar/MenuItem';
import { media } from '@/utils/media';
import LogOut from '../molecules/Navbar/LogOut';
import {isAuthenticated} from '@/utils/auth';


export default function Navbar() {
  const menu_Items = [
    { title: 'DASHBOARD', href: '/dashboard/profile/', icon: '',
      submenu: [
        { title: 'My Profile', href: '/dashboard/profile', icon: '' },
        { title: 'Balance History', href: '/dashboard/history', icon: '' },
        { title: 'Incentive Table', href: '/dashboard/incentive', icon: '' },
        { title: 'How To Claim Your Incentive', href: '/dashboard/faq', icon: '' },
      ],
    },
    { title: 'SUBMIT REFERRAL', href: '/referral', icon: '' },
    { title: 'STUDENT LIST', href: '/student', icon: '' },
    { title: 'CONTACT', href: '#', icon: '',
      submenu: [
        { title: ' +62 821 3333 6363', href: 'https://wa.me/+6282133336363', icon: '/images/WaIcon.svg' },
        { title: 'partnersupport@myeducationrepublic.com', href: 'mailto:partnersupport@myeducationrepublic.com', icon: '/images/Envelope.svg' },
      ], 
    },
  ];

  // For Humberger Menu
  const [showNavigation, setShowNavigation] = useState(false);
  const [isAuthenticatedUser, setIsAuthenticated] = useState(false);

  useEffect(() => {
      // Check for authentication on the client side
      setIsAuthenticated(isAuthenticated());
  }, []);

  function handleNav() {
    setShowNavigation(!showNavigation);
  } 
  const handleCloseNav = () => {
    setShowNavigation(false);
  };

    return (
        <HeaderContainer>
            <Content>
                <HeaderWrapper>
                    <Logo/>
                    <NavMenu>
                      { isAuthenticatedUser ?
                      <>
                        <NavItemList>
                          {menu_Items.map((item,index) =>(
                            <MenuItem item={item} key={index} depth={1} isInitiallyOpen={false} handleCloseNav={handleCloseNav} />
                          ))}
                        </NavItemList>
                      </>
                      : null }
                      <VisitWebsite/>
                      { isAuthenticatedUser ? <LogOut/>: null }
                    </NavMenu>
                    { isAuthenticatedUser ?
                      <HumbergerBtn id="humbergerBtn" onClick={handleNav} className={showNavigation ? "showNav" : ""}>
                          <span></span>
                          <span></span>
                          <span></span>
                      </HumbergerBtn>
                    : null }
                </HeaderWrapper> 
                {/* Mobile */}
                <OffCanvas className={showNavigation ? "showNav" : ""}>
                    <NavItemList>
                        {menu_Items.map((item,index) =>(
                          <MenuItem item={item} key={index} depth={1} isInitiallyOpen={false} handleCloseNav={handleCloseNav} />
                        ))}
                    </NavItemList>
                  <VisitWebsite/>
                  <LogOut/>
                </OffCanvas>
            </Content>
        </HeaderContainer>                              
    )
};


const NavItemList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 25px;
    --menu-height: 0px;
    .active {
      &:before {
          display: inline-block;
      }
      a {
          color: var(--primary);
      }
    }
    ${media('<desktop')} {
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      button, a {
        color:white;
        margin: 0;
      }
      button {
        span {
          border-top: 7px solid white;
        }
      }
      .active {
        &:before {
          height: 1px;
          background: white;
          top: 0;
          // margin-top:30px;
          display: none;
        }
        a {
            color: white;
        }
        span {
          color: white;
          border-top: 7px solid white;
        }
      }
    }
`;

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  a {
    letter-spacing: .08rem;
  }
  .showNav {
    opacity: 1;
    visibility: visible;
  }
`;

const Content = styled(Container)`
  ${media("<=phone")} {
    padding: 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  flex-direction: row;
  ${media("<=tablet")} {
    display: none;
  }
  ${media('<desktop')} {
    display: none;
  }
`;
const OffCanvas = styled.div`
  display:none;
  ${media('<desktop')} {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 0;
    top: 0px;
    background-color: var(--primary);
    width: 100%;
    color: white;
    padding: 2rem;
    padding-top: 100px;
    align-items: flex-start;
    left: 0;
    right: 0;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    transition: all .6s ease-in-out;
  }
  ${media('<desktop')} {
    .globeMobile {
      display: flex!important;
    }
    .globeDekstop {
      display: none!important;
    }
  }
`;
const HeaderWrapper = styled.div`
    padding: 0 1rem;
    align-items: center;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
    border-radius:0px 0px 20px 20px;
    background:white;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    z-index: 1;
    img {
      object-fit: contain;
      object-position: left;
    }
    ${media("<=tablet")} {
      img {
        height: 80px;
      }
    }
    ${media("<=phone")} {
      img {
        height: 60px;
      }
    }
`;

const HumbergerBtn = styled.button`
    background-color: transparent;
    width: 50px;
    height: 50px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border: none;
    &.showNav {
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translateY(50%) translateX(15%);
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-50%) translateX(15%);
        }
      }
    }
    span {
        transition: all .4s ease-in-out; 
        width:100%;
        height: 2px;
        background: var(--primary);
        display: block;
    }
    ${media('<desktop')} {
        display: flex;
    }
    ${media("<=phone")} {
      width: 40px;
      height: 40px;
      &.showNav {
        span {
          &:nth-child(1) {
        transform: rotate(45deg) translateY(50%) translateX(20%);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translateY(-50%) translateX(20%);
      }
        }
      }
    }
`;

const LogoutBtn = styled.button`
    background-color: transparent;

`
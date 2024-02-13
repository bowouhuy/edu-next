'use client'
import React from 'react';
import Logo from "../molecules/navbar/Logo";
import VisitWebsite from "../molecules/navbar/VisitWebsite";
import styled, { css } from 'styled-components';
import Container from "../atoms/Container";
import MenuItem from '../molecules/navbar/MenuItem';
import { media } from '@/utils/media';


export default function Navbar() {
  const menu_Items = [
    { title: 'Dashboard', href: '/dashboard/profile/', icon: '',
      submenu: [
        { title: 'My Profile', href: '/dashboard/profile', icon: '' },
        { title: 'Balance History', href: '/dashboard/history', icon: '' },
        { title: 'Incentive Table', href: '/dashboard/incentive', icon: '' },
        { title: 'How To Claim Your Incentive', href: '/dashboard/faq', icon: '' },
      ],
    },
    { title: 'Submit Referral', href: '/submit', icon: '' },
    { title: 'Student List', href: '/student', icon: '' },
    { title: 'Contact Us', href: '/#', icon: '',
      submenu: [
        { title: ' +62 821 3333 6363', href: '/about', icon: '/images/WaIcon.svg' },
        { title: 'info@myeducationrepublic.com', href: '/service', icon: '/images/Envelope.svg' },
      ], 
    },
  ];
  
    return (
        <NavbarContainer>
            <Content>
                <RowNav>
                    <Logo/>
                    <NavItemList>
                      {menu_Items.map((item,index) =>(
                        <MenuItem item={item} key={index} depth={1} isInitiallyOpen={false} />
                      ))}
                    </NavItemList>
                    <VisitWebsite/>
                </RowNav>
            </Content>
        </NavbarContainer>                              
    )
};


const NavItemList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 25px;

    ${media('<desktop')} {
    display: none;
    }
    .active {
      &:before {
          display: inline-block;
      }
      a {
          color: var(--primary);
      }
    }
`;

const NavbarContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};
  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
  border-radius:0px 0px 20px 20px;
  background:white;
`;
const RowNav = styled.div`
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;



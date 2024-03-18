'use client'
import styled, { css } from 'styled-components';
// @ts-ignore
import Container from "@/components/atoms/Container";
import {inter} from '@/utils/font';

export default function Footer() {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    return (
      <FooterWrapper>
        <Container>
          <div>
            <p className={inter.className}>©{currentYear}. Education Republic. All Rights Reserved</p>
          </div>
        </Container>
      </FooterWrapper>
    );
  }
  

const FooterWrapper = styled.footer`
  border-top: 1px solid #00000020;
  padding: 10px 0px 10px 0px;
  background: white;
  color: #00000050;
  p {
    text-align: center;
    font-size: 14px;
    color: var( --navText);
    font-family: '__Inter_469f07';
  }
`;
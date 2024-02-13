import Link from "next/link";
import styled, { css } from 'styled-components';
import Image from "next/image";
import Globe from '../../../public/Images/Globe.png'
import { media } from "@/utils/media";

type TextLinkVisit = { text: string; };

const textVisitWebsite: TextLinkVisit = {
    text: 'Visit Our Website',
  };

  
export default function visitWebsite (){
    return (
        <VisitWebsite>
            <Link href="https://www.myeducationrepublic.com" target="blank">
                <Image src={Globe} width={17} height={17} alt="globe"/>
                <span>{textVisitWebsite.text}</span>
            </Link>
        </VisitWebsite>
    )
};

const VisitWebsite = styled.div`
    a {
        display: flex;
        align-items: center;
        gap: 6px;
        position: relative;
        color: rgb(var(--navText));
        text-decoration: none;
        font-weight: 500;
        margin: 0 .4rem;
        font-size: 14px;
        line-height: normal;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
        &::after {
            content: "";
            height: 3px;
            width: 100%;
            bottom: -7px;
            left: 0;
            position: absolute;
            background-color: #ff6d00;
        }
    }
    ${media('<tablet')} {
        display: none;
    }
`;
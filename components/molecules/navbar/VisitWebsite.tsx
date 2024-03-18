import Link from "next/link";
import styled, { css } from 'styled-components';
import Image from "next/image";
import Globe from '../../../public/Images/Globe.png'
import { media } from "@/utils/media";
import WhiteGlobe from '@/public/Images/whiteglobe.png'

type TextLinkVisit = { text: string; };

const textVisitWebsite: TextLinkVisit = {
    text: 'Visit Our Website',
};

export default function visitWebsite (){
    return (
        <VisitWebsite className="visit-website">
            <Link href="https://www.myeducationrepublic.com" target="blank">
                <Image className="globeDekstop" src={Globe} width={17} height={17} alt="globe"/>
                <Image className="globeMobile" src={WhiteGlobe} width={17} height={17} alt="globe"/>
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
        .globeMobile {
            display:none;
        }
        ${media('<desktop')} {
            margin: 0;
            // .globeDekstop {
            //     display: none;
            // }
        }
        &:hover {
            color: var(--primary);
    }
`;
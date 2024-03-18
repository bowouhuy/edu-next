import Heading from "@/components/atoms/Heading";
import React, { Key } from "react";
import styled from "styled-components";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "next/image";
import Link from "next/link";
import ArrowLong from "@/components/atoms/ArrowLong";
import { media } from "@/utils/media";

interface submitReferallItems{
    title: string;
    bannerImage: string;
    shortDescription: string;
    ctaUrl: string;
    ctaText: string;
}

export default function SubmitReferall(props: { data:any }){
    return (
        <>
            <HeroBanner>
                <ImageRow>
                    <Image src={props.data.bannerImage} alt={"HeroBanner"} width={500} height={500}/>
                </ImageRow>
                <Detail>
                    <Heading>
                        {props.data.title}
                    </Heading>  
                    <Paragraph>{props.data.shortDescription}</Paragraph>
                    <Link className="cta-primary" href={props.data.ctaUrl}>{props.data.ctaText}<ArrowLong/></Link>
                </Detail>
            </HeroBanner>
        </>
    );
}


const HeroBanner = styled.section`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    img {
        width:100%;
        height:100%;
    }
    ${media('<=phone')} {
        flex-direction: column;
        align-items: flex-start;
        img {
            height: auto;
        }
    }
`

const ImageRow = styled.div`
    width: 70%;
    ${media('<=tablet')} {
        width: 60%;
    }
    ${media('<=phone')} {
        width: 100%;
    }
    
`
const Detail = styled.div`
    width: 30%;
    background-color: var(--primary);
    padding: 40px;
    padding-top: 120px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 30px;
    }
    p {
        color: white;
        margin: 0;
    }
    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        align-self: baseline;
        gap: 10px;
        margin-top: 15px;
    }
    svg {
        path {
            fill: white;
        }
    }
    ${media('<=tablet')} {
        width: 60%;
    }
    ${media('<=phone')} {
        width: -webkit-fill-available;
        padding-top: 40px;
        margin-top: -2rem;
    }
    ${media('<=smallPhone')} {
        padding: 25px 20px;
    }
`

import { PropsWithChildren } from "react";
import styled from "styled-components";
import ArrowLong from "./ArrowLong";

type CTAProps = PropsWithChildren<{
    href: string;
    color: string;
}>;

export default function Button({
    href,
    children,
    color,
    }: PropsWithChildren<CTAProps>) {
    return (
        <Cta href={href} color={color}>
            {children}
            <ArrowLong/>
        </Cta>
    );
}

const Cta = styled.a`
    color: ${(props) => (props.color ? props.color : '#0074B2')};
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    letter-spacing: 0.1em;
    text-align: left;
    text-transform: uppercase;
    transition: transform 0.6s ease-in-out;
    &:hover {
        svg {
            transform: translateX(8px);    
            transition: transform 0.3s ease-in-out;
        }
    }
`

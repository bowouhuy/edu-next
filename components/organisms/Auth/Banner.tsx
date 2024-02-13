import Paragraph from "@/components/atoms/Paragraph";
import styled from "styled-components";
import Image from "next/image";
import Form from "./Form";
import testimg from "@/public/test.png"
import TitleColor from "@/components/atoms/TitleColor";
import FlexRow from "@/components/atoms/FlexRow";


export default function BannerLogin(props:{ data: any }){
    return (
        <>
            <FlexRow>
                <LeftRow>
                    <TitleColor fontSize={40} style={{width: 570}}>{props.data.title}</TitleColor>
                    <Paragraph fontSize={18}>
                        {props.data.short_desc}
                    </Paragraph>
                    <Form />
                </LeftRow>
                <RightRow>
                    <Image src={testimg} alt={"Banner Hero"}/>
                </RightRow>
            </FlexRow>
        </>
    )
}

const LeftRow = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`

const RightRow = styled.div`
    width: 40%;
    display: flex;
    img {
        width: 100%;
        height: auto;
    }
`

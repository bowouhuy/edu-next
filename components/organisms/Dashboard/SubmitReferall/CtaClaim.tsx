import CtaPrimary from "@/components/atoms/CtaPrimary";
import FlexRow from "@/components/atoms/FlexRow";
import TitleColor from "@/components/atoms/TitleColor";
import Image from "next/image";
import styled from "styled-components";

export default function CtaLearnMore () {
    return (
        <>
            <CtaClaim>
                <div>
                    <TitleColor fontSize={22}>
                        How To Claim My Incentives?
                    </TitleColor>
                    <CtaPrimary href={"/dashboard/faq"} color={""}>learn more</CtaPrimary>
                </div>
                <Image src={"/Images/QuestionIcon.svg"} alt={"Question"} width={89} height={93}/>
            </CtaClaim>
        </>
    )
}

const CtaClaim = styled.div`
    display: flex;
    flex-direction: row;
    border: 5px solid var(--primary);
    border-radius: 20px;
    padding: 25px;
    margin-top: 40px;
    align-items: center;
    div {
        display: flex;
        flex-direction: column; 
        a {
            margin: 0;
        }
    }
`



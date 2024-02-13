import styled from "styled-components";
import { media } from "@/utils/media";

const ContainerSideBar = styled.div`
    display: flex;
    width: 100%;
    ${media("<=tablet")} {
        flex-direction: column;
        gap: 20px;
    }
`

export default ContainerSideBar;
import styled from "styled-components";



const DashboardMenuItem = styled.li`
    padding: 10px 30px;
    position: relative;
    overflow: hidden;
    &:before { 
        content: '';
        width: 11px;
        height: 100px;
        position: absolute;
        left: 0;
        background-color: var(--primary);
        top: 0;
        display: none;
    }
    a {
        text-decoration: none;
        color: var(--text);  
    }
    :hover {
        color: var(--primary);
    }
`

export default DashboardMenuItem;
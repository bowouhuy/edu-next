import styled from "styled-components";                                                         
import Link from "next/link";
import DashboardMenu from "../atoms/DasboardMenu";
import DashboardMenuItem from "../atoms/DasboardMenuItem";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import { media } from "@/utils/media";


const SideBarLayout: React.FC = () => {
    const dashboard_items = [
        { title: 'My Profile', href: '/dashboard/profile' },
        { title: 'Balance History', href: '/dashboard/history' },
        { title: 'Incentives Table', href: '/dashboard/incentive' },
        { title: 'How To Claim Your Incentives', href: '/dashboard/faq' },
    ];
    const pathname = usePathname()  


    // Check the device width and set a state variable to manage the dropdown.
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <SideBar>
            <SideBarMenu>
                {isMobile ? (
                        // Render a select dropdown on mobile devices
                        <MobileDropdown>
                            <select value={pathname} onChange={(e) => window.location.href = e.target.value}>
                                {dashboard_items.map((item, index) => (
                                    <option key={index} value={item.href}>
                                        {item.title}
                                    </option>
                                ))}
                            </select>
                        </MobileDropdown>
                    ) : (
                        // Render the list on larger screens
                        <DashboardMenu>
                            {dashboard_items.map((item, index) => (
                                <DashboardMenuItem key={index} className={`link ${pathname === item.href ? 'active' : ''}`}>
                                    <Link href={item.href}>{item.title}</Link>
                                </DashboardMenuItem>
                            ))}
                        </DashboardMenu>
                    )}
            </SideBarMenu>
        </SideBar>
    )
}

const SideBar = styled.div`
    width: 26%;
    @media (max-width: 1200px) {
        width: 30%;
    }
    ${media("<=tablet")} {
        width: 100%;
    }
`

const SideBarMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 258px;
    ${media("<=tablet")} {
        position: relative;
        width: 100%;
    }
`

const MobileDropdown = styled.div`
    select {
        padding: 20px 40px 20px 20px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        font-size: 18px;
        font-family: inherit;
        color: rgba(0, 0, 0, 0.60);
        -webkit-appearance: none;
        display: block;
        width: 100%;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%), linear-gradient(to right, transparent, transparent);
        background-position: calc(100% - 20px) calc(1.6em + 2px), calc(100% - 15px) calc(1.6em + 2px),100% 0;
        background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
        background-repeat: no-repeat;
        box-shadow: 0 10px 15px 0 #00000010;
        &:focus-visible  {
            
            outline: var(--primary) auto 1px;
        }
        ${media("<=smallPhone")} {
            font-size: 14px;
            padding: 15px 40px 15px 15px;
            option {
                padding: 1rem;
                font-size: 16px;
            }
        }

    }
`;

export default SideBarLayout;


'use client'
import Link from "next/link";
import styled from "styled-components"
import { MenuItemType } from "@/types/global";
import SubMenuDropdown from "./SubMenuDropdown";
import NavItemWrapper from "@/components/atoms/NavItemWrap";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"
import { media } from "@/utils/media";

interface MenuItemProps {
    item: MenuItemType;
    depth: number;
    isInitiallyOpen: boolean;
    handleCloseNav: () => void;
}

function MenuItem({ item, depth, isInitiallyOpen, handleCloseNav }: MenuItemProps) {

    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(isInitiallyOpen);

    useEffect(() => {
        setIsMenuOpen(isInitiallyOpen);
    }, [isInitiallyOpen]);

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };

    // Function to check if the item or its submenu items are active
    const isItemActive = (item: MenuItemType | undefined): boolean => {
        if (!item) {
            return false;
        }
        return pathname === item.href || (item.submenu && item.submenu.some(subitem => isItemActive(subitem))) as boolean;
    };

    return item.submenu && item.submenu.length > 0 ? (
        <NavItemWrapper
            className={` ${isMenuOpen ? "hasSubmenu" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <MenuBtn  className={`link ${isItemActive(item) ? 'active' : ''}`}>
                <Link href={item.href} onClick={handleCloseNav}>
                    {item.title}
                </Link>
                {depth > 1 ? <NavArrow /> : <NavArrow />}
            </MenuBtn>
            {isMenuOpen && <SubMenuDropdown submenu={item.submenu} depth={depth} handleCloseNav={handleCloseNav} /> }
        </NavItemWrapper>
    ) : (
        <NavItemWrapper className={`link ${pathname === item.href ? 'active' : ''}`}>
            <Link href={item.href} onClick={handleCloseNav}>
                {item.icon && ( <Image src={item.icon} alt="" width={20} height={18} /> )}
                {item.title}
            </Link>
        </NavItemWrapper>
    );
}

export default MenuItem;

const MenuBtn = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
    z-index:999;
    a {
        color: rgb(var(--navText));
        text-decoration: none;
        font-weight: 400;
        margin: 0 .4rem;    
        font-size: 14px;
        letter-spacing: .1rem;
        text-transform: uppercase;
        ${media('<desktop')} {
            color: white;
            margin: 0;
        }
    }
`;

const NavArrow = styled.span`
    border-top: 7px solid #181818;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    background-color: transparent;
    margin-left: 5px;
    transition: 0.40s;
    -webkit-transition: 0.40s;
    -moz-transition: 0.40s;
    -ms-transition: 0.40s;
    -o-transition: 0.40s;
`;
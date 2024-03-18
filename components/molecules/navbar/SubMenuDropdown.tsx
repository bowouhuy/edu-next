import React from "react";
import { MenuItemType } from "@/types/global"
import MenuItem from "./MenuItem";
import NavSubmenu from "@/components/atoms/NavSubmenu";

interface SubMenuDropdownProps {
    submenu: MenuItemType[];
    depth: number;
    handleCloseNav: () => void;
}


function SubMenuDropdown ({ submenu, depth, handleCloseNav}: SubMenuDropdownProps) {

    return (
        <NavSubmenu>
            <div>
                {submenu.map((menu, index)=> (
                    <MenuItem key={index} item={menu} depth={depth + 1} isInitiallyOpen={false} handleCloseNav={handleCloseNav}/>
                ))}
            </div>
        </NavSubmenu>
    )
}

export default SubMenuDropdown;
import {TOP_MENU} from '@/common/constants/top-menu';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';

import {useState} from "react";
import Grid from "@mui/material/Grid";
export function HeaderMenu() {
    const[open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <NavHeader>
            {TOP_MENU.map((item, i) => {
                if (item.category) {
                    return (
                        <Dropdown onOpenChange={handleClick} key={item.title}>
                            <MenuButton>
                                <div className={open ? 'active' : ''}>{item.title} {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}</div>
                            </MenuButton>
                            <ListItem className="list-box" slots={{ listbox: 'ul'}}>
                                {item.category.map((sub) => (
                                    <MenuItem key={sub.title}>
                                        <LinkItem key={sub.title} href={sub.path}>{sub.title}</LinkItem>
                                    </MenuItem>
                                ))}
                            </ListItem>
                        </Dropdown>
                    )
                }
                return <LinkItem key={item.title} href={item.path}>{item.title}</LinkItem>
            })}
        </NavHeader>
    );
}

const NavHeader = styled.div`
    display: flex;
    align-items: center;
    border: none;
    gap: 32px;
    
    @media screen and (max-width: 821px) {
        display: none;
    }
`;

const ListItem = styled(Menu)`
    top: 64px !important;
    left: 0 !important;
    width: 100%;
    background: #f5f5f5;
    z-index: 1;
    transform: none !important;
    padding: 32px 24px;
    border-bottom: 1px solid ${themeColor('border')};
    
    @media (min-width: 1536px) {
        max-width: 1536px;
    }
    
    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -16px;
        list-style: none;
        
        li {
            flex-basis: 25%;
            max-width: 25%;
            padding: 16px;
        }
    }
    
`;

const LinkItem = styled(Link)`
    font-weight: 500;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    color: ${themeColor('black')};
    line-height: 19px;
    
    .active, &:hover {
        color: ${themeColor('primary')};
    }
`;

const MenuItem = styled(BaseMenuItem)(
);

const MenuButton = styled(BaseMenuButton)`
    background-color: transparent;
    text-transform: initial;
    font-weight: 500;
    font-size: 16px;
    color: ${themeColor('black')};
    font-family: 'Inter', sans-serif;
    padding: 0;
    line-height: 19px;
    border: none;
    cursor: pointer;
    
    &:hover {
        background-color: transparent;
        color: ${themeColor('primary')};
    }
    
    &>div {
        display: flex;
        align-items: center;
        
        &.active {
            color: ${themeColor('primary')}; 
        }
    }
`
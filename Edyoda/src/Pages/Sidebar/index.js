import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

export default function index({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
              <CloseIcon/>
            </Icon>
            <SidebarMenu>
            <SidebarLink to='/'>Pizzas</SidebarLink>
            <SidebarLink to='/'>Desserts</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
        </SidebarContainer>
    )
}

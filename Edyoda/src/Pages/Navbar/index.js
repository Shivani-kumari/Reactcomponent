import React from 'react'
import {Nav,NavLink,NavIcon, Bars} from './Navbar'

export default function index({ toggle }) {
    return (
        <div>
            <Nav><NavLink to='/'>Pizzea</NavLink>
            </Nav>
            <NavIcon onClick={toggle}>
                <p>Manu</p>
                <Bars/>
            </NavIcon>
        </div>
    )
}

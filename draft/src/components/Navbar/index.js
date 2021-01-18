import React from 'react'
import { BiHomeHeart } from 'react-icons/bi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { RiChat1Line } from 'react-icons/ri';
import { NavBar, NavbarContainer, NavLogo, NavLinks, NavMenu } from './NavbarElements';
import Logo from '../../logo.png'
import { Link } from 'react-router-dom';
const Nav = (props) => {
    return (
        <div>
            <NavBar >
          
                <NavbarContainer>
                <NavLogo>Mercy </NavLogo>
                <NavMenu>
                     
                    <NavLinks><BiHomeHeart /> </NavLinks>
                    <NavLinks><GiShoppingCart /></NavLinks>
                    <NavLinks onClick={() => window.location = '/login'}><MdPersonOutline /></NavLinks>
                    <NavLinks><RiChat1Line /></NavLinks>
                      
                </NavMenu>
                </NavbarContainer>
            </NavBar>
        </div>
    )
}

export default Nav

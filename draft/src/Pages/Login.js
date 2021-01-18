import React from 'react'
import { NavBar, NavbarContainer, NavH1, NavLinks } from './LoginElements';
import { BiHomeHeart } from 'react-icons/bi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { RiChat1Line } from 'react-icons/ri';

const Login = () => {
    return (
        <>
            <NavBar >
            <NavbarContainer>
                    <NavH1>Register </NavH1>
                    <NavLinks><BiHomeHeart /> </NavLinks>
                    <NavLinks><GiShoppingCart /></NavLinks>
                    <NavLinks onClick={() => window.location = '/login'}><MdPersonOutline /></NavLinks>
                    <NavLinks><RiChat1Line /></NavLinks>
             </NavbarContainer>
            </NavBar>

            
        </>
    )
}

export default Login
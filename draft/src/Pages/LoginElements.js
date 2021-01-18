import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const NavBar = styled.nav`
    background: #8c92ac;
    heigth: 80px;
   // margin-top: -80px;
   display: flex;
    justify-content: center;
    //align-items: center;
    //font-size: 1rem;
    position: sticky;
    //top: 0;
    //z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
//z-index: 1;
//width: 100%;
padding: 0 24px;
//max-width: 1100px;
`;

export const NavH1 = styled.h1`
color: #fff;
text-align: center
text-size: 48px;
`;

export const NavLinks = styled(LinkS)`
justify-content: flex-end;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 14px;


height: 100%;
cursor: pointer;
font-size: 2rem;

&.active {
    border-bottom: 3px solid rgb(255,0,127);
}

&:hover{
    color: rgb(	255, 235, 245);
    transition: 0.2s ease-in-out;
}
`;
import { Link } from "react-router-dom"
import styled from "styled-components"
import cs2logo from "/img/cs2-logo.jpg";
import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.header` 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 4rem;
    a {
        text-decoration: none;
        font-size: 20px;
    }
    a:visited {
        color: #fdfdfd;
    }
    a:hover {
        color: grey;
    }

    @media (max-width: 1279px) { 
        justify-content: space-between;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        height: 70px;
    }

    @media (max-width: 1279px) { 
        margin-left: 1rem;
        h1 {
            font-size: 1.5rem;
        }
    }
`

const Navbar = styled.nav<{ $menu: boolean }>`
    display: flex;
    gap: 2rem;
    z-index: 60;
    @media only screen and (max-width: 1279px) {
        display: ${(props) => (props.$menu ? "flex" : "none")};
        margin-top: 1.5rem;
        width: 100%;
        text-align: end;
        background-color: #181818;
        flex-direction: column;
        position: absolute;
        top: 90px;
        left: 0;
        padding: 1.25rem 0;
        a {
            padding: 0 1rem;
        }
}
    @media (min-width: 769px) and (max-width: 1279px) {
      justify-content: center;
} 
`

const NavbarLink = styled(Link)`
    padding-right: 1.5rem;
`

const StyledHamburger = styled(FontAwesomeIcon) <{ $menu: boolean }>`
    display: none;
    font-size: 32px;
    margin: 1rem;
    @media only screen and (max-width: 1279px) {
      display: ${(props) => (props.$menu ? "none" : "block")};
    }
`

const StyledXmark = styled(FontAwesomeIcon) <{ $menu: boolean }>`
    display: none;
    font-size: 32px;
    margin: 1rem;
    @media only screen and (max-width: 1279px) {
      display: ${(props) => (props.$menu ? "block" : "none")};
    }
`

const Header = () => {

    const [menu, setMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        if (menu) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    return (
        <>
            <StyledHeader>
                <Link to='/'>
                    <Logo>
                        <img src={cs2logo} alt="logo cs2" />
                        <h1>CS2 Skins</h1>
                    </Logo>
                </Link>
                <StyledHamburger $menu={menu} icon={faBars} onClick={() => toggleMenu()} />
                <StyledXmark $menu={menu} icon={faXmark} onClick={() => toggleMenu()} />
                <Navbar $menu={menu}>
                    <NavbarLink to='/musickits'>Music Kits</NavbarLink>
                    <NavbarLink to='/collections'>Collections</NavbarLink>
                    <NavbarLink to='/weapons'>Weapons</NavbarLink>
                    <NavbarLink to='/stickers'>Stickers</NavbarLink>
                    <NavbarLink to='/agents'>Agents</NavbarLink>
                    <NavbarLink to='/keychains'>Keychains</NavbarLink>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header
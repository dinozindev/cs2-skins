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

    @media (max-width: 768px) { 
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

    @media (max-width: 768px) { 
        margin-left: 1rem;
        h1 {
            font-size: 2rem;
        }
    }
`

const Navbar = styled.nav<{ $menu: boolean }>`
    display: flex;
    gap: 2rem;
    @media only screen and (max-width: 768px) {
      display: ${(props) => (props.$menu ? "flex" : "none")};
      margin-top: 1rem;
      width: 100%;
      text-align: end;
      background-color: #181818;
      flex-direction: column;
      position: absolute;
      top: 90px;
      padding: 1rem 0;
      a {
        margin: 0 1rem;
      }
    }
    @media (min-width: 769px) and (max-width: 1279px) {
      justify-content: center;
} 
`

const StyledHamburger = styled(FontAwesomeIcon) <{ $menu: boolean }>`
    display: none;
    font-size: 32px;
    margin: 1rem;
    @media only screen and (max-width: 768px) {
      display: ${(props) => (props.$menu ? "none" : "block")};
    }
`

const StyledXmark = styled(FontAwesomeIcon) <{ $menu: boolean }>`
    display: none;
    font-size: 32px;
    margin: 1rem;
    @media only screen and (max-width: 768px) {
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
                    <Link to='/musickits'>Music Kits</Link>
                    <Link to='/collections'>Collections</Link>
                    <Link to='/weapons'>Weapons</Link>
                    <Link to='/stickers'>Stickers</Link>
                    <Link to='/agents'>Agents</Link>
                    <Link to='/keychains'>Keychains</Link>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header
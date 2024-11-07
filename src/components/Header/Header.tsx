import { Link } from "react-router-dom"
import styled from "styled-components"
import cs2logo from "/img/cs2-logo.jpg";

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
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        height: 70px;
    }
`

const Navbar = styled.nav`
    display:flex;
    gap: 2rem;
    
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Link to='/'>
                    <Logo>
                        <img src={cs2logo} alt="logo cs2" />
                        <h1>CS2 Skins</h1>
                    </Logo>
                </Link>
                <Navbar>
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
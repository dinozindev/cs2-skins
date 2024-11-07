import { Link } from "react-router-dom"
import styled from "styled-components"

const HomeMain = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
height: 50vh;
  h2 {
    font-size: 48px;
  }
  a {
    border: none;
    background-color: #AF75F9;
    width: 20%;
    padding: 1rem 0;
    font-size: 20px;
    border-radius: 12px;
    text-align: center;
    text-decoration: none;
    color: #000;
    font-weight: 700;
}
  a:hover {
    cursor: pointer;
    color: #fff;
    background-color: #281F32;
    transition: 0.2s;
  }
  b {
    color: #AF75F9;
  }
`

const Home = () => {
  return (
    <>
    <HomeMain>
        <h2>The Best Place to Check <b>CS2</b> Collectibles!</h2>
        <Link to='/weapons'>Check out Skins</Link>
    </HomeMain>
    </>
    
  )
}

export default Home
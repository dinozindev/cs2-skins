import { Link } from "react-router-dom"
import styled from "styled-components"

const HomeMain = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
  b {
    color: #AF75F9;
  }
`

const HomeBanner = styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap: 2rem;
  h2 {
    font-size: 64px;
  }
  a {
    border: none;
    background-color: #AF75F9;
    width: 30%;
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
`

const FeaturesDiv = styled.div`
  display:flex;
  justify-content: space-evenly;
  width: 50%;
`

const Feature = styled.div`
  h3 {
    font-size: 48px;

  }
`

const Home = () => {
  return (
    <>
    <HomeMain>
      <HomeBanner>
        <h2>The Best Place to Check <b>CS2</b> Collectibles!</h2>
        <Link to='/weapons'>Check out Skins</Link>
        </HomeBanner>
        <FeaturesDiv>
          <Feature>
            <h3>1<b>K+</b></h3>
            <p>Items available</p>
          </Feature>
          <Feature>
            <h3>100<b>%</b></h3>
            <p>Updated</p>
          </Feature>
          <Feature>
            <h3>24/<b>7</b></h3>
            <p>Available services</p>
          </Feature>
        </FeaturesDiv>
    </HomeMain>
    </>
    
  )
}

export default Home
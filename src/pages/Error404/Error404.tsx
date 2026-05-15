import styled from "styled-components";

const Error404Main = styled.div`
    height: 70vh;
    display:flex;
    align-items: center;
    justify-content: center;
    h2 {
    text-align: center;
    font-size: 60px;
    padding-bottom: 6rem;
    }
`

const Error404 = () => {
  return (
    <Error404Main>
      <h2>Error 404 - Page not Found</h2>
    </Error404Main>
  )
}

export default Error404;
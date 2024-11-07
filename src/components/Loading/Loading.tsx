import { ThreeDot } from "react-loading-indicators";
import styled from "styled-components";

const LoadingDiv = styled.div`
    text-align: center;
    height: 100vh;

`

const Loading = () => {
    return (
        <>
        <LoadingDiv>
        <ThreeDot color="#AF75F9" size="medium" text="Fetching..." textColor="" />
        </LoadingDiv>
        </>
    )
}

export default Loading;



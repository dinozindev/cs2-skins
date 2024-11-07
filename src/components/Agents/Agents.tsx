import { useState } from "react";
import useFetchAgent from "../useFetch/useFetchAgent"
import styled from "styled-components";
import Loading from "../Loading/Loading";

const AgentsTitle = styled.h2`
    text-align: center;
    font-size: 60px;
`

const AgentsButtonsDiv = styled.div`
    padding: 3rem 0 4rem 0;
    display:flex;
    justify-content:center;
    gap: 1rem;
`

const AgentButton = styled.button`
    background-color: #AF75F9;
    color: #000;
    border:none;
    padding: 1rem;
    border-radius: 0.25rem;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #281F32;
        transition: 0.2s;
    }
`

const AgentCollectionTitle = styled.h3`
    text-align: center;
    font-size: 40px;
`

const AgentsMain = styled.main`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 4rem 0 6rem 0;
`

const AgentCard = styled.div`
    background-color: #281F32;
    width: 30%;
    padding: 1.25rem 1rem;
    border-radius: 0.25rem;
    text-align: center;
    img {
    width: 90%}
`

const Agents = () => {
    const { data, error, loading } = useFetchAgent("https://bymykel.github.io/CSGO-API/api/en/agents.json");
    const [filter, setFilter] = useState('');

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    const filterAgents = (collection: string) => {
        setFilter(collection)
    }

    const uniqueOperationNames = Array.from(
        new Set(data?.flatMap(agent => agent.collections.map(collection => collection.name)) || [])
    );

    return (
        <>
            <AgentsTitle>Agents</AgentsTitle>
            <AgentsButtonsDiv>
                {uniqueOperationNames?.map((operationName) => (
                    <AgentButton onClick={() => filterAgents(operationName)}>{operationName}</AgentButton>
                ))}
                <AgentButton onClick={() => filterAgents("")}>All Agents</AgentButton>
            </AgentsButtonsDiv>
            {filter !== "" ? (<AgentCollectionTitle>{filter}</AgentCollectionTitle>) : (<AgentCollectionTitle>All Agents</AgentCollectionTitle>)}
            <AgentsMain>
                {filter !== "" ?
                    (data?.filter(agent => agent.collections[0].name === filter).map(agent => (
                        <AgentCard key={agent.id}>
                            <h2>{agent.name}</h2>
                            <p style={{ color: agent.rarity.color }}>{agent.rarity.name}</p>
                            <img src={agent.image} alt={agent.id} />
                        </AgentCard>
                    ))
                    ) :
                    (data?.map(agent => (
                        <AgentCard key={agent.id}>
                            <h3>{agent.name}</h3>
                            <p>{agent.collections[0].name.replace("Agents", "Agent")}</p>
                            <p style={{ color: agent.rarity.color }}>{agent.rarity.name}</p>
                            <img src={agent.image} alt={agent.id} />
                        </AgentCard>
                    )))}
            </AgentsMain>
        </>
    )
}

export default Agents
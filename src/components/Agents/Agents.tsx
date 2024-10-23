import { useState } from "react";
import useFetchAgent from "../useFetch/useFetchAgent"

const Agents = () => {
  const {data, error, loading} = useFetchAgent("https://bymykel.github.io/CSGO-API/api/en/agents.json");
  const [filter, setFilter] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filterAgents = (collection : string) => { 
        setFilter(collection)
  }

  const uniqueOperationNames = Array.from(
    new Set(data?.flatMap(agent => agent.collections.map(collection => collection.name)) || [])
  );

  return (
    <>
        <div>
            {uniqueOperationNames?.map((operationName) => (
                <button onClick={() => filterAgents(operationName)}>{operationName}</button>
            ))}
            <button onClick={() => filterAgents("")}>All Agents</button>
        </div>
        <div>
            {filter !== "" ? (<h2>{filter}</h2>) : (<h2>All Agents</h2>)}
            {filter !== "" ? 
            (data?.filter(agent => agent.collections[0].name === filter).map(agent => (
                    <div key={agent.id}>
                        <h2>{agent.name}</h2>
                        <p style={{color: agent.rarity.color}}>{agent.rarity.name}</p>
                        <img src={agent.image} alt={agent.id}/>
                    </div>
            ))
        ) : 
        (data?.map(agent => (
                <div key={agent.id}>
                    <h2>{agent.name}</h2>
                    <p style={{color: agent.rarity.color}}>{agent.rarity.name}</p>
                    <img src={agent.image} alt={agent.id}/>
                </div>
            )))}   
        </div>  
    </>
  )
}

export default Agents
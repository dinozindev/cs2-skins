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

  return (
    <>
        <h1>Agents</h1>
        <div>
            <button onClick={() => filterAgents("Shattered Web Agents")}>Shattered Web Agents</button>
            <button onClick={() => filterAgents("Broken Fang Agents")}>Broken Fang Agents</button>
            <button onClick={() => filterAgents("Operation Riptide Agents")}>Riptide Agents</button>
            <button onClick={() => filterAgents("")}>Show All Agents</button>
        </div>
        <div>
            {filter !== "" ? (data?.filter(agent => agent.collections[0].name === filter).map(agent => (
                <div key={agent.id}>
                    <h2>{agent.name}</h2>
                    <p style={{color: agent.rarity.color}}>{agent.rarity.name}</p>
                    <img src={agent.image} alt={agent.id}/>
                </div>
            ))) : (data?.map(agent => (
                <div key={agent.id}>
                    <h2>{agent.name}</h2>
                    <p style={{color: agent.rarity.color}}>{agent.rarity.name}</p>
                    <img src={agent.image} alt={agent.id}/>
                </div>
            )))}   
        </div>
         <pre>{JSON.stringify(data, null, 2)}</pre>  
    </>
  )
}

export default Agents
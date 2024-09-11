import styled from "styled-components";
import useFetchCollection from "../useFetch/useFetchCollection";
import { useState } from "react";

const CollectionDiv = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CollectionCard = styled.div`
    p {
        margin-bottom: 1.25rem;
        font-weight: 700;
        color: white;
    }
    text-align: center;
    margin: 2rem;
    background-color: grey;
    padding: 2rem;
    border-radius: 8px;
`

const CollectionDetails = styled.div`
`

const Collections = () => {
  const { data, loading, error } = useFetchCollection('https://bymykel.github.io/CSGO-API/api/en/collections.json'); // API URL to connect to CSGO-API
  const[collectionID, setCollectionID] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredCollection = data?.filter(collection => !collection.name.includes('Graffiti')) // Removes graffiti collections

  const handleFilteredCollection = (collection_id : string) => {  
        setCollectionID(collection_id)
  }

  // quando clicar em uma coleção, esconder as demais e mostrar apenas a clicada.
  return (
    <>
    <h1>Collections:  </h1>
    <CollectionDiv>
      {filteredCollection?.map(collection => (
        <CollectionCard key={collection.id} onClick={() => handleFilteredCollection(collection.id)}>
            <p>{collection.name}</p>
            <img src={collection.image} alt="" />
        </CollectionCard>
      ))}
        {
            filteredCollection?.filter(collection => collection.id === collectionID).map(collection => (
                <CollectionDetails key={collection.id}>
                    <h1>{collection.name}</h1>
                    <img src={collection.image} alt="" />
                    {collection.contains.map(skin => (
                        <div key={skin.id}>
                            <p>{skin.name}</p>
                            <p>{skin.rarity.name}</p>
                            <img src={skin.image} alt="" />
                        </div>
                    ))}
                </CollectionDetails>
            ))
        }
        {/* <pre>{JSON.stringify(filteredCollection, null, 2)}</pre>   */}
    </CollectionDiv>
    </>
  );
};

export default Collections;
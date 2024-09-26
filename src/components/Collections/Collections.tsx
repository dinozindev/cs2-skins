import styled from "styled-components";
import useFetchCollection from "../useFetch/useFetchCollection";
import { useState } from "react";

const CollectionTitle = styled.h1`
    text-align: center;
    font-size: 60px;
`

const CollectionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5rem;
`

const CollectionsDiv = styled.div`
    width: 50%;
    display:flex;
    flex-wrap: wrap;
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
    &:hover {
        cursor: pointer;
        scale: 1.1;
        transition: 0.2s;
    }
`

const WeaponCard = styled.div`
    background-color: lightgrey;
    text-align:center; 
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: 16px;
    p {
        font-size: 20px;
        font-weight: 700;

    }
`

const CardSkinsDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;

`

const CollectionDetails = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const CollectionHeader = styled.header`
    img {
        margin-top: 2rem;
    }
    text-align: center;
    background-color: grey;
    padding: 2rem;
    width: 100%;
    border-radius: 8px;
    color: white;
    margin-bottom: 2rem;
`

const Collections = () => {
  const { data, loading, error } = useFetchCollection('https://bymykel.github.io/CSGO-API/api/en/collections.json'); // API URL to connect to CSGO-API
  const[collectionID, setCollectionID] = useState('collection-set-community-1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredCollection = data?.filter(collection => !collection.name.includes('Graffiti')) // Removes graffiti collections

  const handleFilteredCollection = (collection_id : string) => {  
        setCollectionID(collection_id)
  }

  const scrollParaTopo = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  // quando clicar em uma coleção, esconder as demais e mostrar apenas a clicada.
  return (
    <>
    <CollectionTitle>Collections</CollectionTitle>
    <CollectionDiv>
    <CollectionsDiv>
      {filteredCollection?.map(collection => (
        <CollectionCard key={collection.id} onClick={() => {handleFilteredCollection(collection.id); scrollParaTopo();}}>
            <p>{collection.name}</p>
            <img src={collection.image} alt="" />
        </CollectionCard>
      ))}
      </CollectionsDiv>
        {
            filteredCollection?.filter(collection => collection.id === collectionID).map(collection => (
                <CollectionDetails key={collection.id}>
                    <CollectionHeader>
                        <h1>{collection.name}</h1>
                        <img src={collection.image} alt="" />
                    </CollectionHeader>
                    <CardSkinsDiv>
                    {collection.contains.map(skin => (
                        <WeaponCard key={skin.id}>
                            <p>{skin.name}</p>
                            <p>{skin.rarity.name}</p>
                            <img src={skin.image} alt="" />
                        </WeaponCard>
                    ))}
                    </CardSkinsDiv>
                </CollectionDetails>
            ))
        }
        </CollectionDiv>
        {/* <pre>{JSON.stringify(filteredCollection, null, 2)}</pre>   */}
    
    </>
  );
};

export default Collections;
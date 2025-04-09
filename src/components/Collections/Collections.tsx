import styled from "styled-components";
import useFetchCollection from "../useFetch/useFetchCollection";
import { useState } from "react";
import Loading from "../Loading/Loading";

const CollectionTitle = styled.h1`
    text-align: center;
    font-size: 60px;
`

const CollectionMain = styled.main`
    width: 100%;
    display: flex;
    padding: 5rem 0;
    margin: 0 auto;
    justify-content: center;
`

const CollectionsDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    height: 70vh;
    width: 20%;
    overflow: auto;
    gap: 0.5rem;
    padding: 0.5rem;

    
`

const CollectionCard = styled.div`
    text-align: center;
    background-color: grey;
    padding: 1rem;
    display:flex;
    justify-content: space-between;
    border-radius: 8px;
    height: 50px;
    width: 100%;
    text-align: center;
    background-color: #AF75F9;
    p {
        margin-bottom: 1.25rem;
        font-weight: 700;
        color: black;
    }
    &:hover {
        cursor: pointer;
        scale: 1.01;
        transition: 0.2s;
        background-color: #281F32;
        p {
            color: #FDFDFD;
        }
    }
    img {
        height: 90%;
    }
`

const CollectionDetails = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
`

const CollectionHeader = styled.header`
    text-align: center;
    background-color: #281F32;
    width: 90%;
    padding: 2rem 0;
    border-radius: 8px;
    color: white;
    margin-bottom: 2rem;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
        height: 90%;
    }
`

const WeaponCard = styled.div`
    background-color: lightgrey;
    text-align:center; 
    padding: 2rem;
    border-radius: 16px;
    min-width: 20%;
    background-color: #4C495C;
    h2 {
        font-size: 20px;
        margin-bottom: 0.4rem;
    }
    p {
        font-weight: 700;
    }
    img {
        width: 80%;
    }
`

const CardSkinsDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`


const Collections = () => {
    const { data, loading, error } = useFetchCollection('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/collections.json'); // API URL to connect to CSGO-API
    const [collectionID, setCollectionID] = useState('collection-set-community-1');

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    const filteredCollection = data?.filter(collection => !collection.name.includes('Graffiti')) // Removes graffiti collections

    const handleFilteredCollection = (collection_id: string) => {
        setCollectionID(collection_id)
    }

    // const scrollParaTopo = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }

    //scrollParaTopo();

    // quando clicar em uma coleção, esconder as demais e mostrar apenas a clicada.
    return (
        <>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
            <CollectionTitle>Collections</CollectionTitle>
            <CollectionMain>
                <CollectionsDiv>
                    {filteredCollection?.map(collection => (
                        <CollectionCard key={collection.id} onClick={() => { handleFilteredCollection(collection.id);}}>
                            <p>{collection.name}</p>
                            <img src={collection.image} alt={collection.name} />
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
                                        <h2>{skin.name}</h2>
                                        <p style={{ color: skin.rarity.color }}>{skin.rarity.name}</p>
                                        <img src={skin.image} alt="" />
                                    </WeaponCard>
                                ))}
                            </CardSkinsDiv>
                        </CollectionDetails>
                    ))
                }
            </CollectionMain>


        </>
    );
};

export default Collections;
import useFetchSkin from "../useFetch/useFetchSkin";
import weapons from '../../weapons.json';
import { useState } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";

const TitleWeapon = styled.h1`
    text-align: center;
    font-size: 60px;
`

const ListWeapons = styled.ul`
    padding-top: 5.5rem;
    display:flex;
    list-style: none;
    overflow: auto;
    gap: 0.25rem;
    margin: 0 auto;
    width: 90%;
`

const WeaponButton = styled.button`
    cursor: pointer;
    background-color: #AF75F9;
    border: none;
    padding: 1rem;
    width: 200px;
    height: 100%;
    font-weight: 700;
    color: black;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        scale: 1.01;
        transition: 0.2s;
        background-color: #281F32;
        color: #fdfdfd;
`

const WeaponContainer = styled.div`
    padding: 5.5rem 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
`

const WeaponCard = styled.div`
    width: 30%;
    background-color: #281F32;
    text-align: center;
    padding: 1.5rem 1rem;
`

const WeaponCardHeader = styled.div`
    display:flex;
    justify-content: center;
    padding-bottom: 1rem;
    gap: 1.5rem;
    img {
        width: 20%;
        height: 20%;
    }
`

const WeaponCardHeaderText = styled.div`
    display:flex;
    flex-direction: column;
    span {
        font-weight: 700;
        margin-bottom: 0.25rem;
    }
`

const ImageWeapon = styled.img`
    width: 90%;
`

const Weapons = () => {

    const [actualWeapon, setActualWeapon] = useState('weapon_deagle');
    const { data, loading, error } = useFetchSkin('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json'); 

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    // updates the actual weapon
    const selectWeapon = (id_weapon : string) => {
        setActualWeapon(id_weapon)
    }

    // filtered weapon skins based on the selected weapon state
    const filteredWeapons = data?.filter(weapon => weapon.weapon.id.includes(actualWeapon));

    return (
    <>
        <TitleWeapon>Weapon Skins</TitleWeapon>
        <nav>
            <ListWeapons>
            {weapons?.map(weapon => (
            <li onClick={() => selectWeapon(weapon.id)}>
                <WeaponButton>{weapon.name}</WeaponButton>
            </li>
        ))}
            </ListWeapons>
        </nav>
        <WeaponContainer>
        {filteredWeapons?.map(weapon => (   
                <WeaponCard>
                    <WeaponCardHeader>
                        <WeaponCardHeaderText>
                            <h2>{weapon.name}</h2>
                            <span style={{color: weapon.rarity.color}}>{weapon.rarity.name}</span>
                            {weapon.collections.map(collection => (
                            <p key={collection.id}>{collection.name}</p>
                        ))}
                            {weapon.souvenir && weapon.souvenir == true ? (
                                <p style={{color: "#FFD700"}}>Souvenir Available</p>
                            ) : (
                                ""
                            )}
                            {weapon.stattrak && weapon.stattrak == true ? (
                                <p style={{color: "#CF6A32"}}>StatTrak™ Available</p>
                            ) : (
                                ""
                            )}
                        </WeaponCardHeaderText>
                        {weapon.collections.map(collection => (
                            <img src={collection.image}></img>
                        ))}
                    </WeaponCardHeader>
                    <ImageWeapon src={weapon.image} />
                </WeaponCard>    
        ))}
        </WeaponContainer> 
         {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
    </>
  )
}

export default Weapons
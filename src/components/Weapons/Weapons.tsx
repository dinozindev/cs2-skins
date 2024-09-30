import useFetchSkin from "../useFetch/useFetchSkin";
import weapons from '../../weapons.json';
import { useState } from "react";
import styled from "styled-components";

const TitleWeapon = styled.h1`
    text-align: center;
    font-size: 60px;
`

const ListWeapons = styled.ul`
    padding-top: 5.5rem;
    display:flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 0.25rem;
`

const WeaponButton = styled.button`
    cursor: pointer;
`

const WeaponContainer = styled.div`
    padding-top: 4rem;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`

const WeaponCard = styled.div`
    width: 30%;
    background-color: lightgrey;
    margin: 0.25rem;
    text-align: center;
    padding: 0.75rem;
`

const WeaponCardHeader = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    img {
        width: 20%;
        height: 20%;
    }
`

const Weapons = () => {

    const [actualWeapon, setActualWeapon] = useState('weapon_deagle');
    const { data, loading, error } = useFetchSkin('https://bymykel.github.io/CSGO-API/api/en/skins.json'); 

    if (loading) return <p>Loading...</p>;
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
                        <div>
                            <h1>{weapon.name}</h1>
                            <p style={{color: weapon.rarity.color}}>{weapon.rarity.name}</p>
                            {weapon.collections.map(collection => (
                            <p key={collection.id}>{collection.name}</p>
                        ))}
                            <p>Souvenir available?: {weapon.souvenir == true ? "Yes" : "No"}</p>
                            <p>StatTrak available?: {weapon.stattrak == true ? "Yes": "No"}</p>
                        </div>
                        {weapon.collections.map(collection => (
                            <img src={collection.image}></img>
                        ))}
                    </WeaponCardHeader>
                    <img src={weapon.image}></img>
                </WeaponCard>    
        ))}
        </WeaponContainer> 
         {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
    </>
  )
}

export default Weapons
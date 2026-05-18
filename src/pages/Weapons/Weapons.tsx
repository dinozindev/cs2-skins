import useFetchSkin from '../../components/useFetch/useFetchSkin';
import weapons from '../../weapons.json';
import { useState } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";

const TitleWeapon = styled.h1`
    text-align: center;
    font-size: 60px;
`

const CategoryList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 1rem;
    padding-top: 3rem;
    @media (max-width: 1279px) { 
        flex-wrap:wrap;
  }
`

const ListWeapons = styled.ul`
    padding-top: 1rem;
    display:flex;
    flex-direction: column;
    position: absolute;
    list-style: none;
    gap: 0.25rem;
    margin: 0 auto;
    background-color: #AF75F9;
    z-index: 50;
`

const CategoryButton = styled.div`
    background-color: #AF75F9;
    width: 200px;
    text-align: center;
    padding: 1rem 0;
    color: black;
    font-weight: 700;
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
    }
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
    z-index: 10;
    text-align: center;
    padding: 1.5rem 1rem;

    transition: transform 0.25s ease, box-shadow 0.25s ease;
    &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

    @media only screen and (max-width: 1024px) {
        width: 70%;
    }
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

const categories = ['Pistols', 'Rifles', 'Sub', 'Heavy', 'Knives', 'Gloves'];

const Weapons = () => {

    const [actualWeapon, setActualWeapon] = useState('weapon_ak47');
    const { data, loading, error } = useFetchSkin('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json');
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

    // updates the actual weapon
    const selectWeapon = (id_weapon: string) => {
        setActualWeapon(id_weapon)
    }

    // filtered weapon skins based on the selected weapon state
    const filteredWeapons = data?.filter(weapon => weapon.weapon.id.includes(actualWeapon));

    return (
        <>
            <TitleWeapon>Weapon Skins</TitleWeapon>
            <nav>
                <CategoryList>
                    {categories.map(category => {
                        const categoryWeapons = weapons?.filter(w => w.category === category) || [];
                        const isOpen = openCategory === category;

                        return (
                            <ul key={category}>
                                <CategoryButton
                                    onClick={() => toggleCategory(category)}
                                    style={{ cursor: 'pointer', userSelect: 'none' }}
                                >
                                    {isOpen ? '▼' : '▶'}{category}({categoryWeapons.length})
                                </CategoryButton>

                                {isOpen && (
                                    <ListWeapons>
                                        {categoryWeapons.map(weapon => (
                                            <li key={weapon.id} onClick={() => selectWeapon(weapon.id)}>
                                                <WeaponButton>{weapon.name}</WeaponButton>
                                            </li>
                                        ))}
                                    </ListWeapons>
                                )}
                            </ul>
                        );
                    })}
                </CategoryList>
            </nav>
            <WeaponContainer>
                {filteredWeapons?.map(weapon => (
                    <WeaponCard>
                        <WeaponCardHeader>
                            <WeaponCardHeaderText>
                                <h2>{weapon.name}</h2>
                                <span style={{ color: weapon.rarity.color }}>{weapon.rarity.name}</span>
                                {weapon.collections.map(collection => (
                                    <p key={collection.id}>{collection.name}</p>
                                ))}
                                {weapon.souvenir && weapon.souvenir == true ? (
                                    <p style={{ color: "#FFD700" }}>Souvenir Available</p>
                                ) : (
                                    ""
                                )}
                                {weapon.stattrak && weapon.stattrak == true ? (
                                    <p style={{ color: "#CF6A32" }}>StatTrak™ Available</p>
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
        </>
    )
}

export default Weapons
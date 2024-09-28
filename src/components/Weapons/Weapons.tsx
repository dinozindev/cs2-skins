import useFetchSkin from "../useFetch/useFetchSkin";

const Weapons = () => {
    const { data, loading, error } = useFetchSkin('https://bymykel.github.io/CSGO-API/api/en/skins.json'); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredWeapons = data?.filter(weapon => weapon.weapon.id.includes('weapon_deagle'))

    return (
    <>
        <h1>Weapons</h1>
        {filteredWeapons?.map(weapon => (
            <div>
                <h1>{weapon.name}</h1>
                <img src={weapon.image}></img>
            </div>  
        ))}
        <pre>{JSON.stringify(data, null, 2)}</pre> 
    </>
  )
}

export default Weapons
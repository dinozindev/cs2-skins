import useFetch from "../useFetch/useFetch"

const Keychains = () => {
    const {data, loading, error} = useFetch("https://bymykel.github.io/CSGO-API/api/en/keychains.json");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div>
        {data?.map(keychain => (
            <div key={keychain.id}>
                <h2>{keychain.name}</h2>
                <p style={{color: keychain.rarity.color}}>{keychain.rarity.name}</p>
                <img src={keychain.image} alt={keychain.name} />
            </div>
        ))}
    </div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Keychains
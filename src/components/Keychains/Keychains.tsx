import styled from "styled-components";
import useFetch from "../useFetch/useFetch"
import Loading from "../Loading/Loading";

const KeychainsTitle = styled.h2`
    text-align: center;
    font-size: 60px;
`

const KeychainsMain = styled.main`
    padding: 6rem 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

const KeychainCard = styled.div`
    background-color: #281F32;
    padding: 1.25rem 1rem;
    width: 20%;
    text-align: center;
    img {
      width: 80%;
    }
`

const Keychains = () => {
    const {data, loading, error} = useFetch("https://bymykel.github.io/CSGO-API/api/en/keychains.json");

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;

  return (
    <>
    <KeychainsTitle>Keychains</KeychainsTitle>
    <KeychainsMain>
        {data?.map(keychain => (
            <KeychainCard key={keychain.id}>
                <h2>{keychain.name}</h2>
                <p style={{color: keychain.rarity.color}}>{keychain.rarity.name}</p>
                <img src={keychain.image} alt={keychain.name} />
            </KeychainCard>
        ))}
    </KeychainsMain>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}

export default Keychains
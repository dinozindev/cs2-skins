import styled from "styled-components";
import useFetch from "../../components/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";

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
    border-radius: 8px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
    img {
      width: 80%;
    }

    @media (max-width: 768px) { 
      width: 70%;
    }
`

const Keychains = () => {
    const {data, loading, error} = useFetch("https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/keychains.json");

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
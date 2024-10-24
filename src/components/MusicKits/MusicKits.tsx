import styled from "styled-components";
import useFetch from "../useFetch/useFetch";

const MusicKitTitle = styled.h1`
  text-align: center;
  font-size: 60px;
`

const MusicKitDiv = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5.5rem 0;
  gap: 0.75rem;
  width: 100%;
  background-color: #181818;
`

const MusicKitCard = styled.div`
  width: 19%;
  background-color: #281F32;
  text-align:center;
  padding: 2rem;
  border-radius: 8px;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    height: 10%;
  }
  p {
    height: 30%;
  }
  img {
    margin-top: 1.5rem;
    height: 40%;
  }
`

const MusicKits = () => {
  const { data, loading, error } = useFetch('https://bymykel.github.io/CSGO-API/api/en/music_kits.json'); 

  const filteredMusicKits = data?.filter(musickit => !musickit.name.includes('StatTrak™'))

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <MusicKitTitle>Music Kits</MusicKitTitle>
    <MusicKitDiv>
      {filteredMusicKits?.map(item => (
        <MusicKitCard key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.name} />
        </MusicKitCard>
      ))}
    </MusicKitDiv>
     {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
    </>
  );
};

export default MusicKits;
import useFetch from "../useFetch/useFetch";

const MusicKits = () => {
  const { data, loading, error } = useFetch('https://bymykel.github.io/CSGO-API/api/en/music_kits.json'); // API URL to connect to CSGO-API

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Music Kits:</h1>
      {data?.map(item => (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <img src={item.image} alt="" />
        </div>
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default MusicKits;
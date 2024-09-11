import useFetch from "../useFetch/useFetch";

const FilteredWeapon = () => {
  const { data, loading, error } = useFetch('https://bymykel.github.io/CSGO-API/api/en/skins.json'); // API URL to connect to CSGO-API

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h1>Weapon Skins: </h1>
      {data?.map(item => (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <img src={item.image} alt="" />
            <p>{item.contains}</p>
            
        </div>
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default FilteredWeapon;
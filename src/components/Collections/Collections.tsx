import useFetchCollection from "../useFetch/useFetchCollection";

const Collections = () => {
  const { data, loading, error } = useFetchCollection('https://bymykel.github.io/CSGO-API/api/en/collections.json'); // API URL to connect to CSGO-API

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredCollection = data?.filter(collection => collection.name.includes('The Huntsman Collection'))


  return (
    <div>
      <h1>Collections:  </h1>
      {filteredCollection?.map(collection => (
        <div key={collection.id}>
            <p>{collection.name}</p>
            <img src={collection.image} alt="" />
            {collection.contains.map(item => (
                <>
                <p>{item.name}</p>
                <p>{item.rarity.name}</p>
                <img src={item.image} alt="" />
                </>
            ))}
        </div>
      ))}
       {/* <pre>{JSON.stringify(filteredCollection, null, 2)}</pre>  */}
    </div>
  );
};

export default Collections;
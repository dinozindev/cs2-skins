import { useState, useEffect } from 'react';

interface Rarity {
    id: string;
    name: string;
    color: string;
}

interface Collections {
    id: string;
    name: string;
    image: string;
}

interface Team {
    id: string;
    name: string;
}

interface Agent {
  id: string;
  name: string; 
  description: string;
  image: string;
  rarity: Rarity;
  collections: Collections[];
  team: Team;
}

type ApiResponse = Agent[]

const useFetchAgent = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error : any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchAgent;
import { useState, useEffect } from 'react';

// Define o tipo dos dados que você espera da API
interface Rarity {
    id: string;
    name: string;
    color: string;
  }
  
  interface Crate {
    id: string;
    name: string;
    image: string;
  }
  
  interface Item {
    id: string;
    name: string;
    rarity: Rarity;
    paint_index: string;
    image: string;
  }
  
  interface Collection {
    id: string;
    name: string;
    crates: Crate[];
    contains: Item[];
    image: string;
  }

type ApiResponse = Collection[]

const useFetchCollection = (url: string) => {
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
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchCollection;
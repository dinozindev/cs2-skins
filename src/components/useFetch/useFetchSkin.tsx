import { useEffect, useState } from "react";

interface Weapon {
    id: string;
    name: string;
}

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

interface Skin {
    id: string;
    name: string;
    weapon: Weapon;
    rarity: Rarity;
    stattrak: boolean;
    souvenir: boolean;
    collections: Collections[];
    image: string;
}

type ApiResponse = Skin[]

const useFetchSkin = (url: string) => {
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
  
  export default useFetchSkin;
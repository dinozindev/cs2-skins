import { useEffect, useState } from "react";

interface Rarity {
    id: string; 
    name: string; 
    color: string;
}

interface Crates {
    id: string;
    name: string;
    image: string;
}

interface Sticker {
    id: string;
    name: string; 
    rarity: Rarity;
    crates: Crates[];
    tournament_event: string;
    tournament_team: string;
    type: string;
    image: string;
}

type ApiResponse = Sticker[]

const useFetchSticker = (url: string) => {
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
  
  export default useFetchSticker;
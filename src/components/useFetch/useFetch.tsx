import { useState, useEffect } from 'react';

// Define o tipo dos dados que você espera da API
interface Item {
  // Adicione os campos esperados da resposta da API aqui
  id: string;
  name: string; // Altere 'any' para o tipo apropriado
  description: string;
  image: string;
  contains: Array<string>;
  // por exemplo: id: number; name: string;
}

type ApiResponse = Item[]

const useFetch = (url: string) => {
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

export default useFetch;
import { useState } from "react";
import useFetchSticker from "../useFetch/useFetchSticker";
import styled from "styled-components";

const CratesDiv = styled.div`
    overflow: auto;
    height: 400px;
    width: 30%;
    display:flex;
    flex: wrap;
    flex-direction: column;
`

const StickersDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Stickers = () => {
  const { data, loading, error } = useFetchSticker('https://bymykel.github.io/CSGO-API/api/en/stickers.json');
  const [crate, setCrate] = useState("EMS Katowice 2014 Legends");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Obtém os nomes únicos dos crates
  const uniqueCrateNames = Array.from(
    new Set(data?.flatMap(sticker => sticker.crates.map(crate => crate.name)) || [])
  );

  // Função para atualizar o crate selecionado
  const handleCrateSelection = (crateName: string) => {
    setCrate(crateName);
  };

  // Filtra os adesivos com base no crate selecionado
  const filteredStickers = data?.filter(sticker =>
    sticker.crates.some(c => c.name === crate)
  );

  return (
    <>
    <CratesDiv>
      {/* Renderiza os botões de crates */}
      {uniqueCrateNames.map((crateName, index) => (
        <button key={index} onClick={() => handleCrateSelection(crateName)}>
          {crateName}
        </button>
      ))}
      </CratesDiv>
      {/* Renderiza os adesivos filtrados */}
      <StickersDiv>
      {filteredStickers?.map(sticker => (
        <div key={sticker.id}>
          <div>
            {sticker.crates.length > 0 ? (
              <p>{sticker.crates[0].name}</p>
            ) : (
              <p>Not obtainable through crates</p>
            )}
            <p>{sticker.name}</p>
            <p style={{color: sticker.rarity.color}}>{sticker.rarity.name}</p>
            <img src={sticker.image} alt={sticker.name} />
          </div>
        </div>
      ))}
      </StickersDiv>
    </>
  );
};

export default Stickers;
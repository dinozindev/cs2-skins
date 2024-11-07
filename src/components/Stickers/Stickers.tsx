import { useState } from "react";
import useFetchSticker from "../useFetch/useFetchSticker";
import styled from "styled-components";
import Loading from "../Loading/Loading";

const StickersTitle = styled.h2`
    text-align: center;
    font-size: 60px;
`

const StickersHeader = styled.header`
    text-align: center;
    margin: 4rem auto;
    font-size: 30px;
    padding: 2rem;
    background-color: #AF75F9;
    width: 50%;
    font-weight: 700;
`

const StickersMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 5rem;
`

const CratesDiv = styled.div`
    overflow: auto;
    height: 600px;
    width: 25%;
    display:flex;
    gap: 0.5rem;
    flex-direction: column;
`

const CrateButton = styled.button`
    background-color: #AF75F9;
    color: #000;
    font-weight: 700;
    border: none;
    padding: 0.5rem 0;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #281F32;
      transition: 0.2s;
    }
`

const StickersDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    width:70%;
    gap: 1rem;
`

const StickerCard = styled.div`
    width: 25%;
    background-color: #281F32;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 400px;
`

const StickerCardHeader = styled.div`
  height: 20%;
  text-align: center;
`
const StickerImage = styled.img` 
`


const Stickers = () => {
  const { data, loading, error } = useFetchSticker('https://bymykel.github.io/CSGO-API/api/en/stickers.json');
  const [crate, setCrate] = useState("EMS Katowice 2014 Legends");

  if (loading) return <Loading />;
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
      {/* <pre>{JSON.stringify(filteredStickers, null, 2)}</pre>  */}
      <StickersTitle>Stickers</StickersTitle>
      <StickersHeader>{crate}</StickersHeader>
      <StickersMain>
        <CratesDiv>
          {uniqueCrateNames.map((crateName, index) => (
            <CrateButton key={index} onClick={() => handleCrateSelection(crateName)}>
              <p>{crateName}</p>

            </CrateButton>
          ))}
        </CratesDiv>
        <StickersDiv>
          {filteredStickers?.map(sticker => (
            <StickerCard key={sticker.id}>
              <StickerCardHeader>
                  <p>{sticker.name.replace("Sticker |", "")}</p>
                  <p style={{ color: sticker.rarity.color }}>{sticker.rarity.name}</p>
              </StickerCardHeader>
              <StickerImage src={sticker.image} alt={sticker.name} />
            </StickerCard>
          ))}
        </StickersDiv>
      </StickersMain>
    </>
  );
};

export default Stickers;
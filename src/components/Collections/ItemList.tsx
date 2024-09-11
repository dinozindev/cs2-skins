import React, { useState } from 'react';

// Tipo para um item
interface Item {
  id: number;
  title: string;
  details: string;
}

// Dados de exemplo
const items: Item[] = [
  { id: 1, title: 'Item 1', details: 'Detalhes do Item 1' },
  { id: 2, title: 'Item 2', details: 'Detalhes do Item 2' },
  { id: 3, title: 'Item 3', details: 'Detalhes do Item 3' }
];

const ItemList: React.FC = () => {
  // Estado para o ID do item selecionado
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  // Função para lidar com o clique em um item
  const handleItemClick = (id: number) => {
    setSelectedItemId(id);
  };

  return (
    <div>
      <div className="item-list">
        {items.map(item => (
          <div
            key={item.id}
            className="item"
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="item-details">
        {items
          .filter(item => item.id === selectedItemId)
          .map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
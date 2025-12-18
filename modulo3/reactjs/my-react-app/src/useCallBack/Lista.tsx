import { useCallback } from 'react';

interface ListaProps {
  items: string[];
}

export default function Lista({ items }: ListaProps) {
  const handleClick = useCallback((index: number) => {
    console.log("Resultado:", index * 2);
  }, []);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>
          <button onClick={() => handleClick(index)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

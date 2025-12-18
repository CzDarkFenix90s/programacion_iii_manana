import { memo } from 'react';

interface BotonMemoProps {
  onClick: () => void;
}

const BotonMemo = memo({ onClick }: BotonMemoProps) => {
  console.log("Render Botón");
  return <button onClick={onClick}>Botón memoizado</button>;
};

export default BotonMemo;

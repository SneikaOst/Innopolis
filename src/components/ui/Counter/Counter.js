import { useState } from 'react';
import CardButton from '../CardButton';

function Counter() {
    const [count, setCount] = useState(0);


  return (
    <>
      <div className="counter__header">{count} товаров</div>
      <CardButton 
        onClick={() => setCount(count + 1)}
        >
      </CardButton>

    </>
  );
}

export default Counter;
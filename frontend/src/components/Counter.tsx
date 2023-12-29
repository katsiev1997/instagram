import React from 'react';
import cls from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const decr = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className={cls.counter}>
      <button onClick={inc}>Increment "+"</button>
      <h1>{count}</h1>
      <button onClick={decr}>Decrement "-"</button>
    </div>
  );
};

export default Counter;

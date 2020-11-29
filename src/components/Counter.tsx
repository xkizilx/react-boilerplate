import React from 'react';

type Props = {
  value: number;
  add: (n: number) => void;
  addAsync: (n: number) => void;
};

const Counter = ({ value, add, addAsync }: Props): JSX.Element => (
  <>
    <h1>{value}</h1>
    <button onClick={() => add(1)}>increment</button>
    <button onClick={() => add(-1)}>decrement</button>
    <button onClick={() => addAsync(1)}>increment async</button>
    <button onClick={() => addAsync(-1)}>decrement async</button>
  </>
);

export default Counter;

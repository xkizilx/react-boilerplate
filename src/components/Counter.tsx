import React from 'react';

type Props = {
  value: number;
  add: (n: number) => void;
};

const Counter = ({ value, add }: Props): JSX.Element => (
  <>
    <h1>{value}</h1>
    <button onClick={() => add(1)}>increment</button>
    <button onClick={() => add(-1)}>decrement</button>
  </>
);

export default Counter;

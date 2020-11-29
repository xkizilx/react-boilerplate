import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, selectCounter } from '../store/reducers/counter';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector(selectCounter);

  return (
    <>
      <h1>{state.value}</h1>
      <button onClick={() => dispatch(add(1))}>increment</button>
      <button onClick={() => dispatch(add(-1))}>decrement</button>
    </>
  );
};

export default Counter;

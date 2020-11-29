import { State } from '../store';
import { counterAdd, counterAddAsync } from '../actions/counter';
import { connect, ConnectedProps } from 'react-redux';
import Counter from '../components/Counter';
import React from 'react';

const mapState = ({ counter }: State) => ({
  counter,
});

const mapDispatch = {
  counterAdd,
  counterAddAsync,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const CounterPage = ({ counter, counterAdd, counterAddAsync }: Props) => (
  <Counter value={counter.value} add={counterAdd} addAsync={counterAddAsync} />
);

export default connector(CounterPage);

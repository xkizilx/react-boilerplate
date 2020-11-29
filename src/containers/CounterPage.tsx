import { State } from '../store';
import { add, addAsync } from '../actions/counter';
import { connect, ConnectedProps } from 'react-redux';
import Counter from '../components/Counter';
import React from 'react';

const mapState = ({ counter }: State) => ({
  counter,
});

const mapDispatch = {
  add,
  addAsync,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const CounterPage = ({ counter, add, addAsync }: Props) => (
  <Counter value={counter.value} add={add} addAsync={addAsync} />
);

export default connector(CounterPage);

import { State } from '../../store';
import { add } from '../../store/reducers/counter';
import { connect, ConnectedProps } from 'react-redux';
import Counter from '../../components/Counter';
import React from 'react';

const mapState = ({ counter }: State) => ({
  counter,
});

const mapDispatch = {
  add,
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const CounterPage = ({ counter, add }: Props) => <Counter value={counter.value} add={add} />;

export default connector(CounterPage);

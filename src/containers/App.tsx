import React, { ReactNode } from 'react';
import './App.scss';
import { State } from '../store';
import { connect, ConnectedProps } from 'react-redux';

const mapState = ({ common }: State) => ({
  common,
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector> & {
  children: ReactNode;
};

const App = ({ common, children }: Props): JSX.Element => (common.loading > 0 ? <h1>Loading...</h1> : <>{children}</>);

export default connector(App);

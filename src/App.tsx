import React, { ReactNode } from 'react';
import './App.css';

type Props = {
  children: ReactNode;
};

const App = ({ children }: Props): JSX.Element => <>{children}</>;

export default App;

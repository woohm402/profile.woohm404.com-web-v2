import React from 'react';

import Home from './components/Home/Home';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
};

export default App;

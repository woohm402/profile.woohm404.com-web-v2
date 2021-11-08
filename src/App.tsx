import React, { useEffect } from 'react';

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import Home from './components/Home/Home';

import styles from './App.module.scss';

ReactGA.initialize('G-S5E2X3FX3D');

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(
      location.pathname + location.search);
  }, [location.pathname, location.search]);

  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
};

export default App;

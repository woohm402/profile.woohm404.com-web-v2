import React from 'react';

import Container from '../../component-system/Container/Container';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Container>
        <h1 className={styles.nameDesc}>
          Hi, I{"'"}m <b className={styles.nameAnimated}>Hyunmin Woo</b>,
        </h1>
        <h1 className={styles.nameDesc}>a frontend developer.</h1>
      </Container>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Container>
        <h1>Contact</h1>
        <nav></nav>
      </Container>
    </div>
  );
};

export default Home;

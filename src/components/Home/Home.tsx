import React from 'react';

import { IoMailSharp, ImGithub, ImBlog } from 'react-icons/all';

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
        <h1 style={{ textAlign: 'center' }}>Contact</h1>
        <nav className={styles.contacts}>
          <IoMailSharp className={styles.contactIcon} onClick={() => window.open('mailto:woohm404@gmail.com', '_blank')} />
          <ImGithub className={styles.contactIcon} onClick={() => window.open('https://github.com/woohm402', '_blank')} />
          <ImBlog className={styles.contactIcon} onClick={() => window.open('https://velog.io/@woohm402', '_blank')} />
        </nav>
      </Container>
    </div>
  );
};

export default Home;

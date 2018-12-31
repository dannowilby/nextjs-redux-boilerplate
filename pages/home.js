import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';

import styles from './styles.scss';

const Home = () => (
  <Container className="text-center my-4">
    <Link prefetch href='/'><a>back</a></Link>
  </Container>
);

export default Home;

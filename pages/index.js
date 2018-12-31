import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import styles from './styles.scss';

const Index = ({ num, inc }) => (
  <Container className="text-center my-4">
    <h3>This is a boilerplate.</h3>
    <Link prefetch href='/home'><a>another page</a></Link>
  </Container>
);

export default connect()(Index);

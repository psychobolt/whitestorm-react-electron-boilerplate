import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import World from './World';
import * as styles from './App.style';

const Container = styled.div`${styles.container}`;
const HeaderContainer = styled.div`${styles.header}`;
const View = World.extend`${styles.worldContainer}`;

export default props => (
  <Container>
    <HeaderContainer>
      <Header centered />
    </HeaderContainer>
    <View {...props} />
  </Container>
);

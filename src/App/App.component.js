import React from 'react';

import Header from './Header';
import World from './World';
import styles from './App.style';

export default (props) => (
  <div style={styles.container}>
    <div style={styles.header}><Header centered /></div>
    <World style={{ container: styles.worldContainer }} {...props} />
  </div>
);

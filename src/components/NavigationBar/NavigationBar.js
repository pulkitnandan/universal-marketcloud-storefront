import React from 'react';
import { IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MenuDrawer from './MenuDrawer';
import ActionButtons from './ActionButtons';

import config from '../../config';
// import styles from './NavigationBar.scss';

const NavigationBar = () => {
  return (
    <AppBar
      title={<IndexLink to="/">{config.app.title}</IndexLink>}
      onTitleTouchTap={() => console.log('onTouch works!')}
      onLeftIconButtonTouchTap={() => console.log('Menu touch!')}
      iconElementLeft={<MenuDrawer />}
      iconElementRight={<ActionButtons />} />
  );
};

export default NavigationBar;

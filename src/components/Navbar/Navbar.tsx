// Navbar.tsx
import React from 'react';
import { View } from 'react-native';
import NavbarButton from '../NavbarButton/NavbarButton';

const Navbar: React.FC = () => {

    const homeImagePath = require('../../assets/navbar/home.png');
    const homeColoredImagePath = require('../../assets/navbar/colored-home.png');

    const searchImagePath = require('../../assets/navbar/search.png');
    const searchColoredImagePath = require('../../assets/navbar/colored-search.png');

    const cameraImagePath = require('../../assets/navbar/camera.png');
    const cameraColoredImagePath = require('../../assets/navbar/colored-camera.png');

    const bellImagePath = require('../../assets/navbar/bell.png');
    const bellColoredImagePath = require('../../assets/navbar/colored-bell.png');

    const hamburgerImagePath = require('../../assets/navbar/hamburger.png');
    const hamburgerColoredImagePath = require('../../assets/navbar/colored-hamburger.png');


  return (
    <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-around' }}>
      <NavbarButton screenName="Home" iconName={homeImagePath} iconName2={homeColoredImagePath} />
      <NavbarButton screenName="Feed" iconName={searchImagePath} iconName2={searchColoredImagePath} />
      <NavbarButton screenName="" iconName={cameraImagePath} iconName2={cameraColoredImagePath} />
      <NavbarButton screenName="" iconName={bellImagePath} iconName2={bellColoredImagePath} />
      <NavbarButton screenName="" iconName={hamburgerImagePath} iconName2={hamburgerColoredImagePath} />
    </View>
  );
}

export default Navbar;

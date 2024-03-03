// Navbar.tsx
import React from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import NavbarButton from '../NavbarButton';
import HamburgerMenu from '../HamburgerMenu';
import { useHamburger } from '../../contexts/HamburgerContext';

const Navbar: React.FC = () => {

    const homeImagePath = require('../../assets/navbar/home.png');
    const searchImagePath = require('../../assets/navbar/search.png');
    const cameraImagePath = require('../../assets/navbar/camera.png');
    const bellImagePath = require('../../assets/navbar/bell.png');
    const hamburgerImagePath = require('../../assets/navbar/hamburger.png');

    const { hamburginho, setHamburginho } = useHamburger();

    const openHamburgerMenu = () => {
      setHamburginho(true);
    };
  
    const closeHamburgerMenu = () => {
      setHamburginho(false);
    };

  return (
    <>
    <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white' }}>
      <NavbarButton screenName="Home" iconName={homeImagePath}/>
      <NavbarButton screenName="Search" iconName={searchImagePath} />
      <NavbarButton screenName="PictureFeed" iconName={cameraImagePath}/>
      <NavbarButton screenName="Notification" iconName={bellImagePath}/>
      <NavbarButton screenName="Configuration" iconName={hamburgerImagePath} hamburger={true} onPress={openHamburgerMenu} />
    </View>
    <Modal visible={hamburginho} transparent animationType="none">
      <View style={styles.modalContainer}>
        <HamburgerMenu closeMenu={closeHamburgerMenu} />
      </View>
    </Modal>

    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width * 1,
  },
});

export default Navbar;

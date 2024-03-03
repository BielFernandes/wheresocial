import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View, ImageSourcePropType } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Configuration } from '../../screens';
import { useHamburger } from '../../contexts/HamburgerContext';

interface NavbarButtonProps {
  screenName?: string;
  iconName: ImageSourcePropType;
  hamburger?: boolean;
  onPress?: () => void; 
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ screenName, iconName, hamburger }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { hamburginho, setHamburginho } = useHamburger();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(route.name === screenName);
  }, [route, screenName]);

  const handlePress = () => {
    if (screenName) {
      navigation.navigate(screenName as never);
    }
  };

  const handlePressMenuBar = () => {
    setHamburginho(true);
  };

  return (
    <TouchableOpacity onPress={hamburger ? handlePressMenuBar : handlePress} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ padding: 10, borderRadius: 10 }}>
        <Image
          source={iconName}
          style={{ width: 30, height: 30, tintColor: isActive ? '#5C80BC' : '#4D5061' }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavbarButton;


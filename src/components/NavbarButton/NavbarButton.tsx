// NavbarButton.tsx
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View, Text, ImageSourcePropType } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface NavbarButtonProps {
  screenName: string;
  iconName: ImageSourcePropType;
  iconName2: ImageSourcePropType;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ screenName, iconName, iconName2 }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(route.name === screenName);
  }, [route, screenName]);

  const handlePress = () => {
    navigation.navigate(screenName as never);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ padding: 10, borderRadius: 10 }}>
        <Image
          source={!isActive ? iconName : iconName2}
          style={{ width: 30, height: 30, tintColor: isActive ? '#5C80BC' : '#4D5061' }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default NavbarButton;

import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const pgScreenTres = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.titleT}>Pagina 3 Screen</Text>
      <Button title="Ir ala página 2" onPress={() => navigation.pop()} />
      <Button title="Ir al home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const pgScreenDos = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Pagina 3',
      headerBackTitle: ''
    })

  }, [])
  
  return (
    <View>
      <Text style={styles.titleT}>Pagina 2 Screen</Text>
      <Button
        title="Ir ala página 3"
        onPress={() => navigation.navigate('pgScreenTres')}
      />
    </View>
  );
};

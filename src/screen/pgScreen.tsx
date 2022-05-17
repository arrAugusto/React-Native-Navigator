import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const pgScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleT}>Pagina 1 Screen</Text>
      <Button
        title="Ir ala página 2"
        onPress={() => navigation.navigate('pgScreenDos')}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.buttonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Augusto',
            })
          }>
          <Text style={styles.textT}>Augusto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.textT}>Maria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Fernando',
            })
          }>
          <Text style={styles.textT}>Fernando</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

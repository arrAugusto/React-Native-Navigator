import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import { RootStackParamas } from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

interface RouterParams {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<RootStackParamas, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleT}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {pgScreen} from '../screen/pgScreen';
import {pgScreenDos} from '../screen/pgScreenDos';
import {pgScreenTres} from '../screen/pgScreenTres';
import { PersonaScreen } from '../screen/PersonaScreen';


export type RootStackParamas ={
  pgScreen: undefined,
  pgScreenDos: undefined,
  pgScreenTres: undefined,
  PersonaScreen: { id:number, name: string },
}

const Stack = createStackNavigator<RootStackParamas>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='pgScreen'
      screenOptions={{
        headerStyle:{
          elevation: 0
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="pgScreen" options={{title: 'Página 1'}} component={pgScreen} />
      <Stack.Screen name="pgScreenDos" options={{title: 'Página 2'}} component={pgScreenDos} />
      <Stack.Screen name="pgScreenTres" options={{title: 'Página 3'}} component={pgScreenTres} />
      <Stack.Screen name="PersonaScreen" options={{title: 'Persona'}} component={PersonaScreen} />
    </Stack.Navigator>
  );
};

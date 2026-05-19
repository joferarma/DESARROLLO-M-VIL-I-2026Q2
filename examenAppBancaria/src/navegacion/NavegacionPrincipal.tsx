import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import InicioPantalla from '../pantallas/InicioPantalla';
import TransferenciaPantalla from '../pantallas/TransferenciaPantalla';
import HistorialPantalla from '../pantallas/HistorialPantalla';

const Tab = createBottomTabNavigator();

const NavegacionPrincipal = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Inicio"
          component={InicioPantalla}
        />

        <Tab.Screen
          name="Transferencias"
          component={TransferenciaPantalla}
        />

        <Tab.Screen
          name="Historico"
          component={HistorialPantalla}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavegacionPrincipal;
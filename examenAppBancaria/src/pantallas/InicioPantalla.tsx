import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Balance from '../componentes/Balance';

import BotonDeposito from '../componentes/BotonDeposito';

import BotonRetiro from '../componentes/BotonRetiro';

import ListaTransacciones from '../componentes/ListaTransacciones';

const InicioPantalla = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Bienvenido usuario
      </Text>

      <Balance />

      <BotonDeposito />

      <BotonRetiro />

      <ListaTransacciones />
    </View>
  );
};

export default InicioPantalla;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
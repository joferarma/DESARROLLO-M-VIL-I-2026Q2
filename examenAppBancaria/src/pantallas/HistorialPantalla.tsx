import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ListaTransacciones from '../componentes/ListaTransacciones';
import { BancoContext } from '../context/BancoContext';

const HistorialPantalla = () => {
  const { transacciones } = useContext(BancoContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Historial
      </Text>

      <Text style={styles.total}>
        Total de transacciones:
        {' '}
        {transacciones.length}
      </Text>

      <ListaTransacciones />
    </View>
  );
};

export default HistorialPantalla;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  total: {
    fontSize: 18,
    marginBottom: 20,
  },
});
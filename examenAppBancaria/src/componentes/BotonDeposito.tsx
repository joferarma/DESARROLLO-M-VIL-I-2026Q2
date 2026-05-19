import React, { useContext } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { BancoContext } from '../context/BancoContext';

const BotonDeposito = () => {
  const { depositarSaldo } =
    useContext(BancoContext);

  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={depositarSaldo}
    >
      <Text style={styles.texto}>
        Depositar L.500
      </Text>
    </TouchableOpacity>
  );
};

export default BotonDeposito;

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#0984e3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
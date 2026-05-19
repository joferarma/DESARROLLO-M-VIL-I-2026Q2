import React, { useContext } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { BancoContext } from '../context/BancoContext';

const BotonRetiro = () => {
  const { retirarSaldo } =
    useContext(BancoContext);

  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={retirarSaldo}
    >
      <Text style={styles.texto}>
        Retirar L.200
      </Text>
    </TouchableOpacity>
  );
};

export default BotonRetiro;

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#d63031',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
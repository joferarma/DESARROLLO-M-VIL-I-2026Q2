import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BancoContext } from '../context/BancoContext';

const Balance = () => {
  const { saldo } = useContext(BancoContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Saldo actual</Text>

      <Text style={styles.saldo}>
        L. {saldo}
      </Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#dfe6e9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
  },

  saldo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
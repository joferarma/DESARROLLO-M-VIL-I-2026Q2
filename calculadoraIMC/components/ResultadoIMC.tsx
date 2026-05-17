import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IMCContext } from '../context/IMCContext';

const ResultadoIMC = () => {
  const { imc, clasificacion } = useContext(IMCContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Resultado</Text>

      <Text style={styles.imc}>
        {imc.toFixed(2)}
      </Text>

      <Text style={styles.clasificacion}>
        {clasificacion}
      </Text>
    </View>
  );
};

export default ResultadoIMC;

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 30,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  imc: {
    fontSize: 40,
    marginVertical: 10,
    color: '#4CAF50',
  },

  clasificacion: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
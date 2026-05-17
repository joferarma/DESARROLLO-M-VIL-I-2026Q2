import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text } from 'react-native';

import { IMCProvider } from './context/IMCContext';

import FormularioIMC from './components/FormularioIMC';
import ResultadoIMC from './components/ResultadoIMC';

export default function App() {
  return (
    <SafeAreaProvider>
      <IMCProvider>
        <SafeAreaView style={styles.contenedor}>
          <Text style={styles.titulo}>
            Calculadora IMC
          </Text>

          <FormularioIMC />

          <ResultadoIMC />
        </SafeAreaView>
      </IMCProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import FormularioEstudiante from './componentes/FormularioEstudiante';
import ListaEstudiantes from './componentes/ListaEstudiantes';

import { EstudiantesProvider } from './contexto/EstudiantesContexto';

export default function App() {
  return (
    <SafeAreaProvider>
      <EstudiantesProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}>
            Lista de Estudiantes
          </Text>

          <FormularioEstudiante />

          <ListaEstudiantes />
        </SafeAreaView>
      </EstudiantesProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

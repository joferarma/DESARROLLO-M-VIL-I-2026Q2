import React, { useContext, useState } from 'react';

import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { EstudiantesContexto } from '../contexto/EstudiantesContexto';

const FormularioEstudiante = () => {
  const [nombre, setNombre] = useState('');

  const { agregarEstudiante } = useContext(
    EstudiantesContexto
  );

  const guardarEstudiante = () => {
    if (nombre.trim() === '') return;

    agregarEstudiante(nombre);

    setNombre('');
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        placeholder="Ingrese el nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <Button
        title="Agregar estudiante"
        onPress={guardarEstudiante}
      />
    </View>
  );
};

export default FormularioEstudiante;

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
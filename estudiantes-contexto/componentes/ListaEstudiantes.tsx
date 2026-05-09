import React, { useContext } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { EstudiantesContexto } from '../contexto/EstudiantesContexto';

const ListaEstudiantes = () => {
  const {
    estudiantes,
    eliminarEstudiante,
  } = useContext(EstudiantesContexto);

  return (
    <FlatList
      data={estudiantes}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View style={styles.tarjeta}>
          <Text style={styles.texto}>
            {index + 1}. {item.nombre}
          </Text>

          <TouchableOpacity
            style={styles.botonEliminar}
            onPress={() =>
              eliminarEstudiante(item.id)
            }
          >
            <Text style={styles.textoBoton}>
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ListaEstudiantes;

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#dfe6e9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  texto: {
    fontSize: 18,
  },

  botonEliminar: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { IMCContext } from '../context/IMCContext';

const FormularioIMC = () => {
  const {
    peso,
    altura,
    aumentarPeso,
    disminuirPeso,
    aumentarAltura,
    disminuirAltura,
  } = useContext(IMCContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Peso</Text>

      <Text style={styles.valor}>{peso} KG</Text>

      <View style={styles.filaBotones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={disminuirPeso}
        >
          <Text style={styles.textoBoton}>-1 KG</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={aumentarPeso}
        >
          <Text style={styles.textoBoton}>+1 KG</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Altura</Text>

      <Text style={styles.valor}>
        {altura.toFixed(2)} M
      </Text>

      <View style={styles.filaBotones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={disminuirAltura}
        >
          <Text style={styles.textoBoton}>-1 CM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={aumentarAltura}
        >
          <Text style={styles.textoBoton}>+1 CM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormularioIMC;

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  valor: {
    fontSize: 28,
    marginVertical: 10,
  },

  filaBotones: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#2196F3',
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
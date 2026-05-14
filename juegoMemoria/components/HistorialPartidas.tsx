import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { JuegoContext } from '../context/JuegoContext';

export default function HistorialPartidas() {
  const { partidasJugadas } = useContext(JuegoContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Historial</Text>

      <Text style={styles.texto}>
        Partidas jugadas: {partidasJugadas}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '80%',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  texto: {
    fontSize: 18,
  },
});
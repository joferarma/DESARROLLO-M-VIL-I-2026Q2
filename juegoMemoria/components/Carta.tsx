import { Pressable, StyleSheet, Text } from 'react-native';
import { CartaTipo } from '../types/types';

interface Props {
  carta: CartaTipo;
  alPresionar: () => void;
}

export default function Carta({ carta, alPresionar }: Props) {
  return (
    <Pressable style={styles.carta} onPress={alPresionar}>
      <Text style={styles.texto}>
        {carta.descubierta ? carta.valor : '?'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  carta: {
    width: 70,
    height: 70,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },

  texto: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
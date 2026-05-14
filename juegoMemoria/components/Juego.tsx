import { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Carta from './Carta';
import HistorialPartidas from './HistorialPartidas';

import { CartaTipo } from '../types/types';
import { JuegoContext } from '../context/JuegoContext';

export default function Juego() {
  const { aumentarPartidas } = useContext(JuegoContext);

  const [juegoIniciado, setJuegoIniciado] = useState(false);

  const [cartas, setCartas] = useState<CartaTipo[]>([]);

  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<CartaTipo[]>([]);

  const crearCartas = () => {
    const valores = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];

    const cartasMezcladas = valores
      .sort(() => Math.random() - 0.5)
      .map((valor, indice) => ({
        id: indice,
        valor,
        descubierta: false,
      }));

    setCartas(cartasMezcladas);
  };

  const iniciarJuego = () => {
    crearCartas();
    setJuegoIniciado(true);
    aumentarPartidas();
  };

  const seleccionarCarta = (carta: CartaTipo) => {
    if (carta.descubierta || cartasSeleccionadas.length === 2) {
      return;
    }

    const nuevasCartas = cartas.map((item) =>
      item.id === carta.id
        ? { ...item, descubierta: true }
        : item
    );

    setCartas(nuevasCartas);

    const nuevasSeleccionadas = [...cartasSeleccionadas, {
      ...carta,
      descubierta: true,
    }];

    setCartasSeleccionadas(nuevasSeleccionadas);
  };

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      const [primera, segunda] = cartasSeleccionadas;

      if (primera.valor === segunda.valor) {
        setCartasSeleccionadas([]);

        const todasDescubiertas = cartas.every(
          (carta) =>
            carta.descubierta ||
            carta.id === primera.id ||
            carta.id === segunda.id
        );

        if (todasDescubiertas) {
          setTimeout(() => {
            Alert.alert('Ganaste!', 'Todos los pares fueron encontrados!');
          }, 500);
        }
      } else {
        setTimeout(() => {
          const cartasOcultas = cartas.map((item) => {
            if (
              item.id === primera.id ||
              item.id === segunda.id
            ) {
              return {
                ...item,
                descubierta: false,
              };
            }

            return item;
          });

          setCartas(cartasOcultas);

          setCartasSeleccionadas([]);

          Alert.alert(
            'Perdiste',
            'Las cartas no son iguales...'
          );
        }, 1000);
      }
    }
  }, [cartasSeleccionadas]);

  return (
    <View style={styles.contenedor}>
      {!juegoIniciado ? (
        <>
          <Button
            title="Iniciar juego"
            onPress={iniciarJuego}
          />

          <HistorialPartidas />
        </>
      ) : (
        <>
          <Text style={styles.titulo}>
            Juego de Memoria
          </Text>

          <View style={styles.tablero}>
            {cartas.map((carta) => (
              <Carta
                key={carta.id}
                carta={carta}
                alPresionar={() => seleccionarCarta(carta)}
              />
            ))}
          </View>
        </>
      )}
    </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  tablero: {
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
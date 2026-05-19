import React, { useContext, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { BancoContext } from '../context/BancoContext';

const TransferenciaPantalla = () => {
  const { transferirSaldo } =
    useContext(BancoContext);

  const [cuenta, setCuenta] = useState('');

  const [destinatario, setDestinatario] =
    useState('');

  const [monto, setMonto] = useState('');

  const realizarTransferencia = () => {
    const montoNumero = parseFloat(monto);

    if (
      cuenta.trim() === '' ||
      destinatario.trim() === '' ||
      monto.trim() === ''
    ) {
      Alert.alert(
        'Error, complete todos los campos'
      );

      return;
    }

    if (isNaN(montoNumero) || montoNumero <= 0) {
      Alert.alert(
        'Error, ingrese un monto valido'
      );

      return;
    }

    const resultado = transferirSaldo(
      cuenta,
      destinatario,
      montoNumero
    );

    if (resultado === true) {
      Alert.alert(
        'Transferencia completada!',
        'El dinero fue transferido correctamente'
      );

      setCuenta('');
      setDestinatario('');
      setMonto('');
    } else {
      Alert.alert(
        'Saldo insuficiente para completar la transaccion'
      );
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Transferencias
      </Text>

      <TextInput
        placeholder="Numero de cuenta"
        style={styles.input}
        value={cuenta}
        onChangeText={setCuenta}
      />

      <TextInput
        placeholder="Nombre destinatario"
        style={styles.input}
        value={destinatario}
        onChangeText={setDestinatario}
      />

      <TextInput
        placeholder="Monto"
        style={styles.input}
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={realizarTransferencia}
      >
        <Text style={styles.textoBoton}>
          Transferir saldo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferenciaPantalla;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#b2bec3',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },

  boton: {
    backgroundColor: '#00b894',
    padding: 15,
    borderRadius: 10,
  },

  textoBoton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
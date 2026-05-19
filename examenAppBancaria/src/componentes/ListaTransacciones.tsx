import React, { useContext } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { BancoContext } from '../context/BancoContext';

const ListaTransacciones = () => {
  const { transacciones } = useContext(BancoContext);

  return (
    <FlatList
      data={transacciones}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.descripcion}</Text>
        </View>
      )}
    />
  );
};

export default ListaTransacciones;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 10,
    borderRadius: 10,
  },
});
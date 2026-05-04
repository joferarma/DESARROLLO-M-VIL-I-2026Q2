import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PropsHeader = {
  nombre: string;
  ocupacion: string;
};

const UserHeader: React.FC<PropsHeader> = ({ nombre, ocupacion }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ocupacion}>{ocupacion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ocupacion: {
    fontSize: 16,
    color: "gray",
  },
});

export default UserHeader;
import React from "react";
import { View, StyleSheet } from "react-native";
import UserHeader from "./UserHeader";
import UserDetails from "./UserDetails";

type Usuario = {
  nombre: string;
  edad: number;
  ciudad: string;
  ocupacion: string;
};

type PropsProfile = {
  usuario: Usuario;
};

const UserProfile: React.FC<PropsProfile> = ({ usuario }) => {
  return (
    <View style={styles.contenedor}>
      <UserHeader
        nombre={usuario.nombre}
        ocupacion={usuario.ocupacion}
      />
      <UserDetails
        edad={usuario.edad}
        ciudad={usuario.ciudad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
  },
});

export default UserProfile;
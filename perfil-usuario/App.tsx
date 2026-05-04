import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from "./components/UserProfile";

const App = () => {
  const usuarios = [
    {
      nombre: "Fernando",
      edad: 22,
      ciudad: "Tegucigalpa",
      ocupacion: "Estudiante",
    },
    {
      nombre: "Ana",
      edad: 30,
      ciudad: "San Pedro Sula",
      ocupacion: "Ingeniera",
    },
    {
      nombre: "Luis",
      edad: 25,
      ciudad: "La Ceiba",
      ocupacion: "Diseñador",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        {usuarios.map((usuario, index) => (
          <UserProfile key={index} usuario={usuario} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
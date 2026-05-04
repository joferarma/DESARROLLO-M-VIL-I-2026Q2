import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PropsDetails = {
  edad: number;
  ciudad: string;
};

const UserDetails: React.FC<PropsDetails> = ({ edad, ciudad }) => {
  return (
    <View>
      <Text>Edad: {edad}</Text>
      <Text>Ciudad: {ciudad}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserDetails;
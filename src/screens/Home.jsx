import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import commonStyles from "../styles/commonStyles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text s>en up App.js to start working on your app!Op</Text>
      <StatusBar style="auto" />
      <View style={commonStyles.button}>
        <Button
          onPress={() => navigation.navigate("ViewScreen")}
          title="Go To View"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

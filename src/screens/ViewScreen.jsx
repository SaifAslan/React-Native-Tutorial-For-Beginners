import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import commonStyles from "../styles/commonStyles";

const ViewScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}></View>
      <View style={styles.lowerView}></View>
      <View style={{ ...commonStyles.button, backgroundColor: "red" , flex :2}}>
        <Button onPress={()=>props.navigation.navigate("TextInputScreen")} title="Go To Text Input" />
      </View>
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection:"row",
    // alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 20,
    flexDirection:"row"
  },
  upperView: {
    backgroundColor: "blue",
    flex:2
  },
  lowerView: {
    backgroundColor: "green",
    flex:1
  },
});

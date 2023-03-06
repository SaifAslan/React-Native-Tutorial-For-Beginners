import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import ColoredBox from "../components/ColoredBox";
import FlatListComponent from "../components/FlatListComponent";

const colorList = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
];

const TextInputScreen = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState(colorList[0]); // state is set asynchronously
  const [colors, setColors] = useState(colorList);

  useEffect(() => {
    console.log(color);
  }, [color]);

  function handleColorChange() {
    setColors((prevState) => {
      return [...prevState, text];
    });
    setText("");
  }

  console.log("text: ", text);

  return (
    <View>
      <View style={styles.formContainer}>
        <TextInput
          value={text}
          onChangeText={(changedText) => setText(changedText)}
          style={styles.input}
        />
        {/* notice how i didn't write onPress={handleColorChange()} */}
        <Button onPress={handleColorChange} title="add" />
      </View>
      <View style={styles.picker}>
        <Picker
          selectedValue={color}
          onValueChange={(itemValue, itemIndex) => setColor(itemValue)}
        >
          {colors.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />;
          })}
          {/* {colors.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />;
          })} */}
          {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>
      </View>
      <ColoredBox color={color} />
      <FlatListComponent colors={colors} />
      {/* if it is inside your assets folder use require */}
      <Image source={require("../../assets/icon.png")} />
      {/* if it is an image from a link use {uri:"imageLink"}*/}
      <Image source={{ uri: "" }} />
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
  },
  formContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  picker: {
    width: "100%", //notice here that when you assign a value using percentage, you need to include ""
    borderWidth: 1, //notice here that when you assign a value using pixels, you need only to include the pixels value
    borderColor: "black",
  },
});

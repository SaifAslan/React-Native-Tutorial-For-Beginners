import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import ViewScreen from "./src/screens/ViewScreen";
import TextInputScreen from "./src/screens/TextInputScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewScreen" component={ViewScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


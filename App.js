import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import { MyStack } from "./src/navigator/Stack";


const Tab  = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})

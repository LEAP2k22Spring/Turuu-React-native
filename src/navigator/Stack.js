import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from "../screen/Detail";
import ButtomTabNavigator from "./Button";

const Stack = createStackNavigator();
export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buttom" component={ButtomTabNavigator} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

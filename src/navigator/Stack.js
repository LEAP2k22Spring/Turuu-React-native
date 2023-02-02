import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DetailScreen } from "../screen/Detail";
import ButtomTabNavigator from "./Button";

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export const MyStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Buttom" component={ButtomTabNavigator} options={{ title: "My home" }} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
    </Drawer.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen name="Buttom" component={ButtomTabNavigator} />
    //   <Stack.Screen name="Detail" component={DetailScreen} />
    // </Stack.Navigator>
  );
};

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screen/Home";

const Tab = createBottomTabNavigator();
export default function ButtomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

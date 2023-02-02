import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screen/Home";
import { NavigatorRoutes } from "../enum";

const Tab = createBottomTabNavigator();
export default function ButtomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NavigatorRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: NavigatorRoutes.Home,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={NavigatorRoutes.Profile}
        component={HomeScreen}
        options={{
          tabBarLabel: NavigatorRoutes.Profile,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

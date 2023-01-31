import { Button, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go to detail screen"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      ></Button>
    </View>
  );
};

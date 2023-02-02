import { Button, Text, View, FlatList, StyleSheet } from "react-native";

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
      <View>
        <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

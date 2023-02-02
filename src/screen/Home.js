import { Button, StyleSheet, Text, View, FlatList, Image } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const [json, setJson] = useState([]);
  const fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/products?limit=10");
    setJson(data.data.products);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go to detail screen"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      ></Button>
      <View sytle={styles.flatList}>
        {json && (
          <FlatList
            data={json}
            renderItem={({ item }) => <Item url={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

const Item = ({ url }) => {
  return (
    <View>
      <FlatList
        data={url.images}
        renderItem={({ item }) => (
          <Image
            style={styles.item}
            source={{ uri: item }}
            width={200}
            height={110}
            resizeMode="contain"
          />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    margin: 20,
  },
});

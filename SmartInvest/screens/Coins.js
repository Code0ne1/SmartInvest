import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { SimpleGrid } from "react-native-super-grid";
import { SectionGrid } from "react-native-super-grid";

export default function HomeScreeen(props) {
  const [items, setItems] = React.useState([
    { name: "Bitcoin", code: "#ff8c00" },
    { name: "Ethereum", code: "#9370db" },
    { name: "Tether", code: "#32cd32" },
    { name: "XRP", code: "black" },
    { name: "TRON", code: "red" },
    { name: "USD coin", code: "#4169e1" },
    { name: "Dogecoin", code: "#cd853f" },
    { name: "VeChain", code: "lime" },
  ]);
  const onPress = () => props.navigation.navigate("BitCoin");
  console.log(props);
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.itemContainer, { backgroundColor: item.code }]}
        >
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

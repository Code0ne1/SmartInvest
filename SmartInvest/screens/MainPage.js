import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function MainPage(props) {
  console.log(props);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonViev}>
          <Button
            onPress={() => props.navigation.navigate("Setting")}
            color="#2F4F4F"
            title="Go to the settings>"
          />
        </View>
        <View style={styles.buttonViev}>
          <Button
            onPress={() => props.navigation.navigate("Markets")}
            color="#2F4F4F"
            title="Go to the market>"
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text>Место для новостей</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "#5f9ea0",
    alignItems: "left",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#ffebcd",
    alignItems: "left",
    justifyContent: "center",
  },
  container3: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginLeft: 77,
    backgroundColor: "#dcdcdc",
    borderWidth: 0.1,
    borderRadius: 100,
  },
  signUp: {
    fontSize: 20,
    fontWeight: "700",
  },
  inputWindow: {
    height: 40,
    marginTop: 13,
    borderWidth: 2,
    backgroundColor: "#DCDCDC",
    borderRadius: 6,
    width: 250,
    borderColor: "grey",
  },
  buttonViev: {
    height: 40,
    marginTop: 13,
    borderWidth: 3,
    borderRadius: 6,
    width: 250,
    borderColor: "grey",
  },
});

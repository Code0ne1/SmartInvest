import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function HomeScreeen(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>Введите номер телефона</Text>
      <TextInput
        keyboardType="numeric"
        placeholder=" +7"
        style={styles.inputWindow}
      />
      <View style={styles.buttonViev}>
        <Button
          onPress={() => props.navigation.navigate("RegistPage")}
          color="#2F4F4F"
          title="далее"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5f9ea0",
    alignItems: "center",
    justifyContent: "center",
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

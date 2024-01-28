import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function RegistPage(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>Регистрация</Text>
      <TextInput placeholder=" -Почта" style={styles.inputWindow} />
      <TextInput placeholder=" -Пароль" style={styles.inputWindow} />
      <View style={styles.buttonViev}>
        <Button
          onPress={() => props.navigation.navigate("MainPage")}
          color="#2F4F4F"
          title="OK"
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

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Checkbox, Switch } from "react-native-paper";

export default function Setting(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>Language:</Text>
      <Text>English</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        backgroundColor="#5f9ea0"
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>
      <Text>Русский</Text>
      <Switch></Switch>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5f9ea0",
    alignItems: "baseline",
    justifyContent: "flex-start",
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

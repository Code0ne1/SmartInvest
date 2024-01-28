import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Button } from "react-native-paper";
//https://api.coinbase.com/v2/exchange-rates?currency=BTC

const MyGraph = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          datasets: [
            {
              data: [5, 7, 9, 12, 6, 8, 6, 12, 20, 17, 14, 20, 18, 20, 23],
            },
          ],
        }}
        width={Dimensions.get("window").width - 1}
        height={400}
        yAxisLabel={"4233"}
        chartConfig={{
          backgroundGradientFrom: "grey",
          backgroundGradientTo: "skyblue",
          decimalPlaces: 1,
          color: (opacity = 1) => "rgba(26,255,145,1)",
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const Graph = () => {
  return (
    <SafeAreaView>
      <View>
        <MyGraph />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Graph;

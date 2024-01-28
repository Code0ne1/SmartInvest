import HomeScreen from "./screens/HomeScreeen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistPage from "./screens/RegistPage";
import { Text, View } from "react-native";
import Graph from "./screens/Graph";
import Coins from "./screens/Coins";
import Setting from "./screens/Setting";
import MainPage from "./screens/MainPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "@react-navigation/stack";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitle: "Registration" }}
          name="PhoneNum"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerTitle: "Registration" }}
          name="RegistPage"
          component={RegistPage}
        />
        <Stack.Screen name="BitCoin" component={Graph} />
        <Stack.Screen name="Markets" component={Coins} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>

    /*<NavigationContainer>
      <Tab.Navigator>
        <Tab.screen name="Coins" component={Coins} />
        <Tab.screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
    */
  );
}

export default App;

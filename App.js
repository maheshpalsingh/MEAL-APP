import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducers from "./store/reducers/meal";
enableScreens();

const rootreducer = combineReducers({
  meals: mealReducers,
});

const store = createStore(rootreducer);
const fetchFonts = () => {
  const [fontLoad, setfontLoad] = useState(false);
  if (!fontLoad) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setfontLoad(true)} />
    );
  }
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

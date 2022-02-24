import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
const CategoryGrid = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.griditem}>
      <Touchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};
const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 10,
    //elevation: 3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: "sans-serif-medium",
    fontSize: 22,
    textAlign: "right",
  },
});

module.exports = CategoryGrid;

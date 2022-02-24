import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";

const MealItem = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealitem}>
      <Touchable onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealrow, ...styles.mealheader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealrow, ...styles.mealdetails }}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealrow: { flexDirection: "row" },
  mealitem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 7,
    marginBottom: 7,
    borderColor: Colors.primary,
    borderWidth: 3,
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  mealheader: {
    height: "85%",
  },
  mealdetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,.4)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "sans-serif-medium",
    fontSize: 20,
    color: "white",

    //textAlign: "center",
  },
});

export default MealItem;

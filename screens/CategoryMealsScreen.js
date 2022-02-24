import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const CategoriesMealScreen = (props) => {
  const availableMeal = useSelector((state) => state.meals.filteredmeals);
  const categoryID = props.navigation.getParam("categoryId");
  const displayMeals = availableMeal.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );
  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No data</Text>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoriesMealScreen.navigationOptions = (navigationData) => {
  const categoryID = navigationData.navigation.getParam("categoryId");
  const selectedId = CATEGORIES.find((cat) => cat.id === categoryID);
  return { headerTitle: selectedId.title };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

module.exports = CategoriesMealScreen;

import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meal";

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const findmeal = useSelector((state) => state.meals.meals);
  const mealdata = findmeal.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ togglefav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);
  return (
    <ScrollView style={{ margin: 7 }}>
      <Image source={{ uri: mealdata.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title1}>{mealdata.duration}m</Text>
        <Text style={styles.title1}>{mealdata.complexity.toUpperCase()}</Text>
        <Text style={styles.title1}>
          {mealdata.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {mealdata.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {mealdata.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  //const mealId = navigationData.navigation.getParam("mealId");
  const toggleFavorite = navigationData.navigation.getParam("togglefav");
  const meadTitle = navigationData.navigation.getParam("mealTitle");
  //const mealdata = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: meadTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add as Favorites"
          iconName="ios-star"
          onPress={toggleFavorite}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 10,
    paddingTop: 10,
  },
  title: {
    fontFamily: "sans-serif-medium",
    fontSize: 18,
    alignSelf: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  title1: {
    fontFamily: "sans-serif-medium",
    fontSize: 14,
    alignSelf: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  listitem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 5,
  },
});

export default MealDetailScreen;

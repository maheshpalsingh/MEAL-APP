import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const fabMeal = useSelector((state) => state.meals.favoritesmeals);
  if (!fabMeal || fabMeal.length === 0) {
    return (
      <View style={styles.content}>
        <Text>Add Your Favorites</Text>
      </View>
    );
  }
  return <MealList listData={fabMeal} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: " Yours Favorites ",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

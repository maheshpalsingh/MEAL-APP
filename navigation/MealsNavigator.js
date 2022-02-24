import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontStyle: "italic",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MealsNavigator = createStackNavigator(
  {
    CategoriEs: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FabNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const tabscreenconfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tableinfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={23}
            color={tableinfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "sans-serif-medium" }}>Meals!</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FabNavigator,
    navigationOptions: {
      tabBarIcon: (tableinfo) => {
        return (
          <Ionicons name="ios-star" size={23} color={tableinfo.tintColor} />
        );
      },
      tabBarColor: Colors.accent,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "sans-serif-medium" }}>Favoritesss!</Text>
        ) : (
          "Favorites!"
        ),
    },
  },
};
const MealsfabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabscreenconfig, {
        activeColor: "white",
        shifting: false,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabscreenconfig, {
        tabBarOptions: {
          labelStyle: { fontStyle: "Lora" },
          activeColor: Colors.accent,
        },
      });

const filternav = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsfabNav,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: filternav,
  },
  {
    contentOptions: {
      labelStyle: {
        fontStyle: "normal",
      },
    },
  }
);

export default createAppContainer(MainNavigator);

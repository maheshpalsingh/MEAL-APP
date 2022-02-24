import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setfilter } from "../store/actions/meal";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filtercontainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        onValueChange={props.onChange}
        value={props.state}
      />
    </View>
  );
};
const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isgluten, setisgluten] = useState(false);
  const [islactose, setislactose] = useState(false);
  const [isvegan, setisvegan] = useState(false);
  const [isvegetarian, setisvegetarian] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenfree: isgluten,
      lactosefree: islactose,
      vegan: isvegan,
      vegetarian: isvegetarian,
    };
    dispatch(setfilter(appliedFilters));
  }, [isgluten, islactose, isvegan, isvegetarian, dispatch]);
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isgluten}
        onChange={(newValue) => {
          setisgluten(newValue);
        }}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={islactose}
        onChange={(newValue) => {
          setislactose(newValue);
        }}
      />
      <FilterSwitch
        label="Vegan"
        state={isvegan}
        onChange={(newValue) => {
          setisvegan(newValue);
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isvegetarian}
        onChange={(newValue) => {
          setisvegetarian(newValue);
        }}
      />
    </View>
  );
};
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          color="black"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "sans-serif-medium",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filtercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default FiltersScreen;

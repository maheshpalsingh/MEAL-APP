import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Platform } from "expo-modules-core";
const customHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      IconComponent={Ionicons}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};
export default customHeaderButton;

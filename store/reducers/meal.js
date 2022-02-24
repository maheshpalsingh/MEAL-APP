import { MEALS } from "../../data/dummy-data";
import { SET_FILTER, TOGGLE_FAVORITE } from "../actions/meal";
const initialState = {
  meals: MEALS,
  filteredmeals: MEALS,
  favoritesmeals: [],
};
const mealReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existing = state.favoritesmeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existing >= 0) {
        const prevmeal = [...state.favoritesmeals];
        prevmeal.splice(existing, 1);
        return { ...state, favoritesmeals: prevmeal };
      } else {
        const newmeal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoritesmeals: state.favoritesmeals.concat(newmeal),
        };
      }

    case SET_FILTER: {
      const appliedFilters = action.filters;
      const favorites = state.meals.filter((meal) => {
        if (appliedFilters.glutenfree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactosefree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredmeals: favorites };
    }
    default:
      return state;
  }
};

export default mealReducers;

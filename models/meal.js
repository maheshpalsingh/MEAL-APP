class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    (this.id = id),
      (this.affordability = affordability),
      (this.categoryIds = categoryIds),
      (this.complexity = complexity),
      (this.duration = duration),
      (this.imageUrl = imageUrl),
      (this.ingredients = ingredients),
      (this.isGlutenFree = isGlutenFree),
      (this.title = title),
      (this.isLactoseFree = isLactoseFree),
      (this.isVegan = isVegan),
      (this.isVegetarian = isVegetarian),
      (this.steps = steps);
  }
}

export default Meal;

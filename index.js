const data = require("./data");

// list all the food items
const getFoodItems = (data) => {
  return data;
};

let foodItems = getFoodItems(data);
console.log("foodItems ", foodItems);

// list all the food items with category vegetables
const getFoodItemsCategoryVeg = (data) => {
  return data.filter((foodItem) => foodItem.category === "Vegetable");
};

foodItems = getFoodItemsCategoryVeg(data);
console.log("foodItemsCategoryVeg ", foodItems);

// list all the food items with category fruit
const getFoodItemsCategoryFruit = (data) => {
  return data.filter((foodItem) => foodItem.category === "Fruit");
};

foodItems = getFoodItemsCategoryFruit(data);
console.log("foodItemsCategoryFruit ", foodItems);

// list all the food items with category protien
const getFoodItemsCategoryProtein = (data) => {
  return data.filter((foodItem) => foodItem.category === "Protein");
};

foodItems = getFoodItemsCategoryProtein(data);
console.log("foodItemsCategoryProtein ", foodItems);

// list all the food items with category nuts
const getFoodItemsCategoryNuts = (data) => {
  return data.filter((foodItem) => foodItem.category === "Nuts");
};

foodItems = getFoodItemsCategoryNuts(data);
console.log("foodItemsCategoryNuts ", foodItems);

// list all the food items with category grains
const getFoodItemsCategoryGrains = (data) => {
  return data.filter((foodItem) => foodItem.category === "Grain");
};

foodItems = getFoodItemsCategoryGrains(data);
console.log("foodItemsCategoryGrains ", foodItems);

//   list all the food items with category dairy
const getFoodItemsCategoryDairy = (data) => {
  return data.filter((foodItem) => foodItem.category === "Dairy");
};

foodItems = getFoodItemsCategoryDairy(data);
console.log("foodItemsCategoryDairy ", foodItems);

// list all the food items with calorie above 100
const getFoodItemsCalorieAbove100 = (data) => {
  return data.filter((foodItem) => foodItem.calorie > 100);
};

foodItems = getFoodItemsCalorieAbove100(data);
console.log("foodItemsCalorieAbove100 ", foodItems);

// list all the food items with calorie below 100
const getFoodItemsCalorieBelow100 = (data) => {
  return data.filter((foodItem) => foodItem.calorie < 100);
};

foodItems = getFoodItemsCalorieBelow100(data);
console.log("foodItemsCalorieBelow100 ", foodItems);

// list all the food items with highest protien content to lowest
const getFoodItemsHighToLowProtein = (data) => {
  return data.sort((a, b) => b.protiens - a.protiens);
};

foodItems = getFoodItemsHighToLowProtein(data);
console.log("foodItemsHighToLowProtein ", foodItems);

// list all the food items with lowest cab content to highest
const getFoodItemsLowToHighCab = (data) => {
  return data.sort((a, b) => a.cab - b.cab);
};

foodItems = getFoodItemsLowToHighCab(data);
console.log("foodItemsLowToHighCab ", foodItems);

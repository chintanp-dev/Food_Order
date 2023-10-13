import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margherita Pizza",
    description:
      "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    price: 109,
  },
  {
    id: "m2",
    name: "Cheesy Pizzeria Grilled Sandwich",
    description:
      "Cheese, Black Olives, Jalapenos & Corn Mixed In Pizza Sauce & Pizza Seasoning. Recommended To Order In Focaccia Bread. Served With Our Signature Mayochop Sauce.200 gm serving. 240 Kcal / 100 gm.",
    price: 129,
  },
  {
    id: "m3",
    name: "BREAD Pakoda (2PCS)",
    description:
      "Crispy perfection meets savory satisfaction in our Bread Pakodas. Slices of bread, coated in flavorful chickpea batter, conceal a warm and inviting potato filling. Elevate your snacking game with this irresistible twist on a classic delight. - 2pcs",
    price: 99,
  },
  {
    id: "m4",
    name: "Dahi Wada",
    description:
      "Savor our Dahi Wadas: lentil fritters dipped in creamy yogurt, adorned with vibrant spices. A sensational mingling of textures and flavors that's simply unforgettable. - 1 plate",
    price: 79,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Congrats from "./components/Congrats";
import schema from "./validation/formSchema";
import * as yup from "yup";

const initialPizzaFormValues = {
  pizzaSize: "",
  sauceChoice: "",
  pepperoni: false,
  dicedTomatoes: false,
  sausage: false,
  blackOlives: false,
  canadianBacon: false,
  roastedGarlic: false,
  spicyItalianSausage: false,
  artichokeHearts: false,
  grilledChicken: false,
  threeCheese: false,
  onions: false,
  pineapple: false,
  greenPepper: false,
  extraCheese: false,
  orderName: "",
  specialInstructions: "",
};

const initialPizzaFormErrors = {
  pizzaSize: "",
  sauceChoice: "",
  orderName: "",
};

const initialDisabled = true;
const initialPizza = [];

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [pizzaFormValues, setPizzaFormValues] = useState(
    initialPizzaFormValues,
  );
  const [formErrors, setFormErrors] = useState(initialPizzaFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setPizzaFormValues({
      ...pizzaFormValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newPizza = {
      pizzaSize: pizzaFormValues.pizzaSize,
      sauceChoice: pizzaFormValues.sauceChoice,
      pepperoni: pizzaFormValues.pepperoni,
      dicedTomatoes: pizzaFormValues.dicedTomatoes,
      sausage: pizzaFormValues.sausage,
      blackOlives: pizzaFormValues.blackOlives,
      canadianBacon: pizzaFormValues.canadianBacon,
      roastedGarlic: pizzaFormValues.roastedGarlic,
      spicyItalianSausage: pizzaFormValues.spicyItalianSausage,
      artichokeHearts: pizzaFormValues.artichokeHearts,
      grilledChicken: pizzaFormValues.grilledChicken,
      threeCheese: pizzaFormValues.threeCheese,
      onions: pizzaFormValues.onions,
      pineapple: pizzaFormValues.pineapple,
      greenPepper: pizzaFormValues.greenPepper,
      extraCheese: pizzaFormValues.extraCheese,
      orderName: pizzaFormValues.orderName,
      specialInstructions: pizzaFormValues.specialInstructions,
    };
    setPizza([...pizza, newPizza]);
    setPizzaFormValues(initialPizzaFormValues);
  };

  useEffect(() => {
    schema.isValid(pizzaFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [pizzaFormValues]);

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>

      <Route path="/form">
        <Form
          values={pizzaFormValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route path="/congrats">
        <Congrats />
      </Route>
      <Route exact path="/">
        <Banner />
      </Route>
    </div>
  );
};
export default App;
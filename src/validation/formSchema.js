import * as yup from 'yup';

export default yup.object().shape({
    size: yup
    .string()
    .required("Please select a size")
    .oneOf(["Small", "Medium", "Large"], "Please Elect a Size"),

    sauce: yup
    .string()
    .required("Please select a sauce")
    .oneOf(['traditional', 'white'], "Please select a sauce"),

    pepperoni: yup
    .boolean(),

    extraCheese: yup
    .boolean(),

    glutenFree: yup
    .boolean(),

    instructions: yup
    .string(),

    orderName: yup
    .string()
    .required("Please enter a name for your order")
    .min(2, "Name must be at least 2 chars long")
})
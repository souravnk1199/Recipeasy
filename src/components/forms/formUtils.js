// formUtils.js

import * as Yup from "yup";

// formOptions.js

export const ingredientOptions = [
  "Salt",
  "Pepper",
  "Sugar",
  "Flour",
  "Butter",
  "Milk",
  "Eggs",
  // Add more ingredient options here...
];

export const unitOptions = [
  "litres",
  "kg",
  "table spoon",
  "g",
  "ml",
  "cups",
  // Add more unit options as needed
];

export const cuisines = [
  "Italian",
  "Mexican",
  "Indian",
  "Chinese",
  "Japanese",
  "Moroccan",
  "Lebanese",
  "European",
  // Add more cuisines as needed
];
// initialValues.js

export const initialValues = {
  recipename: "",
  cookingtime: "",
  cuisine: "",
  category: "",
  calories: "",
  serving: "",
  radio: "vegetarian",
  slider: 0,
  additionalinfo: "",
  tags: "",
  briefdescription: "",
  step: ["", "", ""],
  repeatingRows: [
    {
      ingredient: "",
      quantity: "",
      unit: "",
    },
    {
      ingredient: "",
      quantity: "",
      unit: "",
    },
    {
      ingredient: "",
      quantity: "",
      unit: "",
    },
  ],
  // images: [""],
  file: null,
};
export const categories = ["Vegan", "Breakfast", "Dessert", "Snacks"];
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const validationSchema = Yup.object().shape({
  recipename: Yup.string().required("RecipeName is required"),
  cookingtime: Yup.number().required("Cooking Time is required"),
  cuisine: Yup.string().required("Cuisine is required"),
  category: Yup.string().required("Category is required"),
  calories: Yup.number().required("Calories is required"),
  serving: Yup.number().required("Serving is required"),
  briefdescription: Yup.string().required("Brief Description is required"),
  radio: Yup.string().required("Radio option is required"),
  step: Yup.array().of(Yup.string().required("Steps required")),
  repeatingRows: Yup.array().of(
    Yup.object().shape({
      ingredient: Yup.string().required("Ingredient is required"),
      quantity: Yup.string().required("Quantity is required"),
      unit: Yup.string().required("Unit is required"),
    })
  ),
  file: Yup.mixed()
    .nullable()
    .required()
    .test("FILE_SIZE", "Uploaded file size is too big", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("FILE_FORMAT", "Uploaded file has unsupported format", (value) => {
      if (!value) return true;
      return SUPPORTED_FORMATS.includes(value?.type);
    }),
});

export const handleSubmit = (values) => {
  console.log(values);
};
export const areAllFieldsFilled = initialValues.repeatingRows.every(
  (row) => (row.ingredient && row.quantity && row.unit) !== ""
);

export const handlePush = (push) => {
  push({
    ingredient: "",
    unit: "",
    quantity: "",
  });
};

export const handleRemove = (remove, lastIndex) => {
  if (lastIndex >= 0) {
    remove(lastIndex);
  }
};

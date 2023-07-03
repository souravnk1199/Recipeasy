import {
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  TextField,
  FormLabel,
  Autocomplete,
  InputAdornment,
  Container,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Slider,
} from "@mui/material";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import IngredientRow from "./ingredientTemplate";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RecipeForm from "./steps";
import ImageInput from "./image";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    recipename: "",
    cookingtime: "",
    difficultylevel: "",
    cuisinecategory: "",
    dietaryinformation: "",
    briefdescription: "",
    category: "",
    step1: "",
    step2: "",
    step3: "",
    additionalinfo: "",
    tags: "",
    calories: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    quantity1: "",
    quantity2: "",
    quantity3: "",
    unit1: "",
    unit2: "",
    unit3: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [difficulty, setDifficulty] = useState(0);
  const [dietaryInfo, setDietaryInfo] = useState("vegetarian");
  const [cuisineCategory, setCuisineCategory] = useState("");
  const handleSliderChange = (event, newValue) => {
    setDifficulty(newValue);
  };
  const handleDietaryInfoChange = (event) => {
    setDietaryInfo(event.target.value);
  };
  const handleCuisineCategoryChange = (event, value) => {
    setCuisineCategory(value);
  };

  const cuisines = [
    "Italian",
    "Mexican",
    "Indian",
    "Chinese",
    "Japanese",
    "Morrocan",
    "Lebanese",
    "European",
    // Add more cuisines as needed
  ];
  const [category, setCategory] = useState("");
  const categories = ["Snacks", "Vegan", "Breakfast", "Dessert", "Snacks"];
  const handleCategoryChange = (event, value) => {
    setCategory(value);
  };

  const [ingredientRows, setIngredientRows] = useState([
    { ingredient: "", quantity: "", unit: "" },
    { ingredient: "", quantity: "", unit: "" },
    { ingredient: "", quantity: "", unit: "" },
  ]);

  const ingredientOptions = [
    "Salt",
    "Pepper",
    "Sugar",
    "Flour",
    "Butter",
    "Milk",
    "Eggs",
    // Add more ingredient options here...
  ];
  const unitOptions = [
    "litres",
    "kg",
    "table spoon",
    "g",
    "ml",
    "cups",
    // Add more unit options as needed
  ];
  const handleIngredientChange = (index, event, value) => {
    const updatedIngredients = [...ingredientRows];
    updatedIngredients[index].ingredient = value;
    setIngredientRows(updatedIngredients);
  };

  const handleQuantityChange = (index, event, value) => {
    const updatedIngredients = [...ingredientRows];
    updatedIngredients[index].quantity = value;
    setIngredientRows(updatedIngredients);
  };

  const handleUnitChange = (index, event, value) => {
    const updatedIngredients = [...ingredientRows];
    updatedIngredients[index].unit = value;
    setIngredientRows(updatedIngredients);
  };
  const handleAddRow = () => {
    setIngredientRows([
      ...ingredientRows,
      { ingredient: "", quantity: "", unit: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...ingredientRows];
    updatedRows.splice(index, 1);
    setIngredientRows(updatedRows);
  };

  const areAllFieldsFilled = ingredientRows.every(
    (row) => (row.ingredient && row.quantity && row.unit) !== ""
  );
  const validationSchema = Yup.object({
    recipename: Yup.string()
      .required("Recipe name is required")
      .min(3, "Name is too short")
      .max(20, "Name is too long"),
    cookingtime: Yup.string().required("Cooking time is required"),
    difficultylevel: Yup.string().required("Difficulty level is required"),
    cuisinecategory: Yup.string().required("Cuisine category is required"),
    category: Yup.string().required("Category is required"),
    calories: Yup.string().required("Calories is required"),
    dietaryinformation: Yup.string().required(
      "Dietary information is required"
    ),
    briefdescription: Yup.string()
      .required("Description is required")
      .max(200, "Description is too long"),
    ingredientRows: Yup.array().of(
      Yup.object().shape({
        ingredient: Yup.string().required("Ingredient is required"),
        quantity: Yup.string().required("Quantity is required"),
        unit: Yup.string().required("Unit is required"),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      recipename: "",
      cookingtime: "",
      difficultylevel: "",
      cuisinecategory: "",
      dietaryinformation: "",
      briefdescription: "",
      category: "",
      step1: "",
      step2: "",
      step3: "",
      additionalinfo: "",
      tags: "",
      calories: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      quantity1: "",
      quantity2: "",
      quantity3: "",
      unit1: "",
      unit2: "",
      unit3: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      // Handle form submission here
    },
  });
  const onSubmit = (values) => {
    console.log(values);
    // Submit logic goes here
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <FormControl sx={{ width: "100%", display: "flex", gap: 2 }}>
                  <Typography variant="h5">Create You Recipe!</Typography>
                  <Typography color={"orange"}>Recipe details</Typography>
                  <FormGroup
                    row
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40%",
                      }}
                    >
                      <Field
                        as={TextField}
                        label="RecipeName"
                        id="recipename"
                        name="recipename"
                        value={values.recipename}
                        onChange={formik.handleChange}
                        error={touched.recipename && errors.recipename}
                        helperText={touched.recipename && errors.recipename}
                        required
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40%",
                      }}
                    >
                      <Field
                        as={TextField}
                        label="Cooking time"
                        id="cookingtime"
                        name="cookingtime"
                        value={values.cookingtime}
                        onChange={formik.handleChange}
                        error={touched.cookingtime && errors.cookingtime}
                        helperText={touched.cookingtime && errors.cookingtime}
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">Mins</InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </FormGroup>

                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40%",
                      }}
                    >
                      {/* <FormLabel>Cuisine</FormLabel> */}
                      <Field
                        as={Autocomplete}
                        id="cuisinecategory"
                        name="cuisinecategory"
                        options={cuisines}
                        value={cuisineCategory}
                        onChange={formik.handleChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Cuisine"
                            value={(values.cuisinecategory = cuisineCategory)}
                            error={
                              touched.cuisinecategory && errors.cuisinecategory
                            }
                            helperText={
                              touched.cuisinecategory && errors.cuisinecategory
                            }
                          />
                        )}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40%",
                      }}
                    >
                      <Field
                        as={Autocomplete}
                        id="category"
                        name="category"
                        options={categories}
                        value={category}
                        onChange={handleCategoryChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Category"
                            variant="outlined"
                            value={(values.category = category)}
                            error={touched.category && errors.category}
                            helperText={touched.category && errors.category}
                          />
                        )}
                      />
                    </Box>
                  </FormGroup>

                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-evenly",
                      mb: "1%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "16%",
                      }}
                    >
                      <Field
                        as={TextField}
                        label="Calories"
                        id="calories"
                        name="calories"
                        value={values.calories}
                        onChange={handleChange}
                        error={touched.calories && errors.calories}
                        helperText={touched.calories && errors.calories}
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">Cals</InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "16%",
                      }}
                    >
                      <FormLabel component="legend">
                        Dietary Information
                      </FormLabel>
                      <RadioGroup
                        aria-label="dietaryinfo"
                        name="dietaryinfo"
                        value={dietaryInfo}
                        onChange={handleDietaryInfoChange}
                        row
                      >
                        <FormControlLabel
                          value="vegetarian"
                          control={<Radio size="small" />}
                          label="Veg"
                        />
                        <FormControlLabel
                          value="non-vegetarian"
                          control={<Radio size="small" />}
                          label="Non-Veg"
                        />
                      </RadioGroup>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40%",
                      }}
                    >
                      <FormLabel>Difficulty Level</FormLabel>
                      <Slider
                        value={difficulty}
                        onChange={handleSliderChange}
                        min={0}
                        max={2}
                        step={1}
                        marks={[
                          { value: 0, label: "Easy" },
                          { value: 1, label: "Medium" },
                          { value: 2, label: "Hard" },
                        ]}
                        valueLabelDisplay="auto"
                        size="small"
                      />
                      {/* <Typography variant="body2">
                    {["Easy", "Medium", "Hard"][difficulty]}
                  </Typography> */}
                    </Box>
                  </FormGroup>

                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      mb: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "88%",
                      }}
                    >
                      <FormLabel>Brief Description</FormLabel>
                      <Field
                        as={TextField}
                        id="briefdescription"
                        name="briefdescription"
                        multiline
                        value={values.briefdescription}
                        onChange={handleChange}
                        error={
                          touched.briefdescription && errors.briefdescription
                        }
                        helperText={
                          touched.briefdescription && errors.briefdescription
                        }
                        required
                        rows={2}
                      />
                    </Box>
                  </FormGroup>

                  <Typography color={"orange"}>
                    Ingredients and Quantities
                  </Typography>
                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      mb: "1%",
                    }}
                  >
                    {ingredientRows.map((row, index) => (
                      <Field
                        as={IngredientRow}
                        key={index}
                        ingredient={row.ingredient}
                        quantity={row.quantity}
                        unit={row.unit}
                        unitOptions={unitOptions}
                        onIngredientChange={(event, value) =>
                          handleIngredientChange(index, event, value)
                        }
                        onQuantityChange={(event, value) =>
                          handleQuantityChange(index, event, value)
                        }
                        ingredientOptions={ingredientOptions}
                        onUnitChange={(event, value) =>
                          handleUnitChange(index, event, value)
                        }
                        error={
                          touched[`ingredient${index + 1}`] &&
                          errors[`ingredient${index + 1}`] &&
                          touched[`quantity${index + 1}`] &&
                          errors[`quantity${index + 1}`] &&
                          touched[`unit${index + 1}`] &&
                          errors[`unit${index + 1}`]
                        }
                        helperText={
                          touched[`ingredient${index + 1}`] &&
                          errors[`ingredient${index + 1}`] &&
                          touched[`quantity${index + 1}`] &&
                          errors[`quantity${index + 1}`] &&
                          touched[`unit${index + 1}`] &&
                          errors[`unit${index + 1}`]
                        }
                        value={{
                          ingredient1: row.ingredient,
                          ingredient2: row.ingredient,
                          ingredient3: row.ingredient,
                          quantity1: row.quantity,
                          quantity2: row.quantity,
                          quantity3: row.quantity,
                          unit1: row.unit,
                          unit2: row.unit,
                          unit3: row.unit,
                        }}
                      />
                    ))}

                    <Box
                      sx={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      mb={2}
                    >
                      {areAllFieldsFilled && (
                        <IconButton color="primary" onClick={handleAddRow}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                      )}
                      {ingredientRows.length > 3 && (
                        <IconButton
                          color="error"
                          onClick={() =>
                            handleRemoveRow(ingredientRows.length - 1)
                          }
                          disabled={ingredientRows.length <= 3}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      )}
                    </Box>
                  </FormGroup>

                  <Typography color={"orange"}>
                    Step-By-Step Instructions
                  </Typography>
                  <FormGroup
                    column
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: "1%",
                    }}
                  >
                    <Box sx={{ width: "87%" }}>
                      <Field
                        as={RecipeForm}
                        step1={formData.step1}
                        step2={formData.step2}
                        step3={formData.step3}
                        handleChange={handleChange}
                        errors={touched.step1 && errors.step1}
                        helperText={touched.step1 && errors.step1}
                        value={
                          (values.step1 = formData.step1) &&
                          (values.step2 = formData.step2) &&
                          (values.step3 = formData.step3)
                        }
                      />
                    </Box>
                  </FormGroup>

                  <Typography color={"orange"}>Recipe Media</Typography>
                  <ImageInput></ImageInput>

                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      mb: "1rem",
                    }}
                  ></FormGroup>
                  <Typography color={"orange"}>
                    Additional Information
                  </Typography>
                  <FormGroup
                    row
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      mb: "2rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "88%",
                        mb: "1rem",
                      }}
                    >
                      <TextField
                        label="Tags"
                        id="tags"
                        name="tags"
                        value={values.tags}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "88%",
                        mb: "1rem",
                      }}
                    >
                      <TextField
                        label="Additional Info"
                        id="additionalinfo"
                        name="additionalinfo"
                        value={values.additionalinfo}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          backgroundColor: "lightblue",
                          marginLeft: "1rem",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        style={{ backgroundColor: "green", marginLeft: "1rem" }}
                      >
                        Publish
                      </Button>
                    </Box>
                  </FormGroup>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateRecipe;

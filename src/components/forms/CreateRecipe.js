import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  Slider,
  Box,
  FormGroup,
  Typography,
  FormLabel,
  InputAdornment,
  RadioGroup,
} from "@mui/material";
import RepeatingRowsForm from "./ingrdnt";
import ImageInput from "./image";
import StepForm from "./step2";

import {
  handleSubmit,
  validationSchema,
  unitOptions,
  cuisines,
  categories,
  ingredientOptions,
  initialValues,
} from "./formUtils";

const CreateRecipe = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
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
                <Field name="recipename">
                  {({ field, form }) => (
                    <TextField {...field} label="Recipe Name" />
                  )}
                </Field>
                {errors.recipename && touched.recipename && (
                  <ErrorMessage
                    name="recipename"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                }}
              >
                <Field name="cookingtime">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Cooking Time"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Mins</InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                {errors.cookingtime && touched.cookingtime && (
                  <ErrorMessage
                    name="cookingtime"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
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
                <FormLabel>Cuisine</FormLabel>
                <Field name="cuisine">
                  {({ field, form }) => (
                    <Select {...field} displayEmpty>
                      <MenuItem value="" disableTouchRipple>
                        Select an option
                      </MenuItem>
                      {cuisines.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
                {errors.cuisine && touched.cuisine && (
                  <ErrorMessage
                    name="cuisine"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                }}
              >
                <FormLabel>Category</FormLabel>
                <Field name="category">
                  {({ field, form }) => (
                    <Select {...field} displayEmpty>
                      <MenuItem value="" disableTouchRipple>
                        Select an option
                      </MenuItem>
                      {categories.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
                {errors.category && touched.category && (
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
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
                <Field name="calories">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Calories"
                      //   error={form.errors.calories && form.touched.calories}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Cals</InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                {errors.calories && touched.calories && (
                  <ErrorMessage
                    name="calories"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "16%",
                }}
              >
                <Field name="radio">
                  {({ field, form }) => (
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Dietary Information
                      </FormLabel>
                      <RadioGroup row {...field}>
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
                    </FormControl>
                  )}
                </Field>
                {errors.radio && touched.radio && (
                  <ErrorMessage
                    name="radio"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                }}
              >
                <FormLabel>Difficulty Level</FormLabel>
                <Field name="slider">
                  {({ field, form }) => (
                    <Slider
                      {...field}
                      value={values.slider}
                      onChange={(e, value) =>
                        form.setFieldValue(field.name, value)
                      }
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
                  )}
                </Field>
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
                <Field name="briefdescription">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      // label="Brief Description"
                      //   error={
                      //     form.errors.briefdescription &&
                      //     form.touched.briefdescription
                      //   }
                      multiline
                      rows={2}
                    />
                  )}
                </Field>
                {errors.briefdescription && touched.briefdescription && (
                  <ErrorMessage
                    name="briefdescription"
                    component="div"
                    className="error"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                )}
              </Box>
            </FormGroup>

            <Typography color={"orange"}>Ingredients and Quantities</Typography>
            <FormGroup
              row
              sx={{
                width: "100%",
                justifyContent: "center",
                mb: "1%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-evenly",
                  mb: "1%",
                }}
              >
                <RepeatingRowsForm
                  values={values}
                  ingredientOptions={ingredientOptions}
                  unitOptions={unitOptions}
                />
              </Box>
            </FormGroup>
            <Typography color={"orange"}>Step-By-Step Instructions</Typography>
            <FormGroup
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box display="flex" flexDirection="column" sx={{ width: "87%" }}>
                <StepForm values={values} errors={errors} touched={touched} />
              </Box>
            </FormGroup>
            <Typography color={"orange"}>Recipe Media</Typography>
            <ImageInput></ImageInput>
            <Typography color={"orange"}>Additional Information</Typography>
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
                <Field name="tags">
                  {({ field, form }) => <TextField {...field} label="Tags" />}
                </Field>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "88%",
                  mb: "1rem",
                }}
              >
                <Field name="additionalinfo">
                  {({ field, form }) => (
                    <TextField {...field} label="Additional Info" />
                  )}
                </Field>
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
                  Save
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
        </Form>
      )}
    </Formik>
  );
};

export default CreateRecipe;

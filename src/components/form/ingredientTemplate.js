import React from "react";
import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const IngredientRow = ({
  ingredient,
  quantity,
  unit,
  onIngredientChange,
  onQuantityChange,
  ingredientOptions,
  unitOptions,
  onUnitChange,
}) => {
  return (
    <Box
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
          width: "40%",
          mb: "1%",
        }}
      >
        <Autocomplete
          options={ingredientOptions}
          value={ingredient}
          onChange={onIngredientChange}
          renderInput={(params) => (
            <TextField {...params} label="Ingredient" fullWidth />
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "15%",
          mb: "1%",
        }}
      >
        <TextField
          label="Quantity"
          value={quantity}
          onChange={onQuantityChange}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "15%",
          mb: "1%",
        }}
      >
        <Autocomplete
          options={unitOptions}
          value={unit}
          onChange={onUnitChange}
          renderInput={(params) => (
            <TextField {...params} label="Unit" fullWidth />
          )}
        />
      </Box>
    </Box>
  );
};

export default IngredientRow;

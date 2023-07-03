import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const RecipeForm = () => {
  const [ingredientRows, setIngredientRows] = useState([
    { step: 1, value: "" },
    { step: 2, value: "" },
    { step: 3, value: "" },
  ]);

  const handleAddRow = () => {
    const lastStep = ingredientRows[ingredientRows.length - 1].step;
    setIngredientRows([...ingredientRows, { step: lastStep + 1, value: "" }]);
  };

  const handleRemoveRow = () => {
    if (ingredientRows.length > 3) {
      const updatedRows = [...ingredientRows];
      updatedRows.pop();
      setIngredientRows(updatedRows);
    }
  };

  const handleChange = (index, value) => {
    const updatedRows = [...ingredientRows];
    updatedRows[index].value = value;
    setIngredientRows(updatedRows);
  };
  const areAllFieldsFilled = ingredientRows.every((row) => row.value !== "");

  return (
    <>
      <Box display="flex" flexDirection="column">
        {ingredientRows.map((row, index) => (
          <Box sx={{ mb: "1%" }}>
            <TextField
              label={`Step ${row.step}`}
              variant="outlined"
              value={row.value}
              onChange={(e) => handleChange(index, e.target.value)}
              fullWidth
            />
          </Box>
        ))}
        <Box>
          {areAllFieldsFilled && (
            <IconButton color="primary" onClick={handleAddRow}>
              <AddCircleOutlineIcon />
            </IconButton>
          )}

          {ingredientRows.length > 3 && (
            <IconButton
              color="error"
              onClick={handleRemoveRow}
              disabled={ingredientRows.length <= 3}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RecipeForm;

// RepeatingRowsForm.js

import React from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import {
  Select,
  MenuItem,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { handlePush, handleRemove } from "./formUtils";

const RepeatingRowsForm = ({ values, ingredientOptions, unitOptions }) => {
  return (
    <FieldArray name="repeatingRows">
      {({ push, remove }) => (
        <>
          {values.repeatingRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field name={`repeatingRows[${rowIndex}].ingredient`}>
                  {({ field, form }) => (
                    <Select {...field} displayEmpty>
                      <MenuItem value="" disabled>
                        Select an option
                      </MenuItem>
                      {ingredientOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
                {/* Error handling */}
                <ErrorMessage
                  name={`repeatingRows[${rowIndex}].ingredient`}
                  component="div"
                  className="error"
                  style={{ color: "red", fontSize: "12px" }}
                />

                <Field name={`repeatingRows[${rowIndex}].quantity`}>
                  {({ field, form }) => (
                    <TextField {...field} label={`Quantity ${rowIndex + 1}`} />
                  )}
                </Field>
                {/* Error handling */}
                <ErrorMessage
                  name={`repeatingRows[${rowIndex}].quantity`}
                  component="div"
                  className="error"
                  style={{ color: "red", fontSize: "12px" }}
                />

                <Field name={`repeatingRows[${rowIndex}].unit`}>
                  {({ field, form }) => (
                    <Select {...field} displayEmpty>
                      <MenuItem value="" disabled>
                        Select an option
                      </MenuItem>
                      {unitOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
                {/* Error handling */}
                <ErrorMessage
                  name={`repeatingRows[${rowIndex}].unit`}
                  component="div"
                  className="error"
                  style={{ color: "red", fontSize: "12px" }}
                />
              </Box>
            </div>
          ))}

          {values.repeatingRows.length >= 3 && (
            <IconButton color="primary" onClick={() => handlePush(push)}>
              <AddCircleOutlineIcon />
            </IconButton>
          )}
          {values.repeatingRows.length >= 4 && (
            <IconButton
              color="error"
              onClick={() => {
                const lastIndex = values.repeatingRows.length - 1;
                handleRemove(remove, lastIndex);
              }}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          )}
        </>
      )}
    </FieldArray>
  );
};

export default RepeatingRowsForm;

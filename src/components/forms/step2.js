// StepForm.js

import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { TextField, IconButton, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const StepForm = ({ values, errors, touched }) => {
  return (
    <FieldArray name="step">
      {({ push, remove }) => (
        <>
          {values.step.map((field, index) => (
            <div key={index}>
                <Box sx={{ mb: '1%' }}>
                  <Field name={`step[${index}]`}>
                    {({ field, form }) => (
                      <TextField
                        {...field}
                        label={`Step ${index + 1}`}
                      />
                    )}
                  </Field>
                </Box>
                <Box>
                  {errors.step && touched.step && (
                    <ErrorMessage
                      name={`step[${index}]`}
                      component="div"
                      className="error"
                      style={{ color: 'red', fontSize: '12px' }}
                    />
                  )}
                </Box>
            </div>
          ))}
          {values.step.length >= 3 && (
            <IconButton color="primary" onClick={() => push('')}>
              <AddCircleOutlineIcon />
            </IconButton>
          )}
          {values.step.length >= 4 && (
            <IconButton
              color="error"
              onClick={() => {
                const lastIndex = values.step.length - 1;
                if (lastIndex >= 0) {
                  remove(lastIndex);
                }
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

export default StepForm;

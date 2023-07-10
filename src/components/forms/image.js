import React, { useRef, useState, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
//import { Close as CloseIcon } from '@mui/icons-material';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage } from "formik";

const Image = ({ file, setFieldValue }) => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [showBox, setShowBox] = useState(true);
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setShowBox(false);
    } else {
      setShowBox(true);
    }
  }, [file]);

  const handleBoxClick = () => {
    fileRef.current.click();
  };

  const handleDeselectImage = () => {
    setFieldValue("file", null);
    setPreview(null);
  };

  return (
    <>
      <input
        type="file"
        ref={fileRef}
        hidden
        onChange={(event) => {
          setFieldValue("file", event.target.files[0]);
        }}
      />

      <div>
        {preview && (
          <>
            <Box sx={{ position: "relative", width: "100px", height: "100px" }}>
              <img src={preview} alt="preview" width="100%" height="100%" />
              <IconButton
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "white",
                }}
                onClick={handleDeselectImage}
              >
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </>
        )}
        {showBox && (
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid #000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleBoxClick}
          >
            <AddCircleOutlineIcon />
          </div>
        )}
      </div>
      <ErrorMessage name="file" />
    </>
  );
};

export default Image;
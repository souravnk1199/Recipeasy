import React, { useState } from 'react';
import { Paper, IconButton, Button, Box } from '@mui/material';
import { Close as CloseIcon, Add as AddIcon, Add } from '@mui/icons-material';

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ImageInput = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleImageAdd = () => {
    setImages([...images, '']);
  };

  return (
        <Box display="flex" flexDirection="row" gap={3}>
          {images.map((image, index) => (
        <Paper key={index} elevation={3} style={{ width:100, height:100, position: 'relative', overflow: 'hidden' }}>
          {image && (
            <>
              <img src={image} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <IconButton
                onClick={() => handleImageRemove(index)}
                style={{ position: 'absolute', top: 0, right: 0, color:'grey',backgroundColor:'white' }}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
          {!image && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, index)}
                style={{ display: 'none' }}
              />
              <label htmlFor={`image-input-${index}`} style={{ width: '100%', height: '100%' }}>
                <IconButton component="span" style={{ width: '100%', height: '100%' }}>
                  <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </IconButton>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, index)}
                style={{ display: 'none' }}
                id={`image-input-${index}`}
              />
            </>
          )}
        </Paper>
      ))}
      {images.length > 0 && (
        <IconButton  variant='contained' onClick={handleImageAdd} color='primary' sx={{}}>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>
      )}
      {images.length === 0 && (
        <label htmlFor="image-input-0">
          <Paper elevation={3} style={{ width:100, height:100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'lightgray' }}>
            <IconButton component="span">
            <AddCircleOutlineIcon/>
            </IconButton>
          </Paper>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event, 0)}
            style={{ display: 'none' }}
            id="image-input-0"
          />
        </label>
      )}
      
    </Box>
  );
};

export default ImageInput;

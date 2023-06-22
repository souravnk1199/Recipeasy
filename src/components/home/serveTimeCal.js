import React from "react";
import { Box, Typography } from "@mui/material";

const ServeTimeCal = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderTop: 1,
          borderBottom:1,
          width: 200,
          paddingY: 1
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: 1,
            paddingX: 1
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            Serving
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 12 }}>
            {props.serve}
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: 1,
            paddingX: 1
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            Time
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 12 }}>
            {props.time} mins
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            Cals
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 12 }}>
            {props.cal}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ServeTimeCal;

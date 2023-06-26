import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const ServeTimeCal = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTop: 1,
        borderBottom: 1,
        width: 200,
        paddingY: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
          <PersonIcon />
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 12 }}>
          {props.serve}
        </Typography>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: "flex", backgroundColor: "black" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
          <WatchLaterIcon />
        </Typography>

        <Typography variant="body1" sx={{ fontSize: 12 }}>
          {props.time} mins
        </Typography>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: "flex", backgroundColor: "black" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
          <LocalFireDepartmentIcon />
        </Typography>

        <Typography variant="body1" sx={{ fontSize: 12 }}>
          {props.cal}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServeTimeCal;

import React, { useState } from "react";

import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/material";

const StyledImg = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
});

const Slider = (props) => {
  const [startIndex, setStartIndex] = useState(0);

  const isLargeScreen = useMediaQuery("(min-width: 801px)");
  const isExtraLargeScreen = useMediaQuery("(min-width: 1001px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 651px) and (max-width: 800px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width: 401px) and (max-width: 650px)"
  );

  let itemsPerPage;

  if (isExtraLargeScreen) {
    itemsPerPage = 6;
  } else if (isLargeScreen) {
    itemsPerPage = 5;
  } else if (isMediumScreen) {
    itemsPerPage = 4;
  } else if (isSmallScreen) {
    itemsPerPage = 3;
  } else {
    itemsPerPage = 2;
  }

  const goToNextPage = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= props.list.length ? 0 : prevIndex + 1
    );
  };

  const goToPreviousPage = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? props.list.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = props.list.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Paper sx={{ marginY: 2, backgroundColor: "rgba(128, 128, 128, 0.075)" }}>
      <Box sx={{ width: "100%", padding: 2 }}>
        <Typography sx={{ marginBottom: 1 }} variant="h6">
          {props.name}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={goToPreviousPage}
            sx={{ color: "black" }}
            disabled={startIndex === 0}
          >
            <ArrowBackIos />
          </IconButton>

          <ImageList
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            cols={itemsPerPage}
          >
            {visibleItems.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
              >
                <StyledImg src={item.link} alt={`Item ${item.title}`} />
                <Typography variant="body2">{item.title}</Typography>
              </ImageListItem>
            ))}
          </ImageList>

          <IconButton
            onClick={goToNextPage}
            disabled={startIndex + itemsPerPage >= props.list.length}
            sx={{ color: "black" }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Slider;

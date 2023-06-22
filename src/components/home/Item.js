import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledImg = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: '50%'
});

const Item = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent:'center'
        }}
      >
        <Box>
          <StyledImg src={props.image} alt="image" />
        </Box>
        <Typography variant="body2">
          {props.title}
        </Typography>
      </Box>
    </>
  );
};

export default Item;

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

const StyledImg = styled("img")({
  width: "200px",
  height: "10rem",
  objectFit: "cover",
});

const Recipes = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            height: "240px",
          }}
          elevation={2}
        >
          <Box>
            <StyledImg src={props.image} alt="image" />
            <Typography
              variant="h6"
              sx={{
                position: "relative",
                top:0,
                left:0,
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                fontSize: 10,
                width: "70px",
                paddingInline: "10px",
                borderRadius: "5px 0 0 0",
              }}
            >
              {props.level}
              {"-"}
              {props.time}
              {" Mins"}
            </Typography>
          </Box>

          <Box
            paddingX={1}
            marginBottom={0.5}
            sx={{ display: "flex", alignItems: "center", fontSize: 12 }}
          >
            {props.minititle === "Vegetarian" ? (
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                alt="vegetarian-food-symbol"
              />
            ) : (
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                alt="vegetarian-food-symbol"
              />
            )}
            <Typography
              variant="h6"
              marginLeft={0.5}
              sx={{ fontSize: 12, color: "green" }}
            >
              {<>{props.minititle}</>}
            </Typography>
          </Box>
          <Box paddingX={1}>
            <Typography
              variant="body2"
              sx={{ alignContent: "center", fontWeight: "bold", fontSize: 14 }}
            >
              {props.title}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Recipes;

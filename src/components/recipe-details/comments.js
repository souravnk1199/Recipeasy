import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";

const drawerHeight = 300;

const theme = createTheme();

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    height: drawerHeight,
    width: "50%",
    padding: "1rem",
    margin: "0 auto",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "darkgray",
      borderRadius: "3px",
    },
  },
}));

const Comments = () => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { username: "Jon Ray", comment: "Good Recipe" },
    { username: "Tom", comment: "Thanks!!" },
    { username: "Jack", comment: "Fantastic...Mind blowing...Extraordinary" },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      const newComment = { username: 'User', comment: comment };
      setComments((prevComments) => [newComment, ...prevComments]);
      setComment('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <IconButton onClick={handleOpen}>
          <CommentIcon sx={{ color: "darkorange" }} />
        </IconButton>

        <StyledDrawer anchor="bottom" open={open} onClose={handleClose}>
          <List>
            <ListItem>
              <Typography
                variant="h6"
                component="span"
                fontWeight="bold"
                fontSize="larger"
              >
                Leave a Comment..!
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                sx={{ width: "100%" }}
                value={comment}
                onChange={handleCommentChange}
              />
              <IconButton onClick={handleCommentSubmit}>
                <SendIcon />
              </IconButton>
            </ListItem>
            {comments.map((item, index) => (
              <>
                <ListItem key={index} sx={{ gap: 2 }}>
                  <Avatar sx={{ width: "2rem", height: "2rem" }} />
                  <strong>{item.username} </strong>
                </ListItem>
                <Typography ml={8}>{item.comment}</Typography>
                <Divider variant="middle" component="li" />
              </>
            ))}
          </List>
        </StyledDrawer>
      </>
    </ThemeProvider>
  );
};

export default Comments;

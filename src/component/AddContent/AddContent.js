import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Copyright from "../component/common/Copyright";
import { Alert } from "@mui/lab";
import { Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { AuthService } from "../../service/AuthService";
import FormItem from "../Common/FormItem";

import "./AddContent.scss";
import { useDispatch } from "react-redux";
import { addNewMovie } from "../../stores/Movies";

export default function AddContent() {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [content, setContent] = React.useState("");

  const [open, setSnackbarOpen] = React.useState(false);
  const [severity, setSnackbarSeverity] = React.useState("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  
  
  const dispatch = useDispatch();
  const creator = "sample creator"
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const handleClick = (e) => {
    e.preventDefault()

    const movieData = {
      name: name,
      contentCreator: creator,
      category: category,
      text: description,
      image: photo,
      content: content
    };

    dispatch(addNewMovie(movieData))

  }

  return (
    <div>
      <Container component="main" maxWidth="md" className="cardContainer add-content-container">
        <Card className="card">
          <CssBaseline />
          <div className="paper">
            <Typography component="h1" variant="h5">
              Add New Content
            </Typography>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <FormItem id_name="name" label="Content Name" value={name} setValue={setName}></FormItem>
                <FormItem id_name="category" label="Content Category" value={category} setValue={setCategory}></FormItem>
                <FormItem id_name="description" multiline={true} maxRows={3} label="Content Description" value={description} setValue={setDescription}></FormItem>
                <FormItem id_name="photo" type="file" label="Content Photo" value={photo} setValue={setPhoto}></FormItem>
                <FormItem id_name="content" type="file" label="Upload Video" value={content} setValue={setContent}></FormItem>
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={handleClick}
              >
                Add New Content
              </Button>
            </form>
          </div>
          {/* <Box mt={5}>
                <Copyright/>
            </Box> */}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity={severity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Card>
      </Container>
    </div>
  );
}

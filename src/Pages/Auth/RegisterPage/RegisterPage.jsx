import "./RegisterPage.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  emailValidation,
  passwordValidation,
  userValidation,
} from "../validation/validationFunctions";
import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterPage(props) {
  const navi = useNavigate();
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataObject = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(userValidation(dataObject.username));
    console.log(passwordValidation(dataObject.password));
    console.log(emailValidation(dataObject.email));
    if (
      userValidation(dataObject.username) &&
      passwordValidation(dataObject.password) &&
      emailValidation(dataObject.email)
    ) {
      axios
        .post("https://flightbuddyserver.onrender.com/AuthAPI/register", {
          username: dataObject.username,
          email: dataObject.email,
          password: dataObject.password,
        })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            setToken(response.data.token);
            props.userSetter(dataObject.username);
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem(
              "user_id",
              JSON.stringify(response.data.user_id)
            );
            navi("/Search");
          } else if (response.status === 500) {
            setErrorMessage("Invalid Input,please try again");
          }
        });
    } else {
      setErrorMessage("Please enter a valid password");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="RegisterImg" sx={{}} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              {errorMessage !== undefined ? (
                <Alert severity="error">{errorMessage}</Alert>
              ) : (
                <></>
              )}
              <Grid container>
                <Grid item xs>
                  <Grid item>
                    <Link to="/" variant="body2">
                      Back to Log In
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
                <Grid sx={{mt:3}}>
                  <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    Please enter a valid password:
                    <strong>
                    <p>more then 8 characters</p>
                    </strong>
                  </Alert>
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

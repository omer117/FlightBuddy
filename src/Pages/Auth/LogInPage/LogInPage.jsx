import "./LogInPage.scss";
import googleIcon from "../../../assets/images/google.svg";
import appleIcon from "../../../assets/images/apple.svg";
import facebookIcon from "../../../assets/images/facebook.svg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  passwordValidation,
  userValidation,
} from "../validation/validationFunctions";
import { Alert } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LogInPage(props) {
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [serverValidation, setServerValidation] = useState()

  const navi = useNavigate();


  useEffect(()=>{
    async function setter(){
      await axios.get('https://flightbuddyserver.onrender.com/').then((response)=>{
        setServerValidation(response.data)
      })
    }
    setter();
  },[])


  // function that handles the submit action
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataObj = {
      username: data.get("username"),
      password: data.get("password"),
    };
    if (
      passwordValidation(dataObj.password) &&
      userValidation(dataObj.username)
    ) {
      axios
        .post("https://flightbuddyserver.onrender.com/AuthAPI/login", {
          username: dataObj.username,
          password: dataObj.password,
        })
        .then((response) => {
          if (response.status === 200) {
            setToken(response.data.token);
            props.userSetter(dataObj.username);
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem(
              "user_id",
              JSON.stringify(response.data.user_id)
            );
            navi("/Search");
            console.log(response.data);
          }
        })
        .catch(() => {
          setErrorMessage("Password or username is incorrect");
        });
    } else {
      setErrorMessage("Invalid Input,please try again");
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="logInImg" sx={{}} />
        {serverValidation !== undefined ? (
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
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
                  Sign In
                </Button>
                {errorMessage !== undefined ? <Alert severity="error">{errorMessage}</Alert> : <></>}
                <Grid container>
                  <Grid item xs>
                    <Grid item>
                      <Link
                        className="linkLogIn"
                        to="/Register"
                        variant="body2"
                      >
                        Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Link className="linkLogIn" to="/Search">
                      Continue as guest
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        ) : (
          <div className="loadingSkeleton">
            <Stack spacing={3}>
              <div className="skeletonAvatar">
                <Skeleton variant="circular" width={60} height={60} />
              </div>
              <Skeleton variant="rounded" width={310} height={60} />
              <Skeleton variant="rounded" width={310} height={60} />
              <div className="skeletonAvatar">
              <Skeleton variant="rounded" width={250} height={40} />
              </div>
            </Stack>
          </div>
        )}
      </Grid>
    </ThemeProvider>
  );
}

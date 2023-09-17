// import "./RegisterPage.scss";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

// // handles the submiting action of the Register Button.
// export default function RegisterPage(props) {
//   const navi = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     let dataObject = {
//       username: data.get("username"),
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     axios
//       .post("https://flightbuddyserver.onrender.com/AuthAPI/register", {
//         username: dataObject.username,
//         email: dataObject.email,
//         password: dataObject.password,
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           props.userSetter(`${dataObject.username}`);
//           navi("/Search");
//         } else {
//         }
//       });
//   };

//   return (
//     <>
//       <Grid container component="main">
//         <CssBaseline />
//         <Grid
//           className="mainContainerDiv"
//           item
//           xs={12}
//           sm={8}
//           md={5}
//           component={Paper}
//           elevation={6}
//           square
//         >
//           <Box
//             className="subMainContainerDiv"
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography className="header" component="h1" variant="h5">
//               Register
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 htmlFor="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="username"
//                 name="username"
//                 autoComplete="username"
//                 htmlFor="username"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 htmlFor="password"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 className="registerBtn"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Register
//               </Button>
//               <Link to="/Search">back to Log In</Link>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

import "./RegisterPage.scss";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterPage(props) {
  const navi = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataObject = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("https://flightbuddyserver.onrender.com/AuthAPI/register", {
        username: dataObject.username,
        email: dataObject.email,
        password: dataObject.password,
      })
      .then((response) => {
        if (response.status === 200) {
          props.userSetter(`${dataObject.username}`);
          navi("/Search");
        } else {
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Grid item>
                    <Link to="/" variant="body2">
                      Back to Log In
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

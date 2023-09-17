// import "./LogInPage.scss";
// import googleIcon from "../../../assets/images/google.svg";
// import appleIcon from "../../../assets/images/apple.svg";
// import facebookIcon from "../../../assets/images/facebook.svg";
// import Button from "@mui/material/Button";
// import axios from 'axios';
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ThemeProvider } from "@mui/material";

// // handles the submiting action of the log In Button.

// export default function LogInPage(props) {
//   const [token, setToken] = useState("");

// const navi = useNavigate()

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     let dataObj = {
//       username: data.get("username"),
//       password: data.get("password"),
//     };

//     axios.post('https://flightbuddyserver.onrender.com/AuthAPI/login',{
//       username:dataObj.username,
//       password:dataObj.password
//     }).then((response)=>{
//       if(response.status===200){
//         setToken(response.data.token)
//         props.userSetter(dataObj.username)
//         localStorage.setItem('token', JSON.stringify(response.data.token))
//         localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
//         navi('/Search')
//       }else{
//        alert('user not found');
//       }
//     })

//   };
// return (

//   <ThemeProvider >
//     <Grid container component="main" sx={{ height: '100vh' }}>
//       <CssBaseline />
//       <Grid
//         item
//         xs={false}
//         sm={4}
//         md={7}
//         sx={{
//           backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//           backgroundRepeat: 'no-repeat',
//           backgroundColor: (t) =>
//             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// /      <div className="logInMainDiv">
// <CssBaseline />
// <Grid
//   item
//   xs={12}
//   sm={8}
//   md={5}
//   component={Paper}
//   elevation={6}
//   square
//   className="logInSubDiv"
// >
//   <Box
//     sx={{
//       my: 8,
//       mx: 4,
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     }}
//     >
//     <Typography className="signInTypo" component="h1" variant="h5">
//       Sign in
//     </Typography>
//     <Box
//       component="form"
//       noValidate
//       onSubmit={handleSubmit}
//       sx={{ mt: 1 }}
//       >
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="username"
//         label="username"
//         name="username"
//         autoComplete="username"
//         htmlFor="username"
//         autoFocus
//         />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//         htmlFor="password"
//         />
//       {/* <FormControlLabel
//         control={<Checkbox value="remember" color="primary" />}
//         label="Remember me"
//       /> */}
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         className="logInBtn"
//         sx={{ mt: 3, mb: 2 }}
//         >
//         Sign In
//       </Button>
//       <Grid className="thirdParty" sx={{ mt: 1, mb: 1 }}>
//         <Button type="submit" variant="contained" className="googleBtn">
//           <img src={googleIcon} alt="" />
//         </Button>
//         <Button
//           type="submit"
//           variant="contained"
//           className="facebookBtn"
//           >
//           <img src={facebookIcon} alt="" />
//         </Button>
//         <Button type="submit" variant="contained" className="appleBtn">
//           <img src={appleIcon} alt="" />
//         </Button>
//       </Grid>
//       <Grid container className="divContainerLinks">
//         <Grid item xs>
//           <Link href="/register" variant="body2">
//             Forgot password?
//           </Link>
//         </Grid>
//         <Grid item>
//           <Link to="/Register" variant="body2">
//             Sign Up
//           </Link>
//         </Grid>
//       </Grid>
//       <div className="toSearchLink">
//         <Link to="/Search">Continue as guest</Link>
//       </div>
//     </Box>
//   </Box>
// </Grid>
// </div>
// </Grid>
// </Grid>
//   </ThemeProvider>
//           )
  // return (
    // <>
    //   <div className="LetsStartDiv">
    //     <p className="paragClass">
    //       Let's find you and your buddy A place to meet!
    //     </p>
    //     <p className="paragClass">In just 3 steps!</p>
    //   </div>
    //   <div className="logInMainDiv">
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={12}
    //       sm={8}
    //       md={5}
    //       component={Paper}
    //       elevation={6}
    //       square
    //       className="logInSubDiv"
    //     >
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Typography className="signInTypo" component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <Box
    //           component="form"
    //           noValidate
    //           onSubmit={handleSubmit}
    //           sx={{ mt: 1 }}
    //         >
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="username"
    //             label="username"
    //             name="username"
    //             autoComplete="username"
    //             htmlFor="username"
    //             autoFocus
    //           />
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             htmlFor="password"
    //           />
    //           {/* <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           /> */}
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             className="logInBtn"
    //             sx={{ mt: 3, mb: 2 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid className="thirdParty" sx={{ mt: 1, mb: 1 }}>
    //             <Button type="submit" variant="contained" className="googleBtn">
    //               <img src={googleIcon} alt="" />
    //             </Button>
    //             <Button
    //               type="submit"
    //               variant="contained"
    //               className="facebookBtn"
    //             >
    //               <img src={facebookIcon} alt="" />
    //             </Button>
    //             <Button type="submit" variant="contained" className="appleBtn">
    //               <img src={appleIcon} alt="" />
    //             </Button>
    //           </Grid>
    //           <Grid container className="divContainerLinks">
    //             <Grid item xs>
    //               <Link href="/register" variant="body2">
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             <Grid item>
    //               <Link to="/Register" variant="body2">
    //                 Sign Up
    //               </Link>
    //             </Grid>
    //           </Grid>
    //           <div className="toSearchLink">
    //             <Link to="/Search">Continue as guest</Link>
    //           </div>
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </div>
    // </>
  // );
// }
import "./LogInPage.scss";
import googleIcon from "../../../assets/images/google.svg";
import appleIcon from "../../../assets/images/apple.svg";
import facebookIcon from "../../../assets/images/facebook.svg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LogInPage(props) {
  
  const [token, setToken] = useState("");

const navi = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataObj = {
      username: data.get("username"),
      password: data.get("password"),
    };

    axios.post('https://flightbuddyserver.onrender.com/AuthAPI/login',{
      username:dataObj.username,
      password:dataObj.password
    }).then((response)=>{
      if(response.status===200){
        setToken(response.data.token)
        props.userSetter(dataObj.username)
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
        navi('/Search')
        console.log(response.data);
      }else{
       alert('user not found');
      }
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className="logInImg"
          sx={{
            
          }}
        />
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
              <Grid container>
                <Grid item xs>
                  <Grid item>
                    <Link to="/Register" variant="body2">
                      Sign Up
                    </Link>
                  </Grid>
                </Grid>
                <Grid item>
                  <Link to="/Search">Continue as guest</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

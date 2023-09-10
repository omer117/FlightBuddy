import "./LogInPage.scss";
import googleIcon from "../../../assets/images/google.svg";
import appleIcon from "../../../assets/images/apple.svg";
import facebookIcon from "../../../assets/images/facebook.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

// handles the submiting action of the log In Button.
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};

export default function LogInPage() {
  return (
    <>
      <div className="LetsStartDiv">
        <p className="paragClass">
          Let's find you and your buddy A place to meet!
        </p>
        <p className="paragClass">In just 3 steps!</p>
      </div>
      <div className="logInMainDiv">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="logInSubDiv"
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
            <Typography className="signInTypo" component="h1" variant="h5">
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                htmlFor="email"
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
                htmlFor="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#7B49E6" }}
              >
                Sign In
              </Button>
              <Grid className="thirdParty" sx={{ mt: 1, mb: 1 }}>
                <Button type="submit" variant="contained" className="googleBtn">
                  <img src={googleIcon} alt="" />
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="facebookBtn"
                >
                  <img src={facebookIcon} alt="" />
                </Button>
                <Button type="submit" variant="contained" className="appleBtn">
                  <img src={appleIcon} alt="" />
                </Button>
              </Grid>
              <Grid container className="divContainerLinks">
                <Grid item xs>
                  <Link href="/register" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Register" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
              <div className="toSearchLink">
                <Link to="/Search">Continue as guest</Link>
              </div>
            </Box>
          </Box>
        </Grid>
      </div>
    </>
  );
}

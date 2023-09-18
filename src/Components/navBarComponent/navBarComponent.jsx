
import * as React from "react";
import "./navBarComponent.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(props) {
  const navi = useNavigate();

  function toSearch(){
    navi('/Search')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBarMainDiv" position="static">
        <Toolbar>
          <IconButton
          onClick={toSearch}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FlightTakeoffIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FlightBuddy
          </Typography>
          {props.user ? (
            <div className="navBarLink">
              <div>
                <Link to="/myFlights" className="demiParag">
                  My Flights
                </Link>
              </div>
              <div>
                <p
                  className="demiParag"
                  onClick={() => {
                    navi("/Search");
                    window.location.reload(false);
                  }}
                >
                  Log out
                </p>
              </div>
            </div>
          ) : (
            <Button
              onClick={() => {
                // eslint-disable-next-line no-restricted-globals
                navi("/");
              }}
              color="inherit"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


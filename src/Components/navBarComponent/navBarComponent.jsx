import * as React from "react";
import "./navBarComponent.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu"; // Add MenuIcon
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(props) {
  const navi = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  function navigate() {
    navi("/myFlights");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBarMainDiv" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on icon click
          >
            {menuOpen ? <MenuIcon /> : <FlightTakeoffIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FlightBuddy
          </Typography>
          {props.user ? (
            <div className={menuOpen ? "navBarLink mobile" : "navBarLink"}>
              {menuOpen ? (
                <>
                  <Link to="/myFlights" className="demiParag">
                    My Flights
                  </Link>
                  <p className="demiParag">
                    Hello, <span className="demiOParag">{props.user}</span>
                  </p>
                  <p
                    className="demiParag"
                    onClick={() => {
                      navi("/Search");
                      window.location.reload(false);
                    }}
                  >
                    Log out
                  </p>
                </>
              ) : (
                <Button
                  onClick={() => {
                    navi("/myFlights");
                  }}
                  color="inherit"
                >
                  My Flights
                </Button>
              )}
            </div>
          ) : (
            <Button
              onClick={() => {
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

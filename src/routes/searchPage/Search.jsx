import "./SearchPage.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [DateValue, setDateValue] = useState("");
  const [firstChosenValue, setFirstChosenValue] = useState("");
  const [secondChosenValue, setSecondChosenValue] = useState("");

  useEffect(() => {
    console.log(DateValue);
  }, [DateValue]);

  return (
    <>
      <div className="headerDiv">
        <h1>Let's find a nice place in the middle</h1>
      </div>
      <div className="searchdDiv">
        <div className="firstPersonSearchBox">
          <Typography>I'm coming from...</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="AirportCode"
                placeholder="JFK"
                value={firstChosenValue}
                onChange={(newFirstChosenValue) =>
                  setFirstChosenValue(newFirstChosenValue)
                }
              />
            )}
          />
        </div>

        <div className="secondPersonSearchBox">
          <Typography>My friend comes from...</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="AirportCode"
                value={secondChosenValue}
                onChange={(newSecondChosenValue) =>
                  setSecondChosenValue(newSecondChosenValue)
                }
              />
            )}
          />
        </div>
        <div className="date selector">
          <Typography>When?</Typography>
          <TextField
            value={DateValue}
            onChange={(newDateVal) => setDateValue(newDateVal)}
            label="insert Date"
            placeholder="11-07-2023"
          />
        </div>
        <Button>
          <Link to="/results">Let's see</Link>
        </Button>
      </div>
    </>
  );
}

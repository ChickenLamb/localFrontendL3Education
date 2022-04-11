import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const DAYS = [
  {
    key: "sunday",
    label: "日",
  },
  {
    key: "monday",
    label: "一",
  },
  {
    key: "tuesday",
    label: "二",
  },
  {
    key: "wednesday",
    label: "三",
  },
  {
    key: "thursday",
    label: "四",
  },
  {
    key: "friday",
    label: "五",
  },
  {
    key: "saturday",
    label: "六",
  },
];

const ToggleButton = styled(MuiToggleButton)(() => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#00abc0",
  },
}));

const theme = createTheme({
  palette: {
    text: {
      primary: "#00ff00",
    },
  },
});

export default function DayOfWeekPicker(props) {
  const [days, setDays] = React.useState([]);

  const handleChange = (event, day) => {
    setDays(day);
  };
  return (
    <Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>星期</h1>
      </div>

      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          arial-label="Days of the week"
          value={days}
          onChange={handleChange}
          exclusive
          sx={{ marginLeft: "10%", marginRight: "10%", width: "80%" }}
        >
          {DAYS.map((day, index) => (
            <ToggleButton
              key={index}
              value={day.key}
              sx={{ borderColor: "Purple" }}
            >
              {day.label}{" "}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ThemeProvider>
    </Grid>
  );
}

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DayOfWeekPicker from "./DayOfWeekPicker";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const TeacherList = [
  {
    value: "Teacher1",
    label: "Teacher1",
  },
  {
    value: "Teacher2",
    label: "Teacher2",
  },
  {
    value: "Teacher3",
    label: "Teacher3",
  },
  {
    value: "Teacher4",
    label: "Teacher4",
  },
];

export default function EditDataCard({ item }) {
  const [enable, setEnable] = React.useState(false);
  const [teacher, setTeacher] = React.useState("");

  var uiControl;
  let disableColor = "#c4c1c0";
  let enableColor = { red: 0, green: 0, blue: 0 };

  let IsSelectionTextField = item.inputType === "select";
  const handleChange = (event) => {
    setTeacher(event.target.value);
  };

  const handleOnEditClick = () => {
    setEnable(true);
  };

  if (item.inputType === "time") {
    uiControl = <DayOfWeekPicker />;
  } else {
    uiControl = null;
  }

  const uiTextField = (
    <TextField
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
        backgroundColor: enable ? enableColor : disableColor,
      }}
      id={item.inputType}
      type={item.inputType}
      select={IsSelectionTextField}
      value={teacher}
      onChange={handleChange}
      disabled={!enable}
    >
      {" "}
      {TeacherList.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );

  return (
    <Grid item xs={3} sm={4} md={4} key={item.fieldName}>
      <Card sx={{ minWidth: 10, boxShadow: 7 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {uiControl}
            <Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>{item.displayName}</h1>
              </div>
              {uiTextField}
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ p: 1, m: 1, mx: "auto" }}
            size="small"
            onClick={handleOnEditClick}
          >
            点击修改{item.displayName}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

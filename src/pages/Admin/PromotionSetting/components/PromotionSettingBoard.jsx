import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { makeStyles } from "@material-ui/styles";

const ariaLabel = { "aria-label": "description" };
const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

const useStyles = makeStyles((theme) => ({
  input: {
    "&::placeholder": {
      color: "red",
      textAlign: "center",
    },
  },
}));

export default function PromotionSettingBoard() {
  const [value, setValue] = React.useState("0.0");
  const depositedAmount = "";

  const handleAmount = (evt) => {
    if (rx_live.test(evt.target.value))
      setValue(evt.target.value );
  };

  const classes = useStyles();
  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid item xs={12} sx={{ border: 1, width: 1 }}>
        <Typography align="center"> 優惠</Typography>
      </Grid>
      <Grid item xs={4} sx={{ border: 1 }}>
        {" "}
        <Typography align="center"> 設置優惠碼</Typography>
      </Grid>
      <Grid item xs={8} sx={{ border: 1 }}>
        {" "}
        <Typography align="center"> 設置優惠期限</Typography>
      </Grid>
      <Grid item xs={4} sx={{ border: 1 }}>
        <TextField
          placeholder="點擊輸入優惠碼"
          sx={{ border: 0, margin: "auto" }}
          fullWidth
          InputProps={{ classes: { input: classes.input } }}
        />
      </Grid>
      <Grid item xs={3.5} sx={{ border: 1 }}>
        <TextField fullWidth type="date"></TextField>
      </Grid>
      <Grid item xs={1} sx={{ border: 1 }}>
        <Typography align="center"> 截止至</Typography>
      </Grid>
      <Grid item xs={3.5} sx={{ border: 1 }}>
        <TextField fullWidth type="date"></TextField>
      </Grid>
      <Grid item xs={12} sx={{ border: 1, width: 1 }}>
        <Typography align="center"> 優惠額度</Typography>
      </Grid>
      <Grid item xs={4} sx={{ border: 1, width: 1 }}>
        <Typography align="center"  sx={{marginTop:"3%"}}> RM</Typography>
      </Grid>
      <Grid item xs={4.5} sx={{ border: 1, width: 1 }}>
        <TextField
          placeholder="點擊輸入優惠金額"
          sx={{ border: 0, margin: "auto" }}
          fullWidth
          InputProps={{ classes: { input: classes.input } }}
          // type="number"
          value={value}
          onChange={handleAmount}
        />
      </Grid>
      <Grid item xs={3.5} sx={{ border: 1, width: 1 }}>
        <Button fullWidth>確認</Button>
      </Grid>
    </Grid>
  );
}

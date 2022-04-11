import * as React from "react";
import Box from "@mui/material/Box";
import PromotionSettingBoard from "./components/PromotionSettingBoard";
import PromotionHistoryBoard from "./components/PromotionHistoryBoard";
import Grid from "@mui/material/Grid";

export default function PromotionSetting() {
  return (
    <Box>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #5465f7",
          color: "158, 110, 255",
          borderRadius: 10,
        }}
      >
        {" "}
        優惠設置{" "}
      </h1>
      <Grid container  columns={{ xs: 12 }}>
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom:"2%",
            border: 1,
            boxShadow: 7,
          }}
        >
          <PromotionSettingBoard />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
            border: 1,
            boxShadow: 7,
          }}
        >
          <PromotionHistoryBoard />
        </Grid>
      </Grid>
    </Box>
  );
}

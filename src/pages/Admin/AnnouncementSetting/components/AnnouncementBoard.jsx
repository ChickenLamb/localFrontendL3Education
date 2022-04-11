import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import RichTextEditor from 'react-rte';

import RichTextEditor from "./RichTextEditor";
export default function AnnouncementBoard() {
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
      <Grid item xs={12} sx={{marginLeft:"5%"}} >
        <Grid
          item
          xs={12}
          sx={{ border: 2, height: 50, width: 1  }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 45,
            }}
          >
            通知
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ border: 1, minHeight: "400px"}}
        >
          <RichTextEditor />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ border: 1.5 }}
          container
          justify="center"
        >
          <Button sx={{ width: 1 }}>點擊上傳通知</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

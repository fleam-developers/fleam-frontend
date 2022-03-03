import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function FormItem({ isRequired = true, id_name, label, value, setValue }) {
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        required={isRequired}
        fullWidth
        id={id_name}
        label={label}
        name={id_name}
        autoComplete={id_name}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </Grid>
  );
}

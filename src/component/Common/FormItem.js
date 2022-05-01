import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function FormItem({ isRequired = true, multiline, maxRows, id_name, type, label, value, setValue }) {
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        required={isRequired}
        fullWidth
        id={id_name}
        type={type}
        label={label}
        name={id_name}
        autoComplete={id_name}
        multiline={multiline}
        rows={multiline ? maxRows : 1}
        maxRows={multiline ? maxRows : 1}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </Grid>
  );
}

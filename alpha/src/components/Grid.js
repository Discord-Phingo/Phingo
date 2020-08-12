import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Square from "./Square";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  const ITEM_WIDTH = 2;

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={ITEM_WIDTH}>
          <Paper className={classes.paper}>{<SongPick />}</Paper>
        </Grid>
        <Grid item xs={ITEM_WIDTH}>
          <Paper className={classes.paper}>{<SongPick />}</Paper>
        </Grid>
        <Grid item xs={ITEM_WIDTH}>
          <Paper className={classes.paper}>{<SongPick />}</Paper>
        </Grid>
        <Grid item xs={ITEM_WIDTH}>
          <Paper className={classes.paper}>{<SongPick />}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

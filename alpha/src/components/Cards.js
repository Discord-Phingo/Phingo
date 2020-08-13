import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Square from "./Square";
import { makeStyles } from "@material-ui/core/styles";

export default class Cards extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid id="row-1" container spacing={2}>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
        </Grid>
        <Grid id="row-2" container spacing={2}>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
        </Grid>
        <Grid id="row-3" container spacing={2}>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
        </Grid>
        <Grid id="row-4" container spacing={2}>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
          <Grid item xs={2}>
            <Square></Square>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

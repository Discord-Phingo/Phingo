import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SongPick from "./TextField";

export default class Square extends Component {
  render() {
    return (
      <Box>
        <SongPick />
      </Box>
    );
  }
}

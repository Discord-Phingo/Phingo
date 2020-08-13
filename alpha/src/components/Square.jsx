import React, { Component } from "react";
import Box from "@material-ui/core/Box";
// import SongPick from "./TextField";
import AutoCompleteText from "./AutoCompleteText";
import songs from "./songs";

export default class Square extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Box>
        {/* <SongPick /> */}
        <AutoCompleteText items={songs} />
      </Box>
    );
  }
}

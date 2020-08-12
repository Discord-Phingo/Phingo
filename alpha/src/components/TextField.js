import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const songList = [
  { title: "Foam", debut: 1989 },
  { title: "Run Like An Antelope", debut: 1989 },
  { title: "2001", debut: 1989 },
];

export default function SongPick() {
  const defaultProps = {
    options: songList,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: songList.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 150 }}>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="empty" margin="normal" />
        )}
      />
    </div>
  );
}

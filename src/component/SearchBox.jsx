import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from 'react';
import { blue } from "@mui/material/colors";

export default function SearchBox(props) {
  return(
      
      <div>
      <form
        onSubmit={(e) => {
            e.preventDefault();
            props.getMovies().then((data)=>{
                props.setMovies(data.Search)
            })
            props.setShow(true);
        }}
        >
             <br></br><br></br>
        <TextField
        style={{
          backgroundColor: "white",
      }}
          id="outlined-basic"
          label="Search Movie"
          variant="outlined"
          value={props.Search}
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
          required
        />
        <hr></hr>
        <Button variant="contained" type="submit">
          Show Movies
        </Button>
      </form>
  </div>
);
}

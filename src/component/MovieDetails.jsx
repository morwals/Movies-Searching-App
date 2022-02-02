import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MovieDetails(props) {
  return (
    <div>
      <div className="m-details">
        <div>
          <img src={props.item.Poster} alt="image.."></img>
        </div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>IMDB ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow                >
                  <TableCell>{props.item.Title}</TableCell>
                  <TableCell>{props.item.Year}</TableCell>
                  <TableCell>{props.item.Type}</TableCell>
                  <TableCell>{props.item.imdbID}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

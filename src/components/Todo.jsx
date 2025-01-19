import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../reducer/Reducer";

const Todo = () => {
  const rows = [];
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.todo);
  console.log(entities);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entities[0]?entities[0].data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
              </TableRow>
            )):[]}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          color="error"
          onClick={async () => {
            try {
              await dispatch(fetchTodos());
            } catch (error) {
              console.log(error);
            }
          }}
        >
          GET DATA
        </Button>
      </TableContainer>
    </div>
  );
};

export default Todo;

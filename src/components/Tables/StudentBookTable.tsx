import React from 'react';
import { TableCell } from '@mui/material';
import TableCellContainer from './TableCellContainer';

interface Props {
  id: number;
  department: string;
  name: string;
  date: string;
  amount: number;
  duration: string;
}
const StudentBookTable: React.FC<Props> = ({
  id,
  department,
  name,
  date,
  amount,
  duration,
}) => (
  <TableCellContainer path={`/studentbook/${id}`}>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell align="center">{department}</TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center">{date}</TableCell>
    <TableCell align="center">{amount}</TableCell>
    <TableCell align="center">{duration}</TableCell>
  </TableCellContainer>
);

export default StudentBookTable;

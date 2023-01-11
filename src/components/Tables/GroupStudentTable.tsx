import React from 'react';
import { TableCell } from '@mui/material';
import TableCellContainer from './TableCellContainer';
import { StudentType } from '../../types/index.dto';

type Props = StudentType;
const GroupStudentTable: React.FC<Props> = ({
  id,
  name,
  phoneNumber,
  email,
  age,
  point,
  startDate,
}) => (
  <TableCellContainer path={`/student/${id}`}>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell scope="row">{name}</TableCell>
    <TableCell align="center">{age}</TableCell>
    <TableCell align="center">{phoneNumber}</TableCell>
    <TableCell align="center">{email}</TableCell>
    <TableCell align="center">{point}</TableCell>
    <TableCell align="right">{startDate.toString()}</TableCell>
  </TableCellContainer>
);

export default GroupStudentTable;

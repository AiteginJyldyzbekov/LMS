import React from 'react';
import { TableCell } from '@mui/material';
import TableCellContainer from './TableCellContainer';
import { StudentType } from '../../types/index.dto';

type Props = StudentType;

const StudentsTable: React.FC<Props> = ({
  id,
  direction,
  group,
  name,
  phoneNumber,
  email,
  age,
  point,
}) => (
  <TableCellContainer path={`/student/${id}`}>
    <TableCell component="th" scope="row" sx={{ padding: '16px 16px' }}>
      {id}
    </TableCell>
    <TableCell align="center">{direction}</TableCell>
    <TableCell align="center">{group}</TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center">{phoneNumber}</TableCell>
    <TableCell align="center">{email}</TableCell>
    <TableCell align="center">{age}</TableCell>
    <TableCell align="center">{point}</TableCell>
  </TableCellContainer>
);

export default StudentsTable;

import React from 'react';
import { TableCell } from '@mui/material';
import TableCellContainer from './TableCellContainer';
import { MentorType } from '../../types/index.dto';

type Props = MentorType;

const MentorsTable: React.FC<Props> = ({
  id,
  direction,
  name,
  lastName,
  phoneNumber,
}) => {
  return (
    <TableCellContainer path={`/mentor/${id}`}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{direction}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
    </TableCellContainer>
  );
};

export default MentorsTable;

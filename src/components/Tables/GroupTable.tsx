import React from 'react';
import { TableCell } from '@mui/material';
import dayjs from 'dayjs';
import TableCellContainer from './TableCellContainer';
import { GroupType } from '../../types/index.dto';

type Props = GroupType;
const GroupTable: React.FC<Props> = ({
  id,
  name,
  direction,
  startDate,
  quantity,
  duration,
  status,
}) => (
  <TableCellContainer path={`/group/${id}`}>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell scope="row">{name}</TableCell>
    <TableCell align="left">{direction}</TableCell>
    <TableCell align="right">
      {dayjs(startDate?.toString()).format('DD.MM.YYYY HH:mm') || ''}
    </TableCell>
    <TableCell align="right">{quantity}</TableCell>
    <TableCell align="right">{duration}</TableCell>
    <TableCell align="right">{status}</TableCell>
  </TableCellContainer>
);
export default GroupTable;

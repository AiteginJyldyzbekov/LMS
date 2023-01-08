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

    <TableCell
      scope="row"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {name}
    </TableCell>
    <TableCell
      align="left"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {direction}
    </TableCell>
    <TableCell
      align="right"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {startDate?.toString() || ''}
    </TableCell>
    <TableCell
      align="right"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {quantity}
    </TableCell>
    <TableCell
      align="right"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {duration}
    </TableCell>
    <TableCell
      align="right"
      sx={{
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
      }}
    >
      {status}
    </TableCell>
  </TableCellContainer>
);
export default GroupTable;

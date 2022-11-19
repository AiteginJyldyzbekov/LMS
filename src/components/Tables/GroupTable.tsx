import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
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
}) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path={`/group/${id}`}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="left">{direction}</TableCell>
      <TableCell align="right">{startDate?.toString() || ''}</TableCell>
      <TableCell align="right">{quantity}</TableCell>
      <TableCell align="right">{duration}</TableCell>
      <TableCell align="right">{status}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/createGroup?id=${id}`);
          }}
          color="primary"
        >
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableCellContainer>
  );
};

export default GroupTable;

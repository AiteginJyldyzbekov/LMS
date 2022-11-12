import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';

interface Props {
  id: string | number;
  name: string;
  department: string;
  date: string;
  amount: string | number;
  duration: string | number;
}
const GroupTable: React.FC<Props> = ({
  id,
  name,
  department,
  date,
  amount,
  duration,
}) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path={`/group/${id}`}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="left">{department}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">{duration}</TableCell>
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

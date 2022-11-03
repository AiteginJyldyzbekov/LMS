import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';

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
    <TableRow
      onClick={() => navigate(`/group/${id}`)}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          background: 'rgba(145, 158, 171, 0.16)',
        },
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="left">{department}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">{duration}</TableCell>
      <TableCell align="right">
        <IconButton>
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default GroupTable;

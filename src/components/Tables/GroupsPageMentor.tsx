import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  department: string;
  name: string;
  date: string;
  amount: number;
  duration: string;
}
const GroupsAdminTable: React.FC<Props> = ({
  id,
  department,
  name,
  date,
  amount,
  duration,
}) => {
  const navigate = useNavigate();
  return (
    <TableRow
      onClick={() => navigate(`/mentor/${id}`)}
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
      <TableCell align="center">{department}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">{amount}</TableCell>
      <TableCell align="center">{duration}</TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton color="primary">
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default GroupsAdminTable;

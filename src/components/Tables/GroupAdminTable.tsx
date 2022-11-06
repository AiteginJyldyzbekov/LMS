import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  number: number;
  mail: string;
  age: number | string;
  point: number | string;
  date: string;
}
const GroupAdminTable: React.FC<Props> = ({
  id,
  name,
  number,
  mail,
  age,
  point,
  date,
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
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">{mail}</TableCell>
      <TableCell align="center">{point}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton color="primary">
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default GroupAdminTable;

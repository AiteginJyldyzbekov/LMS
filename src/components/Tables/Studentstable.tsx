import React from 'react';
import { TableCell, TableRow, IconButton } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string | number;
  department: string;
  groupName: string;
  name: string;
  number: string | number;
  mail: string;
  age: number;
  point: number;
}
const StudentsTable: React.FC<Props> = ({
  id,
  department,
  groupName,
  name,
  number,
  mail,
  age,
  point,
}) => {
  const navigate = useNavigate();
  return (
    <TableRow
      onClick={() => navigate(`/student/${id}`)}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          background: 'rgba(145, 158, 171, 0.16)',
        },
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" sx={{ padding: '16px 16px' }}>
        {id}
      </TableCell>
      <TableCell align="center">{department}</TableCell>
      <TableCell align="center">{groupName}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">{mail}</TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{point}</TableCell>
      <TableCell align="center">
        <IconButton>
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default StudentsTable;

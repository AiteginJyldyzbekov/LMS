import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string | number;
  department: string;
  name: string;
  surname: string;
  number: number;
}
const MentorsTable: React.FC<Props> = ({
  id,
  department,
  name,
  surname,
  number,
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
      <TableCell scope="row">{department}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton color="primary">
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default MentorsTable;

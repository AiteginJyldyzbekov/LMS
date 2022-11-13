import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';

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
    <TableCellContainer>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{department}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/createMentor?id=${id}`);
          }}
          color="primary"
        >
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableCellContainer>
  );
};

export default MentorsTable;

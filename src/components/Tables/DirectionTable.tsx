import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Result } from '../../pages/directionPageForAdmin/DirectionPage';

const DirectionTable: React.FC<Result> = ({ id, group, countOfStudents }) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path={`/direction/${id}`}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{group}</TableCell>
      <TableCell sx={{ paddingLeft: '7%' }} align="left">
        {countOfStudents}
      </TableCell>
      <TableCell align="right">
        <IconButton
          color="error"
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteForeverIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/editDirection?id=${id}`);
          }}
          color="primary"
        >
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableCellContainer>
  );
};

export default DirectionTable;

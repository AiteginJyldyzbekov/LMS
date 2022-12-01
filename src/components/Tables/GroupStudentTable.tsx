import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';
import { StudentType } from '../../types/index.dto';

type Props = StudentType;
const GroupStudentTable: React.FC<Props> = ({
  id,
  name,
  phoneNumber,
  email,
  age,
  point,
  startDate,
}) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path={`/student/${id}`}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{name}</TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{point}</TableCell>
      <TableCell align="right">{startDate.toString()}</TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/createStudent?id=${id}`);
          }}
          color="primary"
        >
          <EditOffIcon />
        </IconButton>
      </TableCell>
    </TableCellContainer>
  );
};

export default GroupStudentTable;

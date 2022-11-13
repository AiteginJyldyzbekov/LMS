import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';

interface Props {
  id: number;
  name: string;
  number: number;
  mail: string;
  age: number | string;
  point: number | string;
  date: string;
}
const GroupStudentTable: React.FC<Props> = ({
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
    <TableCellContainer path={`/student/${id}`}>
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

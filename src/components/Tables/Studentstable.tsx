import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';
import { StudentType } from '../../types/index.dto';

type Props = StudentType;

const StudentsTable: React.FC<Props> = ({
  id,
  direction,
  group,
  name,
  phoneNumber,
  email,
  age,
  point,
}) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path={`/student/${id}`}>
      <TableCell component="th" scope="row" sx={{ padding: '16px 16px' }}>
        {id}
      </TableCell>
      <TableCell align="center">{direction}</TableCell>
      <TableCell align="center">{group}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{point}</TableCell>
      <TableCell align="center">
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

export default StudentsTable;

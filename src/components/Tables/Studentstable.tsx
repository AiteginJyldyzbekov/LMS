import React from 'react';
import { TableCell, IconButton } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';
import { AllStudentsType } from '../../types/index.dto';

// interface Props {
//   id: string | number;
//   department: string;
//   groupName: string;
//   name: string;
//   number: string | number;
//   mail: string;
//   age: number;
//   point: number;
// }

type Props = AllStudentsType;

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
    <TableCellContainer path={`/student/${id}`}>
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

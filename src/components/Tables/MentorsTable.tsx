import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from 'react-router-dom';
import TableCellContainer from './TableCellContainer';
import { MentorType } from '../../types/index.dto';

type Props = MentorType;

const MentorsTable: React.FC<Props> = ({
  id,
  direction,
  name,
  lastName,
  phoneNumber,
}) => {
  const navigate = useNavigate();
  return (
    <TableCellContainer path="/mentor/1">
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell scope="row">{direction}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
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

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import { mentorsPageData } from '../../constants/mentorsPageAdmin';

const AdminMentorsPage: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Department</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Surname</TableCell>
                        <TableCell align="left">Number</TableCell>
                        <TableCell align="left">Mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mentorsPageData.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell component="th" scope="row">{item.id}</TableCell>
                            <TableCell align="left">{item.department}</TableCell>
                            <TableCell align="left">{item.name}</TableCell>
                            <TableCell align="left">{item.surname}</TableCell>
                            <TableCell align="left">{item.number}</TableCell>
                            <TableCell align="left">{item.mail}</TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="outlined"
                                    sx={{
                                        padding: '0'
                                    }}
                                >Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default AdminMentorsPage;

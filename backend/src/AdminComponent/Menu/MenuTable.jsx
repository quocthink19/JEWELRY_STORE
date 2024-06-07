import { Box, Card, CardHeader, Paper, Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import { Delete } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

const orders = [1, 1, 1, 1, 1, 1, 1]

export default function MenuTable() {
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                        title={"Menu"}
                        sx={{ pt: 2, alignItems: "center" }} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">image</TableCell>
                                    <TableCell align="right">title</TableCell>
                                    <TableCell align="right">ingredients</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">Avaibilty</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {1}
                                        </TableCell>
                                        <TableCell align="right">{"image"}</TableCell>

                                        <TableCell align="right">
                                            {"anhtri@gmail.com"}
                                        </TableCell>

                                        <TableCell align="right">{"price"}</TableCell>
                                        <TableCell align="right">{"ring"}</TableCell>
                                        <TableCell align="right">
                                            <IconButton>
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Box>
        </div>
    )
}

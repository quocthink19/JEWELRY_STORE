import { Box, Card, CardHeader, Paper, Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react';

const orders = [1, 1, 1, 1, 1, 1, 1]

export default function IngredientCategoryTable() {
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                        title={"Ingredient Category"}
                        sx={{ pt: 2, alignItems: "center" }} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">id</TableCell>
                                    <TableCell align="left">name</TableCell>

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
                                        <TableCell align="left">{"name"}</TableCell>
                                        
                                        
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


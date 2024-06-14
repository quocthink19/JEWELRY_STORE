import { Box, Card, CardHeader, Paper, Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import CreateIcon from '@mui/icons-material/Create';
import { Modal } from '@mui/material';
import React from 'react';
import CreateIngredientForm from './CreateIngredientsForm';

const orders = [1, 1, 1, 1, 1, 1, 1]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function IngredientTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton onclik={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                        title={"Ingredients"}
                        sx={{ pt: 2, alignItems: "center" }} />
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">id</TableCell>
                                    <TableCell align="right">name</TableCell>
                                    <TableCell align="right">category</TableCell>
                                    <TableCell align="right">Avaibilty</TableCell>
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

                                        <TableCell align="right">{"price"}</TableCell>
                                        <TableCell align="right">{"ring"}</TableCell>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateIngredientForm/>
                    </Box>
                </Modal>
            </Box>
        </div>
    )
}

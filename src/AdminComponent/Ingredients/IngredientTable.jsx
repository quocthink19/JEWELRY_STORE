import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { getAllComponent } from '../../component/State/Components/Action';
import UpdateForm from './UpdateForm';
import CreateIngredientsForm from './CreateIngredientsForm';

const IngredientTable = () => {
    const [open, setOpen] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const { components } = useSelector((state) => state.component);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    useEffect(() => {
        dispatch(getAllComponent({ jwt }));
    }, [dispatch, jwt]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedComponent(null);
    };

    const handleUpdateClick = (component) => {
        setSelectedComponent(component);
        setOpen(true);
    };

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="create">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Ingredients"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="ingredient table" sx={{ minWidth: 650 }}>
                        <TableHead sx={{ backgroundColor: '#0B4CBB' }}>
                            <TableRow>
                                <TableCell align="left">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        ID
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        Name
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        Price
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        Price BuyBack
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        Actions
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {components.map((item, index) => (
                                <TableRow key={item.id} sx={{
                                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                                    "&:hover": { backgroundColor: "#e0e0e0" },
                                  }}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.price}</TableCell>
                                    <TableCell align="left">{item.pricebuyback}</TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={() => handleUpdateClick(item)} aria-label="update">
                                            Update
                                        </IconButton>
                                    </TableCell>
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
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {selectedComponent ? (
                        <UpdateForm component={selectedComponent} onClose={handleClose} />
                    ) : (
                        <CreateIngredientsForm onClose={handleClose} />
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default IngredientTable;

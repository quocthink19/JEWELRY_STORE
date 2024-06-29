import { Delete } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenuItem} from '../../component/State/Menu/Action';


export default function MenuTable() {
    const {menu} = useSelector(store=>store)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const jwt = localStorage.getItem("jwt");
    console.log("categoty Details", menu)

    useEffect(() => {
        dispatch(getAllMenuItem({jwt}
    ))
    },[]);
    
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton onClick={()=>navigate("/admin/jewelry/add-menu")} aria-label="settings">
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
                                    <TableCell align="right">Jewelry Code</TableCell>
                                    <TableCell align="right">name</TableCell>
                                    <TableCell align="right">type</TableCell>
                                    <TableCell align="right">components</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {menu.menuItems.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img src={row.images} alt="Product Image" style={{ width: 50, height: 50 }} />
                                        </TableCell>
                                        <TableCell align="right">{row.code}</TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">
                                            {row.jewelryCategory.name}
                                        </TableCell>

                                        <TableCell align="right">
                                        {row.components[0]?.name} with {row.components[1]?.name}
                                        </TableCell>

                                        <TableCell align="right">{row.price}</TableCell>

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
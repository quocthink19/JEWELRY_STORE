import { Delete } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMenuItemsByJewelryId } from "../../component/State/Menu/Action";

export default function MenuTable() {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant, ingredients, menu} = useSelector((store)=>store);
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(
            getMenuItemsByJewelryId({
                jwt,
                restaurantId: id,
                vegetarian: type === "vegetarian",
                nonveg: type === "non_vegetarian",
                seasonal: type === "seasonal",
                category: selectedCategory,
            })
            );
        });
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
                                    <TableCell align="right">title</TableCell>
                                    <TableCell align="right">ingredients</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="right">Avaibilty</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {menu.menuItem.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                        <Avatar src={item.images[0]}></Avatar>
                                        </TableCell>
                                        <TableCell align="right">{item.name}</TableCell>
                                        <TableCell align="right">
                                            {item.ingredients.map((ingredient) => <Chip label={ingredient}/>)}
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

import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography } from '@mui/material';
import React from 'react';

const buybacks = [
    {
        id: 1,
        customer: 'anhtri@gmail.com',
        price: '$100',
        date: '2023-06-01'
    },
    {
        id: 2,
        customer: 'john.doe@example.com',
        price: '$200',
        date: '2023-06-02'
    },
    // Add more buyback objects as needed
];

export default function BuyBackTable({ filter }) {
    const filteredBuyBacks = buybacks.filter(buyback => {
        if (filter === "ALL") return true;
        return buyback.status?.toUpperCase() === filter;
    });

    return (
        <Box sx={{ padding: 2 }}>
            <Card sx={{ mt: 2, boxShadow: 3 }}>
                <CardHeader
                    title={"BuyBack Records"}
                    sx={{
                        pt: 2,
                        pb: 1,
                        alignItems: "center",
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        backgroundColor: '#f5f5f5', // Background color for the header
                    }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'#0B4CBB' }}>
                                <TableCell>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>ID</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Customer</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Price</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Date</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredBuyBacks.map((buyback) => (
                                <TableRow
                                    key={buyback.id}
                                    sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0e0e0' } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {buyback.id}
                                    </TableCell>
                                    <TableCell align="center">{buyback.customer}</TableCell>
                                    <TableCell align="center">{buyback.price}</TableCell>
                                    <TableCell align="center">{buyback.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}

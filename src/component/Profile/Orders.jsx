import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import OrdersCard from './OrderCard';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" }
];

export const Orders = () => {
  const [filterValue, setFilterValue] = useState("ALL");

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className='px-2'>
      <Card className='p-5' sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Typography sx={{ paddingBottom: "1rem", color: "black", fontWeight: "bold" }} variant='h5'>
          Order Status
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup onChange={handleFilter} row name='category' value={filterValue}>
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                control={<Radio sx={{ color: "#0B4CBB", '&.Mui-checked': { color: "red" } }} />}
                label={item.label}
                sx={{ color: "black", fontWeight: "bold" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrdersCard filter={filterValue} />
    </div>
  );
};

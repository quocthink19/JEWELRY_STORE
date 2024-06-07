import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import OrdersTable from './OrdersTable';


const orderStatus=[
    {label:"Pending",value:"PANDING"},
    {label:"Completed",value:"COMPLETED"},
    {label:"All",value:"ALL"}
]
export const Orders = () => {
    const [filterValue, setFilterValue] = useState();

    const handleFilter = (e,value) => {
        setFilterValue(value);
    }

    return (
        <div className='px-2'>
            <Card className='p-5'>
                <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                    Order Status

                </Typography>
                <FormControl>
                    <RadioGroup onchange={handleFilter} row name='category' value={filterValue || "all"}>
                        {orderStatus.map((item)=><FormControlLabel
                        key={item.label}
                        value={item.value}
                        control={<Radio/>}
                        label={item.label}
                        sx={{color:"gray"}}
                        />)}
                    </RadioGroup>
                </FormControl>
            </Card>
                <OrdersTable/>
        </div>
    )
}
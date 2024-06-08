import { Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';

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

const initialValue = {
    image: "",
    location: "",
    name: "",
    startedAt: "",
    endsAt: null
}

export const Events = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formValue, setFormValue] = React.useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit ",formValue);
        setFormValue(initialValue)
    }
    const handleFormChange = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }
    const handleDateChange = (e) => {
        const formateDate=days(date).format("MMMM DD, YYYY hh:mm A");
        setFormValue({...formValue,[dataType]:formateDate})
    }
    return (
        <div>
            <div className='p-5'>
                <Button onClick={handleOpen} variant='contained'>Create New Event</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Gird item xs={12}>
                                    <TextField
                                    name="image"
                                    label="Image URL"
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.image}
                                    onChange={handleFormChange}
                                    />
                                </Gird>
                                <Gird item xs={12}>
                                    <TextField
                                    name="location"
                                    label="Location"
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.image}
                                    onChange={handleFormChange}
                                    />
                                </Gird>
                                <Gird item xs={12}>
                                    <TextField
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.image}
                                    onChange={handleFormChange}
                                    />
                                </Gird>
                                <Gird item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props}/>}
                                            label="Start Date and Time"
                                            value={formValue.startedAt}
                                            onChange={(newValue) =>
                                                handleDateChange(newValue,"startedAt")
                                            }
                                            inputFormat="MM/ddd?yyyy hh:mm a"
                                            className="w-full"
                                            sx={{width: "100%"}}
                                        />
                                    </LocalizationProvider>
                                </Gird>
                                <Gird item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props}/>}
                                            label="Endd Date and Time"
                                            value={formValue.endsAt}
                                            onChange={(newValue) =>
                                                handleDateChange(newValue,"endsAt")
                                            }
                                            inputFormat="MM/ddd?yyyy hh:mm a"
                                            className="w-full"
                                            sx={{width: "100%"}}
                                        />
                                    </LocalizationProvider>
                                </Gird>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
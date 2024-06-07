import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import React, { useState } from 'react';


const initialValues = {
    name: "",
    description: "",
    jewelryType: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    potalCode: "",
    country: "",
    email: "",
    mobile: "",
    instagram: "",
    facebook: "",
    openingHours: "Mon-Sun : 9:00 AM - 12:00 PM",
    images: []
}

const CreateJewelryForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const formik = useFormik({
        initialValues,
        onSubmit: () => {
            const data={
                name: formik.values.name,
                description: formik.values.description,
                jewelryType: formik.values.jewelryType,
                address: {
                    streetAddress: formik.values.streetAddress,
                    City: formik.values.city,
                    StateProvince: formik.values.stateProvince,
                    potalCode: formik.values.potalCode,
                    country: formik.values.country
                },

                contactInformation:{
                    email: formik.values.email,
                    mobile: formik.values.mobile,
                    instagram: formik.values.instagram,
                    facebook: formik.values.facebook,
                },

                OpeningHours: formik.values.openingHours,
                images: formik.values.images,
            };
            console.log("data ---",data)
        },
    });
    const handleImageChange = (e) => {

    }
    const handleRemoveImage = (index) => {

    }
    return (
        <div className='py-10 lg:flex px-5 items-center justify-center min-h-screen'>
            <div className="lg:max-w-4x1">
                <h1 className='font-bold text-2x1 text-center py-2'>
                    Add New Jewelry
                </h1>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <Grid container spacing={2}>
                        <Grid className='flex flex-wrap gap-5' item xs={12}>
                            <input
                                accept='image/*'
                                id='fileInput'
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                                type='file' />

                            <label className='relative' htmlFor='fileInput'>
                                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                                    <AddPhotoAlternateIcon className="text-white" />
                                </span>
                                {
                                    uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                        <CircularProgress />
                                    </div>
                                }
                            </label>
                            <div className='flex flex-wrap gap-2'>
                                {[1, 1, 1].map((image, index) => (
                                    <div className="relative">
                                        <img
                                            className='w-24 h-24 object-cover'
                                            key={index}
                                            src="D:\Ring-1.jpg" alt="" />
                                        <IconButton
                                            size='small'
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                outline: "none"
                                            }}
                                            onClick={() => handleRemoveImage(index)}>
                                            <CloseIcon sx={{fontSize:"1rem"}}/>
                                        </IconButton>
                                    </div>
                                ))}
                                
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.value.name}>
                            </TextField>

                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="jewelryType"
                                name="jewelryType"
                                label="JewelryType"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                            id="openingHours"
                            name="openingHours"
                            label="OpeningHours"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                            id="address"
                            name="address"
                            label="Address"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                            id="city"
                            name="city"
                            label="City"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                            id="stateProvince"
                            name="stateProvince"
                            label="StateProvince"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                            id="potalCode"
                            name="potalCode"
                            label="PotalCode"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                            id="country"
                            name="country"
                            label="Country"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                            id="mobile"
                            name="mobile"
                            label="Mobile"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                            id="instagram"
                            name="instagram"
                            label="Instagram"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                            id="facebook"
                            name="facebook"
                            label="Facebook"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.value.name}>

                            </TextField>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Create jewelry
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateJewelryForm

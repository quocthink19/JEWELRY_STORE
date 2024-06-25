import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';

const initialValues = {
    name: "",
    description: "",
    jewelryType: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    postalCode: "",
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
        onSubmit: (values) => {
            const data={
                name: values.name,
                description: values.description,
                jewelryType: values.jewelryType,
                address: {
                    streetAddress: values.streetAddress,
                    City: values.city,
                    StateProvince: values.stateProvince,
                    postalCode: values.postalCode,
                    country: values.country
                },
                contactInformation:{
                    email: values.email,
                    mobile: values.mobile,
                    instagram: values.instagram,
                    facebook: values.facebook,
                },
                OpeningHours: values.openingHours,
                images: values.images,
            };
            console.log("data ---",data)
        },
    });

    const handleImageChange = async(e) => {
        const file = e.target.files[0];
        setUploadImage(true);
        const image = await uploadImageToCloudinary(file);
        console.log("image ---",image);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);
    };

    return (
        <div className='py-10 px-5 items-center justify-center min-h-screen'>
            <div className="lg:max-w-4xl mx-auto">
                <h1 className='font-bold text-2xl text-center py-2'>
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
                                {formik.values.images.map((image, index) => (
                                    <div className="relative" key={index}>
                                        <img
                                            className='w-24 h-24 object-cover'
                                            src={image}
                                            alt="" />
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
                                value={formik.values.name}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.description}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="jewelryType"
                                name="jewelryType"
                                label="JewelryType"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.jewelryType}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="openingHours"
                                name="openingHours"
                                label="OpeningHours"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.openingHours}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="streetAddress"
                                name="streetAddress"
                                label="Street Address"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.streetAddress}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="city"
                                name="city"
                                label="City"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.city}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                                id="stateProvince"
                                name="stateProvince"
                                label="State/Province"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.stateProvince}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                                id="postalCode"
                                name="postalCode"
                                label="Postal Code"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.postalCode}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField fullWidth
                                id="country"
                                name="country"
                                label="Country"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.country}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.email}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="mobile"
                                name="mobile"
                                label="Mobile"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.mobile}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="instagram"
                                name="instagram"
                                label="Instagram"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.instagram}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField fullWidth
                                id="facebook"
                                name="facebook"
                                label="Facebook"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.facebook}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Create Jewelry
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateJewelryForm;
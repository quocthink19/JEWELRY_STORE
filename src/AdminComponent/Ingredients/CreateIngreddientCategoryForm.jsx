import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
    });

    const handleSubmit = (e) => {
        console.log(formData);
        // Additional logic to handle form submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-black text-center text-xl pb-10' style={{ fontSize: '30px' }}>
                    Create Ingredient Category
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Category"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <Button variant="contained" type="submit">
                        Create Category
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateIngredientCategoryForm;

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const CreateIngredientsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        ingredientCategoryId: ""
    });

    const handleSubmit = (e) => {
        const data = {
            name: formData.name,
            ingredientCategoryId: formData.ingredientCategoryId
        };
        console.log(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='p-5 bg-white w-120 h-120 flex flex-col justify-center'>
                <h1 className='text-black text-center text-xl pb-10' style={{ fontSize: '30px' }}>Create Ingredient</h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.name}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="ingredient-category-label">Category</InputLabel>
                        <Select
                            labelId="ingredient-category-label"
                            id="ingredient-category"
                            value={formData.ingredientCategoryId}
                            onChange={handleInputChange}
                            name="ingredientCategoryId"
                            variant="outlined"
                        >
                            <MenuItem value={1}>Category 1</MenuItem>
                            <MenuItem value={2}>Category 2</MenuItem>
                            <MenuItem value={3}>Category 3</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" type="submit">
                        Create Ingredient
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateIngredientsForm;

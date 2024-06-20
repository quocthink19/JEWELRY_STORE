import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../component/State/ingredients/Action';

const CreateIngredientsForm = () => {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem('jwt')
    const {restaurant,ingredients} = useSelector((store)=>store);
    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    });

    const handleSubmit = () => {
        const data = {
            name: formData,
            restaurantId: restaurant.usersRestaurant.id
        };
        dispatch(createIngredient(data,jwt))
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
        <div className=''>
            <div className='p-5'>
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
                            label="Category"
                            onChange={handleInputChange}
                            name="categoryId"
                        >
                            {ingredients.category.map((item) => (
                                <MenuItem  value={item.id}>{item.name}</MenuItem>
                            ))}
                            
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

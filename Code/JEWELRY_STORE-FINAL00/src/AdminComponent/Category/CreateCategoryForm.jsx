import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const CreateCategoryForm = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
  });

  const handleSubmit = (event) => {
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=''>
      <div className='p-5 '>
        <h1 className='text-black-400 text-center text-xl pb-10' style={{}}>
          Create Jewelry Category
        </h1>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id='categoryName'
            name='categoryName'
            label='Jewelry Category'
            variant='outlined'
            onChange={handleInputChange}
            value={formData.categoryName}
            InputProps={{ style: { width: '100%' } }}
          />
          <Button variant='contained' type='submit' sx={{ width: '100%' }}>
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryForm;

import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Our Jewelry Store
        </Typography>
        <img src="https://images.pexels.com/photos/5370704/pexels-photo-5370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Jewelry" style={{ width: '100%', height: 'auto' }} />
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Explore Collection
          </Button>
          <Button variant="outlined" color="secondary">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

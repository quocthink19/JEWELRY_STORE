import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'; // Import Carousel library
import { Paper } from '@mui/material'; // Import Paper component from MUI

const HomePage = () => {
  // Define an array of image URLs for the carousel
  const images = [
    "https://images.pexels.com/photos/5370704/pexels-photo-5370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8398840/pexels-photo-8398840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5370658/pexels-photo-5370658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6625941/pexels-photo-6625941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  // Define a function to render each image in the carousel
  const renderCarouselItem = (item, index) => (
    <Paper key={index}>
      <img src={item} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
    </Paper>
  );

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" gutterBottom fontWeight="bold"> {/* Apply fontWeight="bold" here */}
          Welcome to Our Jewelry Store
        </Typography>
        
        {/* Carousel component with automatic sliding */}
        <Carousel autoPlay={true} interval={5000} animation="slide">
          {images.map((image, index) => renderCarouselItem(image, index))}
        </Carousel>

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

// Products.jsx
import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  Typography, 
  CardContent,
  CardMedia 
} from '@mui/material';

const Products = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="{product_image_url}"
              alt="Product"
            />
            <CardContent>
              <Typography variant="h6">Product Name</Typography>
              <Typography variant="body2" color="text.secondary">
                Product Description
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Products
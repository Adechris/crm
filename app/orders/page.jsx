"use client"; // Add this directive to mark the component as a client component

import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'O001', date: '2023-10-01', status: 'Pending', amount: '$1000' },
    { id: 2, orderId: 'O002', date: '2023-10-02', status: 'Shipped', amount: '$1500' },
    { id: 3, orderId: 'O003', date: '2023-10-03', status: 'Delivered', amount: '$2000' },
    // Add more orders as needed
  ]);

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit order with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete order with ID: ${id}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Create Order
      </Button>
      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(order.id)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(order.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default Order;

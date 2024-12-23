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

const Quotes = () => {
  const [quotes, setQuotes] = useState([
    { id: 1, quoteNumber: 'Q001', customer: 'John Doe', amount: '$1000', status: 'Pending' },
    { id: 2, quoteNumber: 'Q002', customer: 'Jane Smith', amount: '$1500', status: 'Approved' },
    { id: 3, quoteNumber: 'Q003', customer: 'Sam Brown', amount: '$2000', status: 'Rejected' },
    // Add more quotes as needed
  ]);

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit quote with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete quote with ID: ${id}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Quotes
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Create Quote
      </Button>
      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quote #</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>{quote.quoteNumber}</TableCell>
                  <TableCell>{quote.customer}</TableCell>
                  <TableCell>{quote.amount}</TableCell>
                  <TableCell>{quote.status}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(quote.id)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(quote.id)}>
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

export default Quotes;



 
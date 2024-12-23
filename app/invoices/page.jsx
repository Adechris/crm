
// Invoices.jsx
import React from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip 
} from '@mui/material';

const Invoices = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Invoices
      </Typography>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice #</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Add invoice rows here */}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};
export default Invoices
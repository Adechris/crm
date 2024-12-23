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
  TextField,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activities, setActivities] = useState([
    { id: 1, activityId: 'A001', description: 'Meeting with Client', date: '2023-10-01', status: 'Completed' },
    { id: 2, activityId: 'A002', description: 'Project Review', date: '2023-10-02', status: 'In Progress' },
    { id: 3, activityId: 'A003', description: 'Team Building', date: '2023-10-03', status: 'Pending' },
    // Add more activities as needed
  ]);

  const filteredActivities = activities.filter((activity) =>
    activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit activity with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete activity with ID: ${id}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Activities
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Create Activity
      </Button>
      <div>

      <TextField
        label="Search by Description"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2, width: '100%', maxWidth: 600 }}
      />
      </div>
      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Activity ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.activityId}</TableCell>
                  <TableCell>{activity.description}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.status}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(activity.id)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(activity.id)}>
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

export default Activities;

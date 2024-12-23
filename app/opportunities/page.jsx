// Opportunities.jsx
import React from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableRow 
} from '@mui/material';

const Opportunities = () => {
  const opportunities = [
    { name: 'New Website Redesign', stage: 'Proposal Sent', amount: '$25,000', closeDate: '2023-12-15' },
    { name: 'Mobile App Development', stage: 'Negotiation', amount: '$45,000', closeDate: '2023-12-20' },
    { name: 'Cloud Migration Project', stage: 'Qualified', amount: '$60,000', closeDate: '2024-01-10' },
    { name: 'E-commerce Platform', stage: 'Prospecting', amount: '$35,000', closeDate: '2024-01-15' },
    { name: 'CRM Integration', stage: 'Proposal Sent', amount: '$50,000', closeDate: '2024-01-25' },
    { name: 'Cybersecurity Audit', stage: 'Negotiation', amount: '$20,000', closeDate: '2024-02-01' },
    { name: 'SEO Strategy Implementation', stage: 'Qualified', amount: '$15,000', closeDate: '2024-02-05' },
    { name: 'Data Analytics Dashboard', stage: 'Proposal Sent', amount: '$40,000', closeDate: '2024-02-10' },
    { name: 'API Development', stage: 'Prospecting', amount: '$30,000', closeDate: '2024-02-20' },
    { name: 'AI Chatbot Implementation', stage: 'Qualified', amount: '$70,000', closeDate: '2024-03-01' }
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Opportunities
      </Typography>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Opportunity Name</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Close Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {opportunities.map((opportunity, index) => (
              <TableRow key={index}>
                <TableCell>{opportunity.name}</TableCell>
                <TableCell>{opportunity.stage}</TableCell>
                <TableCell>{opportunity.amount}</TableCell>
                <TableCell>{opportunity.closeDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default Opportunities;

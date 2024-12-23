// app/dashboard/page.js
'use client';  // Need this for MUI components

import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardContent,
  LinearProgress
} from '@mui/material';
import {
  TrendingUp,
  Person,
  ShoppingCart,
  AttachMoney
} from '@mui/icons-material';

export default function DashboardHome() {
  // Sample data - in a real app, this would come from your backend
  const stats = [
    {
      title: "Total Sales",
      value: "$23,456",
      icon: <AttachMoney />,
      color: "#2196f3",
      increase: "+14%"
    },
    {
      title: "Total Customers",
      value: "1,234",
      icon: <Person />,
      color: "#4caf50",
      increase: "+7%"
    },
    {
      title: "Total Orders",
      value: "456",
      icon: <ShoppingCart />,
      color: "#ff9800",
      increase: "+12%"
    },
    {
      title: "Revenue Growth",
      value: "89%",
      icon: <TrendingUp />,
      color: "#f44336",
      increase: "+23%"
    }
  ];

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {stat.value}
                    </Typography>
                    <Typography color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      {stat.increase} from last month
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      backgroundColor: `${stat.color}15`,
                      borderRadius: '50%',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            {/* Add a table or list of recent orders here */}
            <Typography color="textSecondary">
              Loading recent orders...
            </Typography>
            <LinearProgress sx={{ mt: 2 }} />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Performance Overview
            </Typography>
            {/* Add a chart or performance metrics here */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Monthly Target
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={75} 
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" gutterBottom>
                Customer Satisfaction
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={88} 
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" gutterBottom>
                Sales Growth
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={62} 
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
// // Account.jsx
// import React from 'react';

// const Account = () => {
//   return (
//     <div className="account-container">
//       <h2>Account Information</h2>
//       <div className="account-details">
//         <form>
//           <div className="form-group">
//             <label>Account Name</label>
//             <input type="text" placeholder="Enter account name" />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter email" />
//           </div>
//           <div className="form-group">
//             <label>Phone</label>
//             <input type="tel" placeholder="Enter phone number" />
//           </div>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Account;

// Accounts.jsx
import React from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  MenuItem, 
  Paper, 
  Divider 
} from '@mui/material';

const Accounts = () => {
  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Manage Accounts
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Add New Account
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Account Name" 
              margin="normal" 
              variant="outlined" 
            />
            <TextField 
              fullWidth 
              label="Email Address" 
              margin="normal" 
              variant="outlined" 
            />
            <TextField 
              fullWidth 
              label="Phone Number" 
              margin="normal" 
              variant="outlined" 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Account Type" 
              margin="normal" 
              select
              variant="outlined"
            >
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Individual">Individual</MenuItem>
            </TextField>
            <TextField 
              fullWidth 
              label="Website URL" 
              margin="normal" 
              variant="outlined" 
            />
            <TextField 
              fullWidth 
              label="Address" 
              margin="normal" 
              variant="outlined" 
              multiline 
              rows={3} 
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" size="large">
            Save Account
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Existing Accounts
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          View and manage your existing accounts below.
        </Typography>
        {/* Placeholder for list or table of accounts */}
        <Typography variant="body1" color="text.primary" align="center" sx={{ mt: 2 }}>
          No accounts available.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Accounts;

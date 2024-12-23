
// // Contacts.jsx
// import React from 'react';
// import { 
//   Box, 
//   Card, 
//   Typography, 
//   List, 
//   ListItem, 
//   ListItemText,
//   IconButton
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const Contacts = () => {
//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom>
//         Contacts
//       </Typography>
//       <Card>
//         <List>
//           <ListItem
//             secondaryAction={
//               <>
//                 <IconButton edge="end" aria-label="edit">
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete">
//                   <DeleteIcon />
//                 </IconButton>
//               </>
//             }
//           >
//             <ListItemText 
//               primary="Contact Name"
//               secondary="contact@email.com"
//             />
//           </ListItem>
//         </List>
//       </Card>
//     </Box>
//   );
// };
// export default Contacts

// Contacts.jsx
import React from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  IconButton, 
  Avatar, 
  Grid, 
  Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

const contacts = [
  { id: 1, name: 'John Doe', email: 'john.doe@email.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@email.com' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@email.com' },
];

const Contacts = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <Card sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Contact List
        </Typography>
        <List>
          {contacts.map((contact, index) => (
            <React.Fragment key={contact.id}>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                }}
                secondaryAction={
                  <Box sx={{ mt: { xs: 1, sm: 0 }, display: 'flex', gap: 1 }}>
                    <IconButton edge="end" aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={contact.name} 
                  secondary={contact.email} 
                />
              </ListItem>
              {index < contacts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default Contacts;

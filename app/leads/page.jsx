 

// "use client"; // Add this directive to mark the component as a client component

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Box,
//   Typography,
//   Checkbox,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   Tooltip,
//   Avatar,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import {
//   ArrowBack as ArrowBackIcon,
//   MoreVert as MoreVertIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
// } from '@mui/icons-material';

// const Leads = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [leads, setLeads] = useState([
//     { id: 1, name: 'John Doe', topic: 'Sales', status: 'Open', createdAt: '2023-10-01' },
//     { id: 2, name: 'Jane Smith', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-02' },
//     { id: 3, name: 'Sam Brown', topic: 'Support', status: 'Open', createdAt: '2023-10-03' },
    // { id: 4, name: 'Alice Johnson', topic: 'Finance', status: 'Open', createdAt: '2023-10-04' },
    // { id: 5, name: 'Michael Lee', topic: 'IT', status: 'Closed', createdAt: '2023-10-05' },
    // { id: 6, name: 'Emma Davis', topic: 'HR', status: 'Open', createdAt: '2023-10-06' },
    // { id: 7, name: 'Chris Wilson', topic: 'Operations', status: 'Open', createdAt: '2023-10-07' },
    // { id: 8, name: 'Sophia Martinez', topic: 'Sales', status: 'Closed', createdAt: '2023-10-08' },
    // { id: 9, name: 'Daniel Garcia', topic: 'Marketing', status: 'Open', createdAt: '2023-10-09' },
    // { id: 10, name: 'Olivia Rodriguez', topic: 'Support', status: 'Closed', createdAt: '2023-10-10' },
    // { id: 11, name: 'James Taylor', topic: 'Finance', status: 'Open', createdAt: '2023-10-11' },
    // { id: 12, name: 'Isabella Harris', topic: 'IT', status: 'Open', createdAt: '2023-10-12' },
    // { id: 13, name: 'Ethan Clark', topic: 'HR', status: 'Closed', createdAt: '2023-10-13' },
    // { id: 14, name: 'Mia Walker', topic: 'Operations', status: 'Open', createdAt: '2023-10-14' },
    // { id: 15, name: 'Liam Scott', topic: 'Sales', status: 'Open', createdAt: '2023-10-15' },
    // { id: 16, name: 'Amelia Perez', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-16' },
    // { id: 17, name: 'Noah King', topic: 'Support', status: 'Open', createdAt: '2023-10-17' },
    // { id: 18, name: 'Ava Hill', topic: 'Finance', status: 'Closed', createdAt: '2023-10-18' },
    // { id: 19, name: 'William Adams', topic: 'IT', status: 'Open', createdAt: '2023-10-19' },
    // { id: 20, name: 'Emily Wright', topic: 'HR', status: 'Closed', createdAt: '2023-10-20' }
//     // Add more leads as needed
//   ]);
//   const [openModal, setOpenModal] = useState(false);
//   const [openSecondModal, setOpenSecondModal] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleOpenSecondModal = () => {
//     setOpenSecondModal(true);
//   };

//   const handleCloseSecondModal = () => {
//     setOpenSecondModal(false);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const sideList = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//     >
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <EditIcon />
//           </ListItemIcon>
//           <ListItemText primary="Edit Lead" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DeleteIcon />
//           </ListItemIcon>
//           <ListItemText primary="Delete Lead" />
//         </ListItem>
//       </List>
//       <Divider />
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <ChevronLeftIcon />
//           </ListItemIcon>
//           <ListItemText primary="Previous" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ChevronRightIcon />
//           </ListItemIcon>
//           <ListItemText primary="Next" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography variant="h4" gutterBottom>
//         Leads
//       </Typography>
//       <Button variant="contained" onClick={handleOpenModal} sx={{ mb: 2 }}>
//         Open Modal
//       </Button>
//       <div>
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ mb: 2, width: '100%', maxWidth: 600 }}
//         />
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox />
//               </TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Topic</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Created At</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLeads.map((lead) => (
//               <TableRow key={lead.id}>
//                 <TableCell padding="checkbox">
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell>{lead.name}</TableCell>
//                 <TableCell>{lead.topic}</TableCell>
//                 <TableCell>{lead.status}</TableCell>
//                 <TableCell>{lead.createdAt}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         fullWidth
//         maxWidth="lg"
//         PaperProps={{
//           sx: {
//             borderRadius: '16px',
//             border: '2px solid #1976D2', // Blue border
//           },
//         }}
//       >
     
        // <DialogContent>
         
        //   <Divider />
        //   <Box sx={{ mt: 2 }}>
        //     <Typography variant="body1" gutterBottom>
        //         Hi, Mona. 65% of goal achieved and restcan be achieved by focusing on 20 top leads.
        //         <div>
        //             Copilot has proposed 20key leadsthat show strong purchase and are actively engaging. These leads need your focus.
        //         </div>
        //       {/* This is some important information that you need to know. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //       ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        //       officia deserunt mollit anim id est laborum. */}
        //     </Typography>
        //     <Grid container spacing={2} sx={{ mt: 2 }}>
        //       <Grid item xs={12} sm={4}>
        //             <Typography variant="h6">Jane Reyes</Typography>
        //         <Card>
        //           <CardContent>
        //             <Typography variant="body2">
        //             Engage with Jane Reyes.
        //             <div>

        //             </div>
        //             </Typography>
        //           </CardContent>
        //         </Card>
        //       </Grid>
        //       <Grid item xs={12} sm={4}>
        //             <Typography variant="h6">Admin Manager</Typography>
        //         <Card>
        //           <CardContent>
        //             <Typography variant="body2">
        //          Prepare with Meeting with Admin
        //             </Typography>
        //           </CardContent>
        //         </Card>
        //       </Grid>
        //       <Grid item xs={12} sm={4}>
        //             <Typography variant="h6">Card 3</Typography>
        //         <Card>
        //           <CardContent>
        //             <Typography variant="body2">
        //               This is the content of the third card.
        //             </Typography>
        //           </CardContent>
        //         </Card>
        //       </Grid>
        //     </Grid>
        //   </Box>
        // </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//           <Button onClick={handleOpenSecondModal} color="primary">
//             Open Second Modal
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog
//         open={openSecondModal}
//         onClose={handleCloseSecondModal}
//         fullWidth
//         maxWidth="xl"
//         PaperProps={{
//           sx: {
//             borderRadius: '16px',
//             border: '2px solid #1976D2', // Blue border
//           },
//         }}
//       >
//         <DialogTitle>Engage with Jane Royes</DialogTitle>
//         <DialogContent sx={{ display: 'flex' }}>
//           <Box sx={{ flexGrow: 1, p: 2 }}>
//             <Typography variant="h6">Jane Royes</Typography>
//             <Typography variant="body1">
//               CTO, Software Firm
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1">
//                 Why should I buy your product?
//               </Typography>
//               <Typography variant="body2">
//                 - Show how your product helps Jane achieve her goals
//                 - Highlight key features and benefits
//                 - Provide testimonials or case studies
//               </Typography>
//             </Box>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1">
//                 More info
//               </Typography>
//               <Typography variant="body2">
//                 Chat Generative AI: A dynamic tool with a proven track record of uplifting opportunities and enhancing engagement.
//                 Generative AI is a powerful tool that can help you achieve your goals and enhance your engagement.
//               </Typography>
//             </Box>
//             <Grid container spacing={2} sx={{ mt: 2 }}>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">Card 1</Typography>
//                     <Typography variant="body2">
//                       This is the content of the first card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">Card 2</Typography>
//                     <Typography variant="body2">
//                       This is the content of the second card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">Card 3</Typography>
//                     <Typography variant="body2">
//                       This is the content of the third card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>
//           <Drawer
//             anchor="right"
//             open={drawerOpen}
//             onClose={toggleDrawer(false)}
//           >
//             {sideList()}
//           </Drawer>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseSecondModal} color="primary">
//             Close
//           </Button>
//           <Button onClick={toggleDrawer(true)} color="primary">
//             Edit Options
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Leads;

// "use client"; // Add this directive to mark the component as a client component

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Box,
//   Typography,
//   Checkbox,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   Tooltip,
//   Avatar,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import {
//   ArrowBack as ArrowBackIcon,
//   MoreVert as MoreVertIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
// } from '@mui/icons-material';

// const Leads = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [leads, setLeads] = useState([
//     { id: 1, name: 'John Doe', topic: 'Sales', status: 'Open', createdAt: '2023-10-01' },
//     { id: 2, name: 'Jane Smith', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-02' },
//     { id: 3, name: 'Sam Brown', topic: 'Support', status: 'Open', createdAt: '2023-10-03' },
//     { id: 4, name: 'Alice Johnson', topic: 'Finance', status: 'Open', createdAt: '2023-10-04' },
//     { id: 5, name: 'Michael Lee', topic: 'IT', status: 'Closed', createdAt: '2023-10-05' },
//     { id: 6, name: 'Emma Davis', topic: 'HR', status: 'Open', createdAt: '2023-10-06' },
//     { id: 7, name: 'Chris Wilson', topic: 'Operations', status: 'Open', createdAt: '2023-10-07' },
//     { id: 8, name: 'Sophia Martinez', topic: 'Sales', status: 'Closed', createdAt: '2023-10-08' },
//     { id: 9, name: 'Daniel Garcia', topic: 'Marketing', status: 'Open', createdAt: '2023-10-09' },
//     { id: 10, name: 'Olivia Rodriguez', topic: 'Support', status: 'Closed', createdAt: '2023-10-10' },
//     { id: 11, name: 'James Taylor', topic: 'Finance', status: 'Open', createdAt: '2023-10-11' },
//     { id: 12, name: 'Isabella Harris', topic: 'IT', status: 'Open', createdAt: '2023-10-12' },
//     { id: 13, name: 'Ethan Clark', topic: 'HR', status: 'Closed', createdAt: '2023-10-13' },
//     { id: 14, name: 'Mia Walker', topic: 'Operations', status: 'Open', createdAt: '2023-10-14' },
//     { id: 15, name: 'Liam Scott', topic: 'Sales', status: 'Open', createdAt: '2023-10-15' },
//     { id: 16, name: 'Amelia Perez', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-16' },
//     { id: 17, name: 'Noah King', topic: 'Support', status: 'Open', createdAt: '2023-10-17' },
//     { id: 18, name: 'Ava Hill', topic: 'Finance', status: 'Closed', createdAt: '2023-10-18' },
//     { id: 19, name: 'William Adams', topic: 'IT', status: 'Open', createdAt: '2023-10-19' },
//     { id: 20, name: 'Emily Wright', topic: 'HR', status: 'Closed', createdAt: '2023-10-20' }
//     // Add more leads as needed
//   ]);
//   const [openModal, setOpenModal] = useState(false);
//   const [openSecondModal, setOpenSecondModal] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleOpenSecondModal = () => {
//     setOpenSecondModal(true);
//   };

//   const handleCloseSecondModal = () => {
//     setOpenSecondModal(false);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const sideList = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//     >
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <EditIcon />
//           </ListItemIcon>
//           <ListItemText primary="Edit Lead" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DeleteIcon />
//           </ListItemIcon>
//           <ListItemText primary="Delete Lead" />
//         </ListItem>
//       </List>
//       <Divider />
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <ChevronLeftIcon />
//           </ListItemIcon>
//           <ListItemText primary="Previous" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ChevronRightIcon />
//           </ListItemIcon>
//           <ListItemText primary="Next" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography variant="h4" gutterBottom>
//         Leads
//       </Typography>
//       <Button variant="contained" onClick={handleOpenModal} sx={{ mb: 2 }}>
//         Open Modal
//       </Button>
//       <div>
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ mb: 2, width: '100%', maxWidth: 600 }}
//         />
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox />
//               </TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Topic</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Created At</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredLeads.map((lead) => (
//               <TableRow key={lead.id}>
//                 <TableCell padding="checkbox">
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell>{lead.name}</TableCell>
//                 <TableCell>{lead.topic}</TableCell>
//                 <TableCell>{lead.status}</TableCell>
//                 <TableCell>{lead.createdAt}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         fullWidth
//         maxWidth="lg"
//         PaperProps={{
//           sx: {
//             borderRadius: '16px',
//             border: '2px solid #1976D2', // Blue border
//           },
//         }}
//       >
//      <DialogContent>
         
//          <Box sx={{ mt: 2 }}>
//            <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
//                Hi, Mona. <span style={{ color: 'blue', fontWeight: 'bold' }}>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
//                <div style={{   fontWeight:"lighter ", marginTop:"10px" }}>
//                    Copilot has proposed 20key leadsthat show strong purchase and are actively engaging. These leads need your focus.
//                </div>
             
//            </Typography>
//            <Grid container spacing={2} sx={{ mt: 2 }}>
//              <Grid item xs={12} sm={4}>
//                    <Typography variant="h6">Jane Reyes</Typography>
//                <Card>
//                  <CardContent>
//                    <Typography variant="body2">
//                    Engage with Jane Reyes.
//                    <div>

//                    </div>
//                    </Typography>
//                  </CardContent>
//                </Card>
//              </Grid>
//              <Grid item xs={12} sm={4}>
//                    <Typography variant="h6">Admin Manager</Typography>
//                <Card>
//                  <CardContent>
//                    <Typography variant="body2">
//                 Prepare with Meeting with Admin
//                    </Typography>
//                  </CardContent>
//                </Card>
//              </Grid>
//              <Grid item xs={12} sm={4}>
//                    <Typography variant="h6">Other Key Activities</Typography>
//                <Card>
//                  <CardContent>
//                    <Typography variant="body2">
//                    Cafe A1000 for Woadland Bank
//                    </Typography>
                 
//                  </CardContent>
//                  <Divider/>
//                  <CardContent>
//                    <Typography variant="body2">
//                    Cafe A1000 for Woadland Bank
//                    </Typography>
                 
//                  </CardContent>
//                </Card>
//              </Grid>
//            </Grid>
//          </Box>
//        </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button> */}
//           <Button onClick={handleOpenSecondModal} color="primary">
//          Show all key activities
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog
//         open={openSecondModal}
//         onClose={handleCloseSecondModal}
//         fullWidth
//         maxWidth="xl"
//         PaperProps={{
//           sx: {
//             borderRadius: '16px',
//             border: '2px solid #1976D2', // Blue border
//           },
//         }}
//       >
//         <DialogTitle>Engage with Jane Royes</DialogTitle>
//         <DialogContent sx={{ display: 'flex' }}>
//           <Box sx={{ flexGrow: 1, p: 2 }}>
//             <Typography variant="h6">Jane Royes</Typography>
//             <Typography variant="body1">
//               CTO, Software Firm
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1">
//                 Why I picked this lead?
//               </Typography>
//               <Typography variant="body2">
//                 - Show how your product helps Jane achieve her goals
//                 - Highlight key features and benefits
//                 - Provide testimonials or case studies
//               </Typography>
//             </Box>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1">
//                 More info
//               </Typography>
//               <Typography variant="body2">
//                 Chat Generative AI: A dynamic tool with a proven track record of uplifting opportunities and enhancing engagement.
//                 Generative AI is a powerful tool that can help you achieve your goals and enhance your engagement.
//               </Typography>
//             </Box>
//             <Grid container spacing={2} sx={{ mt: 2 }}>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="body2">Card 1</Typography>
//                     <Typography variant="body2">
//                       This is the content of the first card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="body2">Card 2</Typography>
//                     <Typography variant="body2">
//                       This is the content of the second card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="body2">Card 3</Typography>
//                     <Typography variant="body2">
//                       This is the content of the third card.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>
//           <Drawer
//             anchor="right"
//             open={drawerOpen}
//             onClose={toggleDrawer(false)}
//           >
//             {sideList()}
//           </Drawer>
//         </DialogContent>
//         {/* <DialogActions>
//           <Button onClick={handleCloseSecondModal} color="primary">
//             Close
//           </Button>
//           <Button onClick={toggleDrawer(true)} color="primary">
//             Edit Options
//           </Button>
//         </DialogActions> */}
//       </Dialog>
//     </Box>
//   );
// };

// export default Leads;



"use client"; // Add this directive to mark the component as a client component

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Typography,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
//   IconButton, 
  Stack 
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Send as SendIcon,
} from '@mui/icons-material';

// import EditIcon from '@mui/icons-material/Edit';
// import SendIcon from '@mui/icons-material/Send';

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Doe', topic: 'Sales', status: 'Open', createdAt: '2023-10-01' },
    { id: 2, name: 'Jane Smith', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-02' },
    { id: 3, name: 'Sam Brown', topic: 'Support', status: 'Open', createdAt: '2023-10-03' },
    { id: 4, name: 'Alice Johnson', topic: 'Finance', status: 'Open', createdAt: '2023-10-04' },
    { id: 5, name: 'Michael Lee', topic: 'IT', status: 'Closed', createdAt: '2023-10-05' },
    { id: 6, name: 'Emma Davis', topic: 'HR', status: 'Open', createdAt: '2023-10-06' },
    { id: 7, name: 'Chris Wilson', topic: 'Operations', status: 'Open', createdAt: '2023-10-07' },
    { id: 8, name: 'Sophia Martinez', topic: 'Sales', status: 'Closed', createdAt: '2023-10-08' },
    { id: 9, name: 'Daniel Garcia', topic: 'Marketing', status: 'Open', createdAt: '2023-10-09' },
    { id: 10, name: 'Olivia Rodriguez', topic: 'Support', status: 'Closed', createdAt: '2023-10-10' },
    { id: 11, name: 'James Taylor', topic: 'Finance', status: 'Open', createdAt: '2023-10-11' },
    { id: 12, name: 'Isabella Harris', topic: 'IT', status: 'Open', createdAt: '2023-10-12' },
    { id: 13, name: 'Ethan Clark', topic: 'HR', status: 'Closed', createdAt: '2023-10-13' },
    { id: 14, name: 'Mia Walker', topic: 'Operations', status: 'Open', createdAt: '2023-10-14' },
    { id: 15, name: 'Liam Scott', topic: 'Sales', status: 'Open', createdAt: '2023-10-15' },
    { id: 16, name: 'Amelia Perez', topic: 'Marketing', status: 'Closed', createdAt: '2023-10-16' },
    { id: 17, name: 'Noah King', topic: 'Support', status: 'Open', createdAt: '2023-10-17' },
    { id: 18, name: 'Ava Hill', topic: 'Finance', status: 'Closed', createdAt: '2023-10-18' },
    { id: 19, name: 'William Adams', topic: 'IT', status: 'Open', createdAt: '2023-10-19' },
    { id: 20, name: 'Emily Wright', topic: 'HR', status: 'Closed', createdAt: '2023-10-20' }
    // Add more leads as needed
  ]);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenSecondModal = () => {
    setOpenSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setOpenSecondModal(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const sideList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Lead" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete Lead" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChevronLeftIcon />
          </ListItemIcon>
          <ListItemText primary="Previous" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Next" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* <Typography variant="h4" gutterBottom>
        Leads
      </Typography> */}
         <Card sx={{   borderRadius: '16px', border: '2px solid #1976D2', p: 2 , mb:4}}>
        <CardContent>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Hi, Mona. <span style={{ color: 'blue', fontWeight: 'bold' }}>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
            <div style={{ fontWeight: "lighter", marginTop: "10px" }}>
              Copilot has proposed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
            </div>
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Jane Reyes</Typography>
              <Card>
                <CardContent>
                  <Typography variant="body2">
                    Engage with Jane Reyes.
                    <div>
                      {/* Add more content here if needed */}
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Admin Manager</Typography>
              <Card>
                <CardContent>
                  <Typography variant="body2">
                    Prepare for Meeting with Admin
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Other Key Activities</Typography>
              <Card>
                <CardContent>
                  <Typography variant="body2">
                    Cafe A1000 for Woadland Bank
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent>
                  <Typography variant="body2">
                    Cafe A1000 for Woadland Bank
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button onClick={handleOpenSecondModal} color="primary" justifyContent="flex-end" sx={{ mt: 2 }}>
            Show all key activities
          </Button>
        </CardContent>
      </Card>
      <div>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2, width: '100%', maxWidth: 600 }}
        />
      </div>

   
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Dialog
        open={openSecondModal}
        onClose={handleCloseSecondModal}
        fullWidth
        maxWidth="xl"
        PaperProps={{
          sx: {
            borderRadius: '16px',
            border: '2px solid #1976D2', // Blue border
          },
        }}
      >
        <DialogTitle>Engage with Jane Royes</DialogTitle>
        <DialogContent  >
          <Box sx={{ flexGrow: 1, p: 2 }}>
         
            <Box p={3}>
      <Card  >
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
         Jane Reyes
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            COO, Northwind Traders
          </Typography>
        </CardContent>
      </Card>
    </Box>
    {/* <div>
        <h6>Jane may be interested in upgrading espreso machines for her in-store coffee shops</h6>
        
    </div> */}
  
  <Box p={2} sx={{ backgroundColor: 'skyblue', borderRadius: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1">
          Jane may be interested in upgrading espresso machines for her in-store coffee shops
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
            edit
          </IconButton>
          <IconButton aria-label="send" color="secondary">
            <SendIcon />
            approved and send
          </IconButton>
        </Stack>
      </Stack>

    </Box>
    <div>
      <p>Engage</p>
    </div>
      <Box sx={{ backgroundColor: 'skyblue', borderRadius: 2 }}>
        <Typography variant="body1">Why I picked this lead?</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Jane is a key decision maker and was browsing for espresso machines on first coffee website." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Multiple people at her company have reported slowness during service requests." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Northwind Traders currently see $200M in revenue from their in-store coffee shops." />
          </ListItem>
        </List>

        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 180 }}> {/* Further reducing the width */}
              <CardContent>
                <Typography variant="body2">Decision Maker</Typography>
                <Typography variant="body2">
                  <span style={{ color: 'blue' }}>Yes</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 180 }}> {/* Further reducing the width */}
              <CardContent>
                <Typography variant="body2">Card 2</Typography>
                <Typography variant="body2">
                <span style={{ color: 'blue' }}>$1M</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 180 }}> {/* Further reducing the width */}
              <CardContent>
                <Typography variant="body2">Instant</Typography>
                <Typography variant="body2">
                High
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
           
          </Box>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {sideList()}
          </Drawer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSecondModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Leads;

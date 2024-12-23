// // app/components/Sidebar/Sidebar.jsx
// "use client";
// import { useState } from 'react';
// import { 
//   Box, 
//   Drawer, 
//   List, 
//   ListItem, 
//   ListItemIcon, 
//   ListItemText, 
//   ListItemButton,
//   Collapse,
//   IconButton,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import {
//   Dashboard,
//   People,
//   Settings,
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   ChevronLeft,
//   ShoppingCart,
//   Assessment,
//   Inventory
// } from '@mui/icons-material';
// import Link from 'next/link';

// const Sidebar = ({ open, toggleSidebar }) => {
//   const [menuOpen, setMenuOpen] = useState({});
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const menuItems = [
//     {
//       title: 'Dashboard',
//       icon: <Dashboard />,
//       path: '/dashboard'
//     },
//     {
//       title: 'Customers',
//       icon: <People />,
//       path: '/customers/customers',
//       subItems: [
//         { title: 'All Customers', path: '/customers/customers' },
//         { title: 'Customer Analysis', path: '/dashboard/customers/analysis' }
//       ]
//     },
//     {
//       title: 'Products',
//       icon: <Inventory />,
//       path: '/dashboard/products',
//       subItems: [
//         { title: 'Product List', path: '/dashboard/products' },
//         { title: 'Add Product', path: '/dashboard/products/add' }
//       ]
//     },
//     {
//       title: 'Orders',
//       icon: <ShoppingCart />,
//       path: '/dashboard/orders'
//     },
//     {
//       title: 'Reports',
//       icon: <Assessment />,
//       path: '/dashboard/reports'
//     },
//     {
//       title: 'Settings',
//       icon: <Settings />,
//       path: '/dashboard/settings'
//     }
//   ];

//   const handleSubmenuClick = (title) => {
//     setMenuOpen(prev => ({ ...prev, [title]: !prev[title] }));
//   };

//   const drawerContent = (
//     <Box sx={{ width: 240, pt: 2 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
//         <IconButton onClick={toggleSidebar}>
//           <ChevronLeft />
//         </IconButton>
//       </Box>
//       <List>
//         {menuItems.map((item) => (
//           <Box key={item.title}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 component={item.subItems ? 'div' : Link}
//                 href={item.subItems ? undefined : item.path}
//                 onClick={() => item.subItems && handleSubmenuClick(item.title)}
//               >
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.title} />
//                 {item.subItems && (
//                   menuOpen[item.title] ? <ExpandLess /> : <ExpandMore />
//                 )}
//               </ListItemButton>
//             </ListItem>
//             {item.subItems && (
//               <Collapse in={menuOpen[item.title]} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {item.subItems.map((subItem) => (
//                     <ListItemButton
//                       key={subItem.title}
//                       component={Link}
//                       href={subItem.path}
//                       sx={{ pl: 4 }}
//                     >
//                       <ListItemText primary={subItem.title} />
//                     </ListItemButton>
//                   ))}
//                 </List>
//               </Collapse>
//             )}
//           </Box>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       {isMobile ? (
//         <Drawer
//           variant="temporary"
//           open={open}
//           onClose={toggleSidebar}
//           ModalProps={{ keepMounted: true }}
//         >
//           {drawerContent}
//         </Drawer>
//       ) : (
//         <Drawer
//           variant="persistent"
//           open={open}
//           sx={{
//             '& .MuiDrawer-paper': {
//               width: 240,
//               boxSizing: 'border-box',
//             },
//           }}
//         >
//           {drawerContent}
//         </Drawer>
//       )}
//     </>
//   );
// };

// export default Sidebar;


"use client"; // Add this directive to mark the component as a client component

import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Dashboard,
  People,
  Settings,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  ChevronLeft,
  ShoppingCart,
  Assessment,
  Inventory
} from '@mui/icons-material';
import Link from 'next/link';

const Sidebar = ({ open, toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const menuItems = [
//     {
//       title: 'Dashboard',
//       icon: <Dashboard />,
//       path: '/dashboard'
//     },
//     {
//       title: 'Customers',
//       icon: <People />,
//       path: '/customers/customers',
//       subItems: [
//         { title: 'All Customers', path: '/customers/customers' },
//         { title: 'Customer Analysis', path: '/dashboard/customers/analysis' }
//       ]
//     },
//     {
//       title: 'Products',
//       icon: <Inventory />,
//       path: '/dashboard/products',
//       subItems: [
//         { title: 'Product List', path: '/dashboard/products' },
//         { title: 'Add Product', path: '/dashboard/products/add' }
//       ]
//     },
//     {
//       title: 'Orders',
//       icon: <ShoppingCart />,
//       path: '/dashboard/orders'
//     },
//     {
//       title: 'Reports',
//       icon: <Assessment />,
//       path: '/dashboard/reports'
//     },
//     {
//       title: 'Settings',
//       icon: <Settings />,
//       path: '/dashboard/settings'
//     }
//   ];
const menuItems = [
    {
      title: 'Home',
      icon: <Dashboard />, // Using Dashboard as placeholder for FaHome
      path: '/dashboard'
    },
    {
      title: 'Pinned',
      icon: <Dashboard />, // Using Dashboard as placeholder for FaHome
      path: '/dashboard'
    },
    {
      title: 'My Work',
      icon: <People />, // Using People as placeholder for FaUsers
      path: '/work',
      subItems: [
        { title: 'Sales Accelerator', path: '/sales' },
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Activities', path: '/activities' }
      ]
    },
    {
      title: 'Customers',
      icon: <Assessment />, // Using Assessment as placeholder for FaChartBar
      path: '/customers',
      subItems: [
        { title: 'Accounts', path: '/accounts' },
        { title: 'Contacts', path: '/contacts' }
      ]
    },
    {
      title: 'Leads',
      icon: <Assessment />, // Using Assessment as placeholder for FaDollarSign
      path: '/leads',
      subItems: [
        { title: 'Leads', path: '/leads' },
        { title: 'Opportunities', path: '/opportunities' }
      ]
    },
    {
      title: 'Collaterals',
      icon: <Inventory />, // Using Inventory as placeholder for FaClipboardList
      path: '/collaterals',
      subItems: [
        { title: 'Quotes', path: '/quotes' },
        { title: 'Orders', path: '/orders' },
        { title: 'Invoices', path: '/invoices' },
        { title: 'Products', path: '/products' },
        { title: 'Sales Literature', path: '/sales-literature' }
      ]
    },
    {
      title: 'Marketing',
      icon: <Assessment />, // Using Assessment as placeholder for FaComments
      path: '/marketing',
      subItems: [
        { title: 'Marketing List', path: '/marketing-list' },
        { title: 'Quick Campaigns', path: '/communications/messages' }
      ]
    },
    {
      title: 'Performance',
      icon: <Assessment />, // Using Assessment as placeholder for FaFolder
      path: '/performance',
      subItems: [
        { title: 'Sales', path: '/sales' }
      ]
    }
  ];
  const handleSubmenuClick = (title) => {
    setMenuOpen(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const drawerContent = (
    <Box sx={{ width: 240, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
        <IconButton onClick={toggleSidebar}>
          <ChevronLeft />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <Box key={item.title}>
            <ListItem disablePadding>
              <ListItemButton
                component={item.subItems ? 'div' : Link}
                href={item.subItems ? undefined : item.path}
                onClick={() => item.subItems && handleSubmenuClick(item.title)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.subItems && (
                  menuOpen[item.title] ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={menuOpen[item.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItemButton
                      key={subItem.title}
                      component={Link}
                      href={subItem.path}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={toggleSidebar}
          ModalProps={{ keepMounted: true }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;

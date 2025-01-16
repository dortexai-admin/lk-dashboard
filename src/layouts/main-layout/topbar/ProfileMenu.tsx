import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar3 } from 'data/images';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
}

const menuItems: MenuItems[] = [
  {
    id: 1,
    title: 'View Profile',
    icon: 'hugeicons:user-circle-02',
  },
  {
    id: 2,
    title: 'Account Settings',
    icon: 'hugeicons:account-setting-02',
  },
  {
    id: 3,
    title: 'Notifications',
    icon: 'solar:bell-outline',
  },
  {
    id: 4,
    title: 'Switch Account',
    icon: 'hugeicons:user-switch',
  },
  {
    id: 5,
    title: 'Help Center',
    icon: 'carbon:help',
  },
];

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  // Fetch email from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setEmail(user.email);
    }
  }, []);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear token and user information from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/'); // Redirect to login page
  };

  return (
    <>
      <ButtonBase
        onClick={handleProfileClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        disableRipple
      >
        <Avatar
          src={Avatar3}
          sx={{
            height: 48,
            width: 48,
            bgcolor: 'primary.main',
          }}
        />
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            p: 0,
            width: 230,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box p={1}>
          <MenuItem onClick={handleProfileMenuClose} sx={{ '&:hover': { bgcolor: 'info.light' } }}>
            <Avatar src={Avatar3} sx={{ mr: 1, height: 42, width: 42 }} />
            <Stack direction="column">
              <Typography variant="body2" color="text.primary" fontWeight={600}>
              {email || 'Unknown Email'}
              </Typography>
            </Stack>
          </MenuItem>
        </Box>

        <Divider sx={{ my: 0 }} />

        <Box p={1}>
          {menuItems.map((item) => {
            return (
              <MenuItem key={item.id} onClick={handleProfileMenuClose} sx={{ py: 1 }}>
                <ListItemIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 'h5.fontSize' }}>
                  <IconifyIcon icon={item.icon} />
                </ListItemIcon>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
          {/* Logout Item */}
          <MenuItem onClick={handleLogout} sx={{ py: 1, mt: 1, bgcolor: 'error.light' }}>
            <ListItemIcon sx={{ mr: 1, color: 'error.main', fontSize: 'h5.fontSize' }}>
              <IconifyIcon icon="hugeicons:logout-03" />
            </ListItemIcon>
            <Typography variant="body2" color="error.main" fontWeight={500}>
              Logout
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileMenu;

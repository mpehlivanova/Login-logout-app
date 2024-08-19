import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  TextField,
  Typography
} from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';
import { useAuthContext } from '../hooks/useAuthContext';
import NavigationBar from './navigation/navigation-bar';
import { authManager } from '../App';
import { NotificationIcon, SearchIcon } from './icons/icons';
import { palette } from '../theme/components';
import { Pages } from '../enum';

type Props = {
  hasMobile?: boolean
}

export default function Header({ hasMobile }: Props) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuthContext();
  const [searchDrawer, openSearchDrawer] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState<null | HTMLElement>(null)

  const renderUserMenu = (
    <MenuList sx={{ p: 2 }}>
      <Grid item display='flex' flexDirection='column' gap={1} p={1} minWidth={200}>
        <Typography variant='subtitle1'><b>{user?.name}</b></Typography>
        <Typography variant='subtitle1'>{user?.email}</Typography>
      </Grid>
      <Divider sx={{ m: 1 }} />
      <MenuItem onClick={() => navigate(`${Pages.home}`)}>
        <Typography variant='subtitle1'>{Pages.home}</Typography>
      </MenuItem>
      <MenuItem onClick={() => navigate(`${Pages.user}`)}>
        <Typography variant='subtitle1'>{Pages.user}</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant='subtitle1'>{Pages.settings}</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={async () => {
        navigate('/');
        setOpenUserMenu(null);
        setAuthenticated(false);
        await authManager.logoutUser();
      }}>
        {isAuthenticated &&
          <Typography color='error' >
            Logout
          </Typography>
        }
      </MenuItem>
    </MenuList>
  );

  return (
    <>
      <Grid item container display="flex" justifyContent="space-between" p={2}>
        <Grid item display='flex' alignItems='center' gap={2}>
          {hasMobile && <NavigationBar />}
          <IconButton onClick={() => openSearchDrawer(true)}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent="flex-end" gap={2} alignItems='center'>
          <Grid item>
            <IconButton>
              <img
                width='100%'
                src='images/en.svg'
                alt='logo'>
              </img>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <NotificationIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={(ev) => setOpenUserMenu(ev.currentTarget)}>
              <Avatar
                alt="Remy Sharp"
                src={user?.picture}
                sx={{ border: openUserMenu ? `3px solid ${palette.primary.main}` : undefined }}
              />
            </IconButton>
          </Grid>
        </Grid >
      </Grid >
      <Menu
        anchorEl={openUserMenu}
        open={Boolean(openUserMenu)}
        onClose={() => setOpenUserMenu(null)}
      >
        {renderUserMenu}
      </Menu>
      <Drawer
        anchor='top'
        open={searchDrawer}
        onClose={() => openSearchDrawer(false)}
        sx={{
          '& .MuiModal-backdrop': {
            backgroundColor: 'transparent'
          },
        }}
      >
        <Grid item xs={12} p={2} display='flex' justifyContent='space-between'>
          <Grid xs={8} item display='flex' alignItems='center' gap={2}>
            <SearchIcon />
            <TextField variant="filled" placeholder='Search...' fullWidth />
          </Grid>
          <Grid item xs={4} display='flex' justifyContent='flex-end'>
            <Button variant='contained' onClick={() => openSearchDrawer(false)}><b>Search</b></Button>
          </Grid>
        </Grid>
      </Drawer >
    </>
  )
}

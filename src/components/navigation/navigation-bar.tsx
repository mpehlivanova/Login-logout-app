import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Drawer, Grid, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Typography, useMediaQuery } from '@mui/material';
import { List } from '@mui/icons-material';
import { transparentize } from 'polished';
import { RestrictedAccess } from '../../auth/restricted-access';
import RequireAuth from '../../auth/require-auth';
import { useUserContext } from '../../hooks/useUserContext';
import { routeConfiguration } from './constants';
import { RouteConfigurationType } from '../../types';
import { palette } from '../../theme/components';

const widthDrawer = 270;

export default function NavigationBar() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const permissionsUser: any = user?.permissions;
  const tabletAndUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const renderMenuList = (
    <Grid container item display="flex" px={2} py={2} sx={{ width: widthDrawer }} gap={2}>
      <Grid item xs={12} display='flex' flexDirection='column' gap={3}>
        <Grid item>
          <img
            width='18%'
            src='images/logo.svg'
            alt='logo'>
          </img>
        </Grid>
        <Grid item xs={12} borderRadius={3} bgcolor={transparentize(0.6, palette.grey[300])} p={2}>
          <Grid item display='flex' alignItems='center' gap={2}>
            <Avatar
              alt="Remy Sharp"
              src={user?.picture}
              sx={{ width: 46, height: 46 }}
            />
            <Typography><b>{user?.name}</b></Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MenuList disabledItemsFocusable>
          {Object.values(routeConfiguration)?.map(({
            id, icon, link, permission
          }: RouteConfigurationType) => {
            const isActivePage = pathname === `/${link}`;
            return (
              <Link
                key={id}
                to={link}
                style={{
                  textDecoration: 'none',
                }}
                onClick={toggleDrawer(false)}
              >
                <RequireAuth key={id}>
                  <RestrictedAccess permissionsPage={permission} permissionsUser={permissionsUser}>
                    <MenuItem
                      disableRipple
                      onClick={() => navigate(`/${link}`)}
                      sx={{
                        backgroundColor: isActivePage ? transparentize(0.92, palette.primary.main) : undefined,
                        py: 2,
                        my: 1,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          '& .MuiSvgIcon-root': {
                            color: isActivePage ? palette.primary.main : undefined,
                          },
                        }} >
                        {icon}
                      </ListItemIcon>
                      <ListItemText sx={{
                        '& .MuiTypography-root': {
                          color: isActivePage ? palette.primary.main : undefined,
                        },
                      }}>{link}</ListItemText>
                    </MenuItem>
                  </RestrictedAccess>
                </RequireAuth>
              </Link>
            );
          })}
        </MenuList>
      </Grid>
    </Grid>
  );

  return (
    <>
      {tabletAndUp && renderMenuList}
      {!tabletAndUp &&
        <>
          <IconButton onClick={toggleDrawer(true)}><List /></IconButton>
          {open && <Drawer open={open} onClose={toggleDrawer(false)}>
            {renderMenuList}
          </Drawer>}
        </>
      }
    </>)
}

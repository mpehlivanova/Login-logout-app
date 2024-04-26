import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Grid, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { RestrictedAccess } from '../auth/restricted-access';
import RequireAuth from '../auth/require-auth';
import { useUserContext } from '../hooks/useUserContext';
import { routeConfiguration } from '../layout/constants';
import { RouteConfigurationType } from '../types';
import { palette } from '../theme/components';

export default function NavigationBar() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const permissionsUser: any = user?.permissions;

  return (
    <Grid container item display="flex">
      <MenuList disabledItemsFocusable sx={{
        width: '100%',
      }}>
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
            >
              <RequireAuth key={id}>
                <RestrictedAccess permissionsPage={permission} permissionsUser={permissionsUser}>
                  <MenuItem
                    disableRipple
                    onClick={() => navigate(`/${link}`)}
                    sx={{
                      backgroundColor: isActivePage ? palette.background.default : undefined,
                      py: 2,
                      my: 2,
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
    </Grid>)
}

import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { RestrictedAccess } from '../auth/restricted-access';
import RequireAuth from '../auth/require-auth';
import { useUserContext } from '../hooks/useUserContext';
import { routeConfiguration } from '../layout/constants';
import { RouteConfigurationType } from '../types';

export default function Navigation() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const permissionsUser: any = user?.permissions

  return <Grid item display="flex" gap={2}>
    {Object.values(routeConfiguration).map(({ id, permission }: RouteConfigurationType) => {
      return (
        <RequireAuth key={id}>
          <RestrictedAccess permissionsPage={permission} permissionsUser={permissionsUser}>
            <Button variant='text' onClick={() => navigate(`/${id}`)}>{id}</Button>
          </RestrictedAccess>
        </RequireAuth>
      )
    })}
  </Grid>;
}

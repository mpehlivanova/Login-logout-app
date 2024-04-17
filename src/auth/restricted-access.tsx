import React from 'react';
import { PERMISSIONS } from '../enum'

export const RestrictedAccess: React.FC<{ children: JSX.Element, permissionsPage?: PERMISSIONS[], permissionsUser: PERMISSIONS[] }> = ({
  permissionsPage, permissionsUser, children
}) => {
  const hasPermission: boolean | undefined = permissionsPage?.reduce((acc: boolean, current: PERMISSIONS) => {
    return acc && Boolean(permissionsUser?.includes(current));
  }, true);
  if (hasPermission) {
    return children;
  }
};
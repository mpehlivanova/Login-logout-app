import { Route, Routes } from 'react-router-dom';

import RequireAuth from '@/auth/require-auth';
import { RestrictedAccess } from '@/auth/restricted-access';
import { routeConfiguration } from '@/components/navigation/constants';
import { Pages } from '@/enum';
import { useUserContext } from '@/hooks/useUserContext';
import { LoginPage, PageNotFound } from '@/pages';

const Routing = () => {
  const { user } = useUserContext();
  const permissionsUser: any = user?.permissions;
  return (
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path={`/${Pages.login}`} element={<LoginPage />} />
      {Object.values(routeConfiguration)?.length &&
        Object.values(routeConfiguration)?.map(({ id, link, component, permissions }: any) => (
          <Route
            key={id}
            path={`/${link}`}
            element={
              <RequireAuth>
                <RestrictedAccess permissionsPage={permissions} permissionsUser={permissionsUser}>
                  {component}
                </RestrictedAccess>
              </RequireAuth>
            }
          />
        ))}
    </Routes>
  );
};

export default Routing;

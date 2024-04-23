import { Pages, PERMISSIONS } from '../enum';

export const routeConfiguration = {
  favorite: {
    id: Pages.favorite,
    permission: [PERMISSIONS.READ],
  },
  friends: {
    id: Pages.friends,
    permission: [PERMISSIONS.READ],
  },
  groups: {
    id: Pages.groups,
    permission: [PERMISSIONS.READ],
  },
  home: {
    id: Pages.home,
    permission: [PERMISSIONS.READ],
  },
  login: {
    id: Pages.login,
  },
  message: {
    id: Pages.message,
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
  },
  notifications: {
    id: Pages.notifications,
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
  },
  pageNotFound: {
    id: Pages.pageNotFound,
  },
  profile: {
    id: Pages.profile,
    permission: [PERMISSIONS.READ, PERMISSIONS.DELETE],
  },
  history: {
    id: Pages.history,
    permission: [PERMISSIONS.READ, PERMISSIONS.DELETE],
  },
  user: {
    id: Pages.user,
    permission: [PERMISSIONS.READ, PERMISSIONS.UPDATE],
  },
  video: {
    id: Pages.style,
    permission: [PERMISSIONS.READ],
  },
};
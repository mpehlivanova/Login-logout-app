import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { routeConfiguration } from '@/components/navigation/constants';
import { PERMISSIONS } from '@/enum';

import Routing from './routing';

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

// vi.mock is hoisted above all imports, so a plain variable is not available inside it.
// vi.hoisted creates a value that is hoisted together with the mocks.
const mocks = vi.hoisted(() => ({
  isAuthenticated: false,
  permissions: [] as string[],
}));

// The mocks read the current values on every render,
// so each test decides who the user is
vi.mock('@/hooks/useAuthContext', () => ({
  useAuthContext: () => ({
    isAuthenticated: mocks.isAuthenticated,
    setAuthenticated: vi.fn(),
  }),
}));

vi.mock('@/hooks/useUserContext', () => ({
  useUserContext: () => ({ user: { permissions: mocks.permissions } }),
}));

// login.tsx imports authManager from App.tsx, and App.tsx starts MSAL on import
vi.mock('@/App', () => ({
  authManager: { loginUser: vi.fn() },
}));

// ---------------------------------------------------------------------------
// Test data from the route configuration
// ---------------------------------------------------------------------------

const { login, pageNotFound, home, user } = routeConfiguration;

// Same filter as in routing.tsx: only entries with a component are real pages
const pages = Object.values(routeConfiguration).filter((route) => route.component);

// Pages that need at least one permission
const restrictedPages = pages.filter(({ permissions = [] }) => permissions.length > 0);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// Turns a config link into a URL path: 'home' -> '/home', '/' stays '/'
const toPath = (link: string) => (link.startsWith('/') ? link : `/${link}`);

// Renders the whole routing at the given URL
const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routing />
    </MemoryRouter>,
  );

const loggedOut = () => {
  mocks.isAuthenticated = false;
  mocks.permissions = [];
};

const loggedInWith = (permissions: string[] = []) => {
  mocks.isAuthenticated = true;
  mocks.permissions = permissions;
};

const expectHeading = (name: string) => expect(screen.getByRole('heading', { name })).toBeInTheDocument();

const expectNoHeading = (name: string) => expect(screen.queryByRole('heading', { name })).not.toBeInTheDocument();

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Routing', () => {
  beforeEach(() => {
    loggedOut(); // every test starts from a clean state
  });

  describe('public routes', () => {
    it(`shows the "${login.title}" page on "${toPath(login.link)}"`, () => {
      renderAt(toPath(login.link));

      expectHeading(login.title);
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    it(`shows "${pageNotFound.title}" for an unknown path`, () => {
      // This path is intentionally NOT in the configuration
      renderAt('/some-random-page');

      expectHeading(pageNotFound.title);
    });

    it(`shows "${pageNotFound.title}" on "${toPath(pageNotFound.link)}"`, () => {
      loggedInWith(home.permissions);
      renderAt(toPath(pageNotFound.link));

      expectHeading(pageNotFound.title);
    });

    it(`redirects a logged in user from "${toPath(login.link)}" to "${home.title}"`, () => {
      loggedInWith(home.permissions);
      renderAt(toPath(login.link));

      expectHeading(home.title);
    });
  });

  describe('protected routes (generated from the configuration)', () => {
    it.each(pages)('/$link shows "$title" with the required permissions', ({ link, title, permissions }) => {
      loggedInWith(permissions);
      renderAt(toPath(link));

      expectHeading(title);
    });

    it.each(pages)('/$link redirects to login when not authenticated', ({ link, title }) => {
      renderAt(toPath(link));

      expectHeading(login.title);
      expectNoHeading(title);
    });

    // Remove the last required permission: the page must not be visible
    it.each(restrictedPages)('/$link shows nothing when a permission is missing', ({ link, title, permissions = [] }) => {
      loggedInWith(permissions.slice(0, -1));
      renderAt(toPath(link));

      expectNoHeading(title);
    });
  });

  describe('business rules (written by hand on purpose)', () => {
    // The permissions here are NOT taken from the configuration,
    // so this test fails if someone changes the /user permissions by mistake
    it(`"${user.title}" requires both READ and UPDATE`, () => {
      loggedInWith([PERMISSIONS.READ]);
      renderAt(toPath(user.link));
      expectNoHeading(user.title);
    });

    it(`"${user.title}" is visible with READ and UPDATE`, () => {
      loggedInWith([PERMISSIONS.READ, PERMISSIONS.UPDATE]);
      renderAt(toPath(user.link));
      expectHeading(user.title);
    });
  });
});

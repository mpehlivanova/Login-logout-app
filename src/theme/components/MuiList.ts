import { spacing } from '@mui/system';
import palette from './palette';
import { transparentize } from 'polished';

export const MuiList = {
  styleOverrides: {
    root: {
      ...spacing({ p: 0 }),
      backgroundColor: palette.common.white,
      '& :focus-visible': {
        outline: 'none',
      },
      '& .MuiMenuItem-root': {
        ':hover': {
          backgroundColor: transparentize(0.92, palette.primary.main),
        },
      },
    },
  },
};

export const MuiListItemIcon = {
  styleOverrides: {
    root: {
      minWidth: '35px',
    },
  },
};

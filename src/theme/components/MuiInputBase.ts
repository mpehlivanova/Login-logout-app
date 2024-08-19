import { spacing } from '@mui/system';
import { BORDER_RADIUS } from '../constants';

export default {
  styleOverrides: {
    root: {
      border: 'none',
      '&::before': {
        display: 'none',
      },
      '&::after': {
        display: 'none',
      },
      ...spacing({ p: 0 }),
      borderRadius: BORDER_RADIUS,
    },
    input: {
      borderRadius: BORDER_RADIUS,
    },
  },
};
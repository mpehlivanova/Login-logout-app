import { spacing } from '@mui/system';
import { BORDER_RADIUS } from '../constants';
import shadows from './shadows';

export default {
  styleOverrides: {
    root: {
      ...spacing({ py: 2, px: 1 }),
      textTransform: 'none',
      boxShadow: shadows[0],
      borderRadius: BORDER_RADIUS,
    },
  },
};

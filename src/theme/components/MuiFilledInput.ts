import { spacing } from '@mui/system';
import palette from './palette';

export default {
  styleOverrides: {
    root: {},
    input: {
      ...spacing({ p: 1.5 }),
      backgroundColor: palette.background.default,
    },
  },
};
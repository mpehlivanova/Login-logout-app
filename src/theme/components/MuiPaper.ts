import { BORDER_RADIUS } from '../constants';
import palette from './palette';
import shadows from './shadows';

export const MuiPaper = {
  styleOverrides: {
    root: {
      boxShadow: shadows[6],
      borderRadius: 2 * BORDER_RADIUS,
      color: palette.text.secondary,
      background: palette.background.paper,
    },
  },
};

import { BORDER_RADIUS } from '../constants';
import palette from './palette';
import shadows from './shadows';

export const MuiPaper = {
  styleOverrides: {
    root: {
      boxShadow: shadows[0],
      borderRadius: BORDER_RADIUS,
      color: palette.text.secondary,
      background: palette.background.paper,
    },
  },
};

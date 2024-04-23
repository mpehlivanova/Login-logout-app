import { spacing } from '@mui/system';
import { BORDER_RADIUS, FONT_SIZE_MEDIUM } from '../constants';
import palette from './palette';
import shadows from './shadows';

export default {
  styleOverrides: {
    root: {
      fontSize: FONT_SIZE_MEDIUM,
      ...spacing({ py: 1, px: 3 }),
      textTransform: 'capitalize',
      boxShadow: shadows[0],
      borderRadius: BORDER_RADIUS,
      ': hover': {
        boxShadow: shadows[1],
      },
    },
    containedPrimary: {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.primary.light,
      },
    },
    containedSecondary: {
      backgroundColor: palette.secondary.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.secondary.light,
      },
    },
    containedSuccess: {
      backgroundColor: palette.success.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.success.light,
      },
    },
    containedError: {
      backgroundColor: palette.error.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.error.light,
      },
    },
    containedInfo: {
      backgroundColor: palette.info.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.info.light,
      },
    },
    containedWarning: {
      backgroundColor: palette.warning.main,
      color: palette.common.white,
      ': hover': {
        backgroundColor: palette.warning.light,
      },
    },
  },
};

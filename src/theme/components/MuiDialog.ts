import { transparentize } from 'polished';
import palette from './palette';

export default {
  styleOverrides: {
    root: {},
    backdrop: {
      backgroundColor: transparentize(0.92, palette.common.black),
    },
  },
};

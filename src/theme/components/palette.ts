import { darken, lighten, transparentize } from 'polished';
import {
  DARKEN,
  ERROR,
  GRAY,
  INFO,
  LIGHTEN,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING,
} from '../constants';

const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export default {
  primary: {
    main: PRIMARY,
    light: lighten(LIGHTEN, PRIMARY),
    dark: darken(DARKEN, PRIMARY),
    contrastText: '#fff',
  },
  info: {
    main: INFO,
    light: lighten(LIGHTEN, INFO),
    dark: darken(DARKEN, INFO),
    contrastText: '#fff',
  },
  error: {
    main: ERROR,
    light: lighten(LIGHTEN, ERROR),
    dark: darken(DARKEN, ERROR),
    contrastText: '#fff',
  },
  success: {
    main: SUCCESS,
    light: lighten(LIGHTEN, SUCCESS),
    dark: darken(DARKEN, SUCCESS),
    contrastText: '#fff',
  },
  warning: {
    main: WARNING,
    light: lighten(LIGHTEN, WARNING),
    dark: darken(DARKEN, WARNING),
    contrastText: '#fff',
  },
  secondary: {
    main: SECONDARY,
    light: lighten(LIGHTEN, SECONDARY),
    dark: darken(DARKEN, SECONDARY),
    contrastText: '#fff',
  },
  grey: {
    ...grey,
    main: GRAY,
    light: lighten(LIGHTEN, GRAY),
    dark: darken(DARKEN, GRAY),
    contrastText: '#fff',
  },
  common: { black: '#000', white: '#fff' },
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  background: {
    paper: '#FFFFFF',
    default: '#f9fafb',
  },
  backdrop: {
    mobile: '#32609C',
    divider: '#204676',
  },
  divider: transparentize(0.2, grey[500]),
  action: {
    active: '#637381',
    hover: transparentize(0.08, grey[500]),
    selected: transparentize(0.16, grey[500]),
    disabled: transparentize(0.8, grey[500]),
    disabledBackground: transparentize(0.24, grey[500]),
    focus: transparentize(0.24, grey[500]),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

import { createTheme } from '@mui/material/styles';
import {
  palette,
  shadows,
  spacing,
  typography,
  MuiTypography,
} from './components';

export const theme: any = {
  palette,
  typography,
  shadows,
  spacing,
  components: {
    MuiTypography,
  },
};

export default createTheme(theme);

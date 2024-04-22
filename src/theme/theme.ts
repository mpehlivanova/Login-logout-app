import { createTheme } from '@mui/material';
import {
  palette,
  typography,
  MuiButton,
  MuiList,
  MuiListItemIcon,
  MuiMenuItem,
  MuiPaper,
  MuiMenu,
  MuiTypography,
} from './components';

const theme: any = {
  palette,
  typography,
  components: {
    MuiButton,
    MuiList,
    MuiListItemIcon,
    MuiMenuItem,
    MuiMenu,
    MuiPaper,
    MuiTypography,
  },
};

export default createTheme(theme);

import { createTheme } from '@mui/material';
import {
  palette,
  typography,
  MuiButton,
  MuiDialog,
  MuiDrawer,
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
    MuiDialog,
    MuiDrawer,
    MuiList,
    MuiListItemIcon,
    MuiMenuItem,
    MuiMenu,
    MuiPaper,
    MuiTypography,
  },
};

export default createTheme(theme);

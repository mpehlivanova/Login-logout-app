import { createTheme } from '@mui/material';
import {
  palette,
  typography,
  MuiButton,
  MuiDialog,
  MuiDivider,
  MuiDrawer,
  MuiInputBase,
  MuiFilledInput,
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
    MuiDivider,
    MuiDrawer,
    MuiInputBase,
    MuiFilledInput,
    MuiList,
    MuiListItemIcon,
    MuiMenuItem,
    MuiMenu,
    MuiPaper,
    MuiTypography,
  },
};

export default createTheme(theme);

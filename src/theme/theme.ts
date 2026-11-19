import { createTheme } from '@mui/material';

import {
  MuiButton,
  MuiDialog,
  MuiDivider,
  MuiDrawer,
  MuiFilledInput,
  MuiInputBase,
  MuiList,
  MuiListItemIcon,
  MuiMenu,
  MuiMenuItem,
  MuiPaper,
  MuiTypography,
  palette,
  typography,
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

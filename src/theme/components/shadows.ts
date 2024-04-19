import { transparentize } from 'polished';
import palette from './palette';

export default [
  'none',
  `0px 0px 4px ${transparentize(0.55, palette.common.black)}`, // Icon avatar
  `0px 2px 6px ${transparentize(0.75, palette.common.black)}`, // dialog page and button in dialog
  `0px 2px 15px ${transparentize(0.85, palette.common.black)}`, // Button search in search page
  `0px 2px 15px ${transparentize(0.9, palette.common.black)}`, // Button, Header, Program Stepper, Schedule, subject,input and all Containers/Box
  ...Array(20).fill(
    `0px 2px 15px ${transparentize(0.9, palette.common.black)}`
  ),
];

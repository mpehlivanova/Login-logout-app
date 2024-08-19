import { transparentize } from 'polished';
import palette from './palette';

export default [
  'none',
  '#919EAB 0px 5px 5px -3px',
  '#919EAB 0px 8px 10px 1px',
  '#919EAB 0px 3px 14px 2px',
  ...Array(24).fill(
    `${transparentize(0.7, palette.grey.main)} 0px 4px 15px 0px `
  ),
];

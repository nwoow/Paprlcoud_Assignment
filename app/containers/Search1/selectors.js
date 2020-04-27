/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.search1 || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    search1State => search1State.username,
  );

export { selectHome, makeSelectUsername };

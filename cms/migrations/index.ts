import * as migration_20261118_075042_initial from './20261118_075042_initial';

export const migrations = [
  {
    up: migration_20261118_075042_initial.up,
    down: migration_20261118_075042_initial.down,
    name: '20261118_075042_initial'
  },
];

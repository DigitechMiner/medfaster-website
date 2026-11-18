import * as migration_20261118_075042_initial from './20261118_075042_initial';
import * as migration_20261118_181339_page_builder_header_footer from './20261118_181339_page_builder_header_footer';

export const migrations = [
  {
    up: migration_20261118_075042_initial.up,
    down: migration_20261118_075042_initial.down,
    name: '20261118_075042_initial',
  },
  {
    up: migration_20261118_181339_page_builder_header_footer.up,
    down: migration_20261118_181339_page_builder_header_footer.down,
    name: '20261118_181339_page_builder_header_footer'
  },
];

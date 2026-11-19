import * as migration_20261118_075042_initial from './20261118_075042_initial';
import * as migration_20261118_181339_page_builder_header_footer from './20261118_181339_page_builder_header_footer';
import * as migration_20261118_191558_editable_pages from './20261118_191558_editable_pages';
import * as migration_20261118_194355_blob_storage_fields from './20261118_194355_blob_storage_fields';
import * as migration_20261119_153932_branding_images from './20261119_153932_branding_images';

export const migrations = [
  {
    up: migration_20261118_075042_initial.up,
    down: migration_20261118_075042_initial.down,
    name: '20261118_075042_initial',
  },
  {
    up: migration_20261118_181339_page_builder_header_footer.up,
    down: migration_20261118_181339_page_builder_header_footer.down,
    name: '20261118_181339_page_builder_header_footer',
  },
  {
    up: migration_20261118_191558_editable_pages.up,
    down: migration_20261118_191558_editable_pages.down,
    name: '20261118_191558_editable_pages',
  },
  {
    up: migration_20261118_194355_blob_storage_fields.up,
    down: migration_20261118_194355_blob_storage_fields.down,
    name: '20261118_194355_blob_storage_fields',
  },
  {
    up: migration_20261119_153932_branding_images.up,
    down: migration_20261119_153932_branding_images.down,
    name: '20261119_153932_branding_images'
  },
];

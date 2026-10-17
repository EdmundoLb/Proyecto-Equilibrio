import * as migration_20261017_123320_initial from './20261017_123320_initial';

export const migrations = [
  {
    up: migration_20261017_123320_initial.up,
    down: migration_20261017_123320_initial.down,
    name: '20261017_123320_initial'
  },
];

'use strict';

module.exports = {
    // native libraries
    Path: 'path',
    FS: 'fs',
    nodeUtil: 'util',
    CP: 'child_process',

    // third-party libraries
    walkdir: 'walkdir',
    del: 'del',
    runSequence: 'run-sequence',

    // third-party libraries prefixed with 'gulp-'
    bump: 'gulp-bump',
    eslint: 'gulp-eslint',
    cached: 'gulp-cached',
    license: 'gulp-license',
    filter: 'gulp-filter',
    changelog: 'gulp-conventional-changelog',

    // data (path related to project root dir)
    packageJSON: './package.json',
};

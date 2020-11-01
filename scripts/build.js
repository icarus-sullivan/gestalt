const config = require('config');
const path = require('path');
const fs = require('fs-extra');

const { version } = require('../package.json');

const BUILD_DIR = path.join(process.cwd(), 'build');
fs.removeSync(BUILD_DIR);
fs.ensureDirSync(BUILD_DIR);

const content = JSON.stringify(config, null, 2);
fs.writeFileSync(path.join(BUILD_DIR, `${version}.json`), content, 'utf8');
fs.writeFileSync(path.join(BUILD_DIR, `latest.json`), content, 'utf8');

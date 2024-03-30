#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const appDirectoryPath = './src/app';

const pageFiles = [];
function findPageFiles(directory) {
  const filesAndDirectories = fs.readdirSync(directory, {withFileTypes: true});

  for (let entry of filesAndDirectories) {
    if (entry.isDirectory()) {
      findPageFiles(path.join(directory, entry.name));
    } else if (entry.isFile() && entry.name.endsWith('page.tsx')) {
      pageFiles.push(path.join(directory, entry.name));
    }
  }

  return pageFiles;
}

const computedPageFiles = findPageFiles(appDirectoryPath);

const pageFileObj = computedPageFiles.map((pageFile) =>
  pageFile.replace(/^src\/app/, '').replace(/\/?page\.tsx$/, '')
);

const pageFileEnum = pageFileObj.reduce((prev, curr) => {
  return {
    ...prev,
    [curr]: curr
  };
}, {});

fs.writeFileSync(
  './src/common/path.tsx',
  `export const paths = ${JSON.stringify(pageFileObj, null, 2)} as const;
  
export type TPath = typeof paths[number];

export enum EPath ${JSON.stringify(pageFileEnum, null, 2).replaceAll(':', ' =')}
`
);

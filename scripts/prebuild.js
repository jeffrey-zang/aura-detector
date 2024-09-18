import fs from 'fs';
const path = './node_modules/react-use-face-detection/package.json';

// Read the package.json file of react-use-face-detection
const packageJson = JSON.parse(fs.readFileSync(path, 'utf8'));

// Delete the 'module' field if it exists
if (packageJson.module === "build/index.esm.js") {
  delete packageJson.module;
}

// Write the updated package.json back to disk
fs.writeFileSync(path, JSON.stringify(packageJson, null, 2), 'utf8');

console.log('"module" field removed from react-use-face-detection package.json');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = `${__dirname}/files/file.txt`;
const fileContent = 'I am fresh and young';

const create = async () => {
    fileExists(pathToFile, (exists) => {
        if (exists) {
            throw new Error('FS operation failed ');
        } else {
            writeFile(pathToFile);
        }
    });
};

const writeFile = (path) => fs.writeFile(path, fileContent, error => {
    if (error) {
        throw new Error('Error in the file creation');
    }
});

const fileExists = (path, callback) => {
    fs.access(path, fs.constants.F_OK, (error) => {
        if (error) {
            callback(false);
        } else {
            callback(true);
        }
    });
}

await create();
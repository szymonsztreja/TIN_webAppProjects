// import * as fs from 'node:fs/promises';
import { appendFile, readFile, unlink } from 'node:fs/promises';

// removes first two arguments, obsolete for this exercise
const args = process.argv.slice(2);

if (args < 2) {
    console.log("You need to pass atleast two arguments for function to work properly!")
    process.exit(1);
}

const [operation, fileName, ...data] = args;

switch (operation) {
    case 'read':
        viewFile(fileName).then((contents) => {
            console.log(contents);
        })
        break;

    case 'append':
        if (data.length != 1) {
            console.log("Error!. Keep in mind that you should put your string in ''!");
        }
        appendToFile(fileName, data);
        break;

    case 'delete':
        deleteFile(fileName);
        break;

    default:
        console.log(" Sorry we are out of operations");
        process.exit(1);
}

export async function viewFile(fn) {
    try {
        const filePath = new URL(`./files/${fn}`, import.meta.url);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        return contents;
    } catch (error) {
        console.error('there was an error:', error.message);
    }
}


export async function appendToFile(fn, rest) {
    try {
        const filePath = new URL(`./files/${fn}`, import.meta.url);
        const contents = await appendFile(filePath, rest, { encoding: 'utf8' });
    } catch (error) {
        console.error('there was an error:', error.message);
    }
}


export async function deleteFile(fn) {
    try {
        const filePath = new URL(`./files/${fn}`, import.meta.url);
        const contents = await unlink(filePath, { encoding: 'utf8' });
    } catch (error) {
        console.error('there was an error:', error.message);
    }
}
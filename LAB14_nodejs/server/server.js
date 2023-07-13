import bodyParser from 'body-parser';
import express, { request, response } from 'express';
import { appendFile, readFile, unlink } from 'fs/promises';

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/:fileName', async (request, response) => {
    try {
        const { fileName } = request.params;
        const fileContent = await readFile(`../files/${fileName}`, { encoding: 'utf8' });
        response.send(fileContent);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
});


app.post('/:fileName', async (request, response) => {
    try {
        const { fileName } = request.params;
        const requestBody = request.body;
        const appendings = requestBody.append;
        console.log('Request Body:', requestBody);
        console.log('Appendings:', appendings);
        await appendFile(`../files/${fileName}`, appendings, { encoding: 'utf8' });
        response.status(200).json({
            message: 'POST request recived',
            data: requestBody
        });
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
});


app.delete('/:fileName', async (request, response) => {
    try {
        const { fileName } = request.params;
        await unlink(`../files/${fileName}`, { encoding: 'utf8' });
        response.status(200).json({ message: "deleted!" });
    } catch (error) {
        console.error('there was an error:', error.message);
    }
})

app.listen(process.env.PORT || 3000,
    () => console.log(`App available on http://localhost:3000`));

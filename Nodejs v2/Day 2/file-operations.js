import { readFileSync, readFile, writeFileSync } from 'node:fs'
import fs from 'node:fs/promises'

// ** Synchronous File Reading **

// -  Read a JSON file synchronously using`fs.readFileSync()`
// - Parse the JSON data and log it to the console
// - Handle any potential errors

try {
        const syncFile = readFileSync("users.json", "utf-8");
        const parsedFile = JSON.parse(syncFile);
        // console.log(parsedFile);
} catch (err) {
        console.error(err);
}

// ** Asynchronous File Reading(Callback Style) **

// -  Read the same file using `fs.readFile()` with a callback
// - Parse and log the data
// - Implement proper error handling

try {
        readFile("users.json", "utf-8", (err, data) => {
                if (err) {
                        console.log(err);
                } else {
                        const parsedData = JSON.parse(data);
                        // console.log(parsedData);
                }
        });
} catch (err) {
        console.error(err);
}

// ** Promise - based File Reading **

// - Use`fs.promises.readFile()` or promisify the callback version
// - Handle the promise with `.then()` and`.catch()`

fs.readFile("users.json", "utf-8")
        .then((data) => {
                const parsedData = JSON.parse(data);
                // console.log(parsedData);
        })
        .catch((err) => {
                console.log(err);
        });

// 4. ** Async / Await File Reading **
// -  Create an async function that uses `await` with `fs.promises.readFile()`
// - Wrap it in a try-catch block for error handling

try {
        const asyncData = await fs.readFile("users.json", "utf-8")
        const parsedAsyncData = JSON.parse(asyncData)
        // console.log(parsedAsyncData);
} catch (err) {
        console.log(err);
}


// ** Adding Data to JSON File **

// - Read the existing JSON file
// - Add a new user object to the array
// - Write the updated data back to the file
// - Implement this using both synchronous and asynchronous methods

const addUserSync = () => {
        const data = readFileSync("users.json", "utf-8");
        const parsedData = JSON.parse(data);

        if (!parsedData) {
                return 'No data found'
        }


        const newUser = {
                id: 8,
                username: "aya",
                email: "aya@mail.com",
                role: "user",
        };

        const doesExist = parsedData.find((user) => user.username === newUser.username || user.email === newUser.email);
        if (doesExist) {
                return 'User already exists'
        }

        try {
                parsedData.push(newUser);
                writeFileSync("users.json", JSON.stringify(parsedData, null, 2));
                return parsedData
        } catch (err) {
                return err;
        }
}

// console.log(addUserSync());

const addUserAsync = async () => {
        const data = await fs.readFile("users.json", "utf-8");
        const parsedData = JSON.parse(data);

        if (!parsedData) {
                return 'No data found'
        }

        const newUser = {
                id: 10,
                username: "aliaa",
                email: "aliaa@mail.com",
                role: "user",
        };

        const doesExist = parsedData.find((user) => user.id === newUser.id || user.username === newUser.username || user.email === newUser.email);
        if (doesExist) {
                return 'User already exists'
        }

        try {
                parsedData.push(newUser);
                await fs.writeFile("users.json", JSON.stringify(parsedData, null, 2));
                return parsedData
        } catch (err) {
                return err;
        }
}

// console.log(await addUserAsync());


// ** Creating a Backup System **
// - Create a function that backs up your data file
// - Name the backup with a timestamp(e.g., `data-backup-2024-01-15.json`)

const backup = async () => {
        const data = await fs.readFile("users.json", "utf-8");
        const parsedData = JSON.parse(data);
        if (!parsedData) return 'No data found'
        const now = new Date().toISOString().slice(0, 10);
        const backupName = `data-backup-${now}.json`;
        try {
                await fs.writeFile(backupName, JSON.stringify(parsedData, null, 2));
                return backupName
        } catch (err) {
                return err
        }
}

console.log(await backup());


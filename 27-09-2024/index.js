const { Console } = require("console").promises;
const fs = require("fs");

let loveLetter = fs.readFileSync("./index.txt", "utf-8");
// console.log(loveLetter);

const loveFeedback = "Hallo juga FSW2";
const letterResult = fs.writeFileSync("./balasan.txt", loveFeedback);

fs.writeFileSync("./index.txt", "Ketimpa versi 1");

// console.log(letterResult);

// const makeFolder = fs.mkdir("Folder Baru", () =>{});
// console.log(makeFolder);

// Asyncronous
// file/write

async function readLoveLetter() {
    try {
        const readLoveLetter = await fs.readFile("./index.txt", "utf-8")
    } catch (error) {
        console.log(error)
    }
}

// loveLetter = fs.readFile("./index.txt", "utf-8", (err, data) => {
//     console.log(`ini data ${data}`)
// });

fs.writeFileSync("./index.txt", "Ketimpa versi 2")

setTimeout(() => {
    loveLetter = fs.readFile("./index.txt", "utf-8", (err, data) => {
        console.log(`ini data line 28 ${data}`)
    });
}, 500)

console.log(`ini data line 32 ${loveLetter}`);
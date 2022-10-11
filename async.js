import fs from "fs" //built into node
const filename = "file.txt" //reading the file here and ^

// read via call back,
fs.readFile(filename,"utf8",function (err,data) {
    console.log(data);
})

// promise (.then),
fs.promises.readFile(filename,"utf8").then((data) => {
    console.log(data);
})

// & async
const showText = async () => { //same as line 16
//async function showText() {
    const data = await fs.promises.readFile(filename, 'utf8');
    return data
}

console.log(await showText())
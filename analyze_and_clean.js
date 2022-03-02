let fs = require('fs');

let data = fs.readFileSync('từ điển.txt', 'utf8');
console.log('readFile called');

let dict = data.split("\r\n");

console.log(dict.length);

for(i = 0; i < dict.length; i++) {
    dict[i] = dict[i].toLowerCase();
}

let alphabet = {};
let wordLength = {};

let redundant = ['.', ';', ':', '\'' , ',', ' ', '-' , '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let cleanDict = [];

dict.forEach(word => {
    len = 0;
    cleanWord = "";

    for(i = 0; i < word.length;i++) {
        char = word[i];
        if(!(redundant.includes(char))) {
            if(!(char in alphabet)) {
                alphabet[char] = 1;
            } else {
                alphabet[char]++;
            }

            len++;
            cleanWord += char;
        }
    }

    if(!(len in wordLength)) {
        wordLength[len] = 1;
    } else {
        wordLength[len]++;
    }

    cleanDict.push(cleanWord);
});

console.log(alphabet);
console.log(wordLength);
console.log(cleanDict);

let condensed = cleanDict.join(" ");
//console.log(condensed);
fs.writeFileSync("dictionary.txt", condensed);
console.log('writeFile called');
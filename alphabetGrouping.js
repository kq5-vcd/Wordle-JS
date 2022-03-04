let fs = require('fs');

let alphabet = fs.readFileSync('alphabet.txt', 'utf8');
alphabet = alphabet.split("\n");

let groups = []
let vowels = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ơ', 'ô', 'u', 'ư', 'y']

for(let i = 0; i < alphabet.length; i++) {
    let char = alphabet[i];

    if(vowels.includes(char)) {
        let group = [];

        for(let j = 0; j < 6; j++){
            group.push(alphabet[i+j]);
        }

        groups.push(group);
    }
}

console.log(groups);

let grouped_strings = [];

for(let i = 0; i < groups.length; i++){
    let densed_group = groups[i].join(" ");
    grouped_strings.push(densed_group);
}

let condensed = grouped_strings.join("\n");
fs.writeFileSync("vowels.txt", condensed);
console.log('writeFile called');
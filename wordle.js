let key = "melon";
let guess = "hello";

let result = [0,0,0,0,0]

let temp = key
for(i = 0; i < key.length; i++) {
    guessChar = guess.charAt(i);
    if(key.charAt(i) == guessChar) {
        result[i] = 2;
    } else {
        let j = -1;
        while ((j = key.indexOf(guessChar, j+1)) != -1){
            if(result[j] == 0) {
                result[i] = 1;
                break;
            }
        }
    }
}

console.log(result);
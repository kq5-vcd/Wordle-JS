let key = "bóhoa";
let guess = "conbò";

let vowels = [
    [ 'a', 'á', 'à', 'ã', 'ả', 'ạ' ],
    [ 'ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ' ],
    [ 'â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ' ],
    [ 'e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ' ],
    [ 'ê', 'ế', 'ề', 'ễ', 'ể', 'ệ' ],
    [ 'i', 'í', 'ì', 'ĩ', 'ỉ', 'ị' ],
    [ 'o', 'ó', 'ò', 'õ', 'ỏ', 'ọ' ],
    [ 'ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ' ],
    [ 'ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ' ],
    [ 'u', 'ú', 'ù', 'ũ', 'ủ', 'ụ' ],
    [ 'ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự' ],
    [ 'y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ' ]
  ]

const vowelCheck = (a, b) => {
    for(let i = 0; i < vowels.length; i++) {
        let vowel = vowels[i];

        if(vowel.includes(a) && vowel.includes(b)) {
            return true;
        }
    }

    return false;
}

const strToObj = (word) => {
    let obj = {};
    for(let i = 0; i < word.length; i++) {
        if(!(word[i] in obj)) {
            obj[word[i]] = 1;
        } else {
            obj[word[i]]++;
        }
    }

    return obj;
}

const wordle = (key, guess) => {
    console.log(key);
    console.log(guess);

    let result = new Array(key.length); 
    for(let i = 0; i < key.length; i++) result[i] = 0;

    let keyObj = strToObj(key);
    let guessObj = strToObj(guess);
    
    console.log(keyObj);
    console.log(guessObj);

    for(i = 0; i < key.length; i++) {
        let keyChar = key.charAt(i);
        let guessChar = guess.charAt(i);

        if(keyChar == guessChar) {
            result[i] = 4;

            keyObj[keyChar]--;
            guessObj[guessChar]--;

            console.log("Match: " + keyChar);
            console.log(keyObj);
            console.log(guessObj);
        } else if(vowelCheck(keyChar, guessChar)) {
            result[i] = 3;

            keyObj[keyChar] -= 1;
            guessObj[guessChar] -= 1;

            console.log("Almost match: " + guessChar);
            console.log(keyObj);
            console.log(guessObj);
        } 
    }

    //console.log(result); 

    for(i = 0; i < key.length; i++) {
        if(result[i] < 3) {
            let keyChar = key.charAt(i);
            let guessChar = guess.charAt(i);

            if((guessChar in keyObj) && (keyObj[guessChar] > 0)) {
                result[i] = 2;

                keyObj[guessChar] -= 1;
                guessObj[guessChar] -= 1;
                
                console.log("Miss: " + guessChar);
                console.log(keyObj);
                console.log(guessObj);
            }
        }
    }

    for(i = 0; i < key.length; i++) {
        if(result[i] < 2) {
            let guessChar = guess.charAt(i);
            
            for(j = 0; j < key.length; j++) {
                let keyChar = key.charAt(j);

                if((vowelCheck(guessChar, keyChar)) && (keyObj[keyChar] > 0)) {
                    result[i] = 1;

                    keyObj[guessChar] -= 1;
                    guessObj[guessChar] -= 1;
                
                    console.log("Almost miss: " + guessChar);
                    console.log(keyObj);
                    console.log(guessObj);

                    break;
                }
            }
        }
    }

    //console.log(result);

    return result;
}

let result = wordle(key, guess);
console.log(result);
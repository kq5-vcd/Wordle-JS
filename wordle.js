let key = "apply";
let guess = "happy";

console.log(key);
console.log(guess);

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

const wordle = (key, guess) => {
    let result = new Array(key.length); 
    for(let i = 0; i < key.length; i++) result[i] = 0;

    for(i = 0; i < key.length; i++) {
        let keyChar = key.charAt(i);
        let guessChar = guess.charAt(i);

        if(keyChar == guessChar) {
            result[i] = 4;
        } else if(vowelCheck(keyChar, guessChar)) {
            result[i] = 3;
        }
    }

    //console.log(result);

    for(i = 0; i < key.length; i++) {
        if(result[i] < 3) {
            let j = -1;
            while ((j = key.indexOf(guess.charAt(i), j+1)) != -1){
                //console.log(key.charAt(j), result[j], j, i);

                if(result[j] < 3) {
                    result[i] = 2;
                    //console.log(result);
                    break;
                }
            }
        }
    }

    for(i = 0; i < key.length; i++) {
        if(result[i] < 2) {
            for(j = 0; j < key.length; j++) {
                if((result[j] == 0) && (vowelCheck(guess.charAt(i), key.charAt(j)))) {
                    result[i] = 1;
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
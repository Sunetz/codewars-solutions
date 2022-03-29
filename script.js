/*function solution(string) {
    let str_array = string.split('');
    let result = [];
    let start=0;
    let index = 0;

    for(let i=start; i<str_array.length; i++){
        if(str_array[i]===str_array[i].toUpperCase()){
            result.push((str_array.slice(index, i)).join(''));
            index = i;
        }
    }
    result.push((str_array.slice(index)).join(''))
    console.log(result.join(' '))
    return result.join(' ');
}

function sol(str){
    return(str.replace(/([A-Z])/g, ' $1'))
}

sol('camelCasingTest')
sol('hello')
sol('')*/

/*function order(words){
    let array_of_words = words.split(' ');
    let index_array = [];
    let result_array=[];
    for (let i=0; i<array_of_words.length; i++){
        for(let j=0; j<array_of_words[i].length; j++){
            if(!isNaN(array_of_words[i][j])){
                index_array.push(+array_of_words[i][j])
            }

        }


    }
    for(let i=0; i<index_array.length; i++){

    }
    console.log(index_array)
    console.log(result_array)


}
order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
*/

/*function disemvowel(str) {
    const vowels = "aeiouAEUIO";
    let arr=[]
    for(let i=0; i<str.length; i++){
        if(!vowels.includes(str[i])){
            arr.push(str[i])
        }
    }
    str = arr.join('')
    return str
}

disemvowel("This website is for losers LOL!");*/

/* function isIsogram(str) {
    str = str.toLowerCase();

    for(let i=0; i<str.length-1; i++){
        if(str.includes(str[i], str.indexOf(str[i+1]))){
            return false            
        }      
    }
    return true    
}
isIsogram('oo') */

/* function explode(s) {
    const arr = s.split('');
    let new_arr = []
    for(let i=0; i<arr.length; i++){
        new_arr.push(arr[i].repeat(+arr[i]))
    } 
    return new_arr.join('');
}

explode('123') */

/* function getParticipants(handshakes){
    console.log((1 + (1 + 8*handshakes)**0,5)/2)
    return(1 + (1 + 8*handshakes)**0,5)/2
}

getParticipants(6) */

function duplicateEncode(word) {
    word = word.toLowerCase();
    if (new Set(word).size === word.length) {
        console.log('('.repeat(word.length))
        return '('.repeat(word.length)
    } else {
        let count = [];
        let arr=[];
        for (let i = 0; i < word.length; i++) {
            count = word.split('').filter(char => char === word[i]);     
            count.length > 1 ? arr.push(')') : arr.push('(');            
        }
        console.log(arr.join(''))

    }
}

duplicateEncode('Success')
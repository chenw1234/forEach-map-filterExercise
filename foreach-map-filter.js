/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubled = [];
    arr.forEach(function(val){
        doubled.push(val * 2);
    })
    return doubled;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let onlyEvens = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            onlyEvens.push(val);
        }
    })
    return onlyEvens;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    })
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   const vowels = "aeiou";
   let obj = {};
   let splitArr = str.split("");
   //We use .split("") to split the string after every letter in a given string. This helps divide up the entire string into an array that is separated at every letter
    splitArr.forEach(function(letter){
        let lowerCasedLetters = letter.toLowerCase();
        if(vowels.indexOf(lowerCasedLetters) !== -1){
            if (obj[lowerCasedLetters]) {
                obj[lowerCasedLetters]++;
            } else {
                obj[lowerCasedLetters] = 1;
            }
        }
    });
    return obj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(val){
        return val * 2;
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// function extractKey(arr, key){
//     return arr.map(function(val, i){
//         return arr[i]['name'];
//     })
// }
function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(val){
        return val['first'] + " " +val['last'];
    })
}
//solution
// function extractFullName(arr) {
//     return arr.map(function(val) {
//       return val.first + " " + val.last;
//     });
//   }
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val){
        return val[key] !== undefined;
    })
}
//NOTES
//Above "val" indicates each object in the array. "[key]" indicates the parameter AFTER the array, which is 'isCatOwner'. The filter is going through each "val" object and seeing if that object's key even has a "key" of "isCatOwner". If it doesn't it will return undefined and those are the object values we DON'T want. This is why we make the boolean !== which is NOT undefined. We are returning the object values WITH a key that does NOT return undefined.

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}


/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}
//NOTES:
//Ask about [0]
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = 'aeiou'
    return str
    .toLowerCase()
    .split("")
    .filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join("");
}
//NOTES
//First we make a const consisting of all vowels
//Then we return the inputted string, turn it all lowercased using .toLowerCase(). Then we separate all the letters of the returned, lowercased string into separate elements within an array. Then we filter this newly formed array consisting of each individual letter from the inputted string using .filter(). We run a callback on within the filter() and make the condition of the callback to only return true if the each element does NOT consist of a vowel using vowels.indexOf(val) where val is each individual element. Once we return a new filtered array consisting of all NON vowel letters, we join the entire array into one string using .join()

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function(val){
        return val % 2 !== 0
    }).map(function(val){
        return val * 2
    });
}
//NOTES
//We first return the array and filter() all out all the odd numbers in the array and create a new array with JUST the odd numbers
//Then we use map to iterate on EACH element in the array and run a callback function on each element to double every element in the newly filtered array.
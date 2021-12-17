


function areAnagrams(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        return false;
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

function findAnagrams(arr) {
    let anagramsArray = [];

    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[j]);
            console.log(arr[i]);
            if (areAnagrams(arr[j], arr[i])) {

                anagramsArray.push(arr[i])
            }
        }
    }
    return anagramsArray;

}
const arr = ['arrest', 'rarest', 'are']
console.log(findAnagrams(arr))


module.exports = areAnagrams, findAnagrams;


const areAnagrams = require('./anagram');
const findAnagrams = require('./anagram');



test('should return true since arrest and rarest are anagrams', () => {
    expect(areAnagrams('arrest', 'rarest')).toBe(true);
});

test('should return arrest and rarest from list of words: are, arrest, rarest', () => {
    const arr = ['arrest', 'rarest', 'are']
    let arr2 = ['arrest', 'rarest']
    let anagramsArray = [];
    expect(findAnagrams(arr)).toBe(arr2);
});
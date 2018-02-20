'use strict';

const initialState = {
    list: []
}

const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowel(letter) {
    return vowels.includes(letter);
}

function countVowels(word) {
    return word.split('').reduce((memo, letter) => {
        if (isVowel(letter)) {
            if (typeof memo[letter] == 'undefined') {
                memo[letter] = 0;
            }
            memo[letter] = memo[letter] + 1;
        }
        return memo;
    }, {});
}

function hasOneVowelType(word) {
    return Object.keys(countVowels(word)).length < 2;
}

function getVowelType(word) {
    if (hasOneVowelType(word)) {
        const vowelHash = countVowels(word);
        return Object.keys(vowelHash).pop();
    }
    return false;
}

function hasVowelOfCorrectType(vowel, word) {
    const type = getVowelType(word);
    return type && type === vowel;
}

function updateList(list, word) {
    if (!list.length && hasOneVowelType(word) && hasVowelOfCorrectType(getVowelType(list[0]), word)) {
        return [
            ...list,
            word
        ];
    }
    return list;
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'word':
            return updateList(list, word);
            
        default:
            return state;
    }
}

/**
 * {
 *     word: 'pot'
 * }
 */

module.exports = {
    isVowel,
    countVowels,
    reducer,
    hasOneVowelType,
    getVowelType,
    updateList
};


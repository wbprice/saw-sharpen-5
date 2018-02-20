'use strict';

const { expect } = require('chai');

const {
    isVowel,
    countVowels,
    reducer,
    hasOneVowelType,
    getVowelType,
    updateList
} = require('./reducer');

describe('isVowel', function() {
    it('should return true if provided a vowel', function() {
        expect(isVowel('a')).to.be.true;
    });

    it('should return false if provided a consonant', function() {
        expect(isVowel('q')).to.be.false;
    });
});

describe('countVowels', function() {
    it('should return an object with the number of vowels in a word', function() {
        expect(countVowels('aeiou')).to.deep.equal({
            a: 1,
            e: 1,
            i: 1,
            o: 1,
            u: 1
        });
    });
});

describe('hasOneVowelType', function() {
    it('should return true if the word has one type of vowel', function() {
        expect(hasOneVowelType('jewel')).to.be.true;
    });

    it('should return false if the word has more than one type of vowel', function() {
        expect(hasOneVowelType('airplane')).to.be.false;
    });
})

describe('getVowelType', function() {
    it('should return e if given a word of vowel type e', function() {
        expect(getVowelType('jewel')).to.equal('e');
    });

    it('should return false if two many vowels  were found', function() {
        expect(getVowelType('potato')).to.be.false;
    });
});

describe('updateList', function() {
    it('should work', function() {
        const list = []
        const result = updateList(list, 'potato');
        log(result); 
    });
});

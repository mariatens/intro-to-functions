/*
function:
=========
name: longestInList

parameters:
	- WORDS: list of strings

return type: string

pseudo code:
============
set LONGEST to the 0th element in WORDS

for each string, WORD, in WORDS
	if WORD has more characters than LONGEST
		set LONGEST to WORD

return LONGEST
*/

function longestInList(wrds){
    let longest = wrds[0]
    for (word of wrds){
        if (word.length > longest.length){
            longest = word
        }
    }
    return longest
}

// test cases
console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), "should be Northern Ireland")
console.log(longestInList(["the", "quick", "brown", "fox"]), "should be quick")
console.log(longestInList(["hello", "hi", "greetings", "hey"]), "should be greetings")
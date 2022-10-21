/*
function:
=========
name: censorMessage

parameters:
  - MESSAGE: string
  - BAN_LIST: list of strings

return type: string

pseudo code:
============
set RAW_WORDS to the list of strings created by separating the string message into sub-strings at every space (' ')

set SCRUBBED_WORDS to an empty list

for each string, WORD, in RAW_WORDS
	set LOWERCASE_WORD to lowercase(word)
  if LOWERCASE_WORD is contained in the list BAN_LIST
    insert the string '*****' at the end of SCRUBBED_WORDS
  else
    insert WORD at the end of SCRUBBED_WORDS

set SCRUBBED_MESSAGE to the string created by joining together every string in SCRUBBED_WORDS with a space (' ') as a join character

return SCRUBBED_MESSAGE
*/

function censorMessage(message, banList){
    let rawWords = message.split(' ')
    let scrubbedWords = []
    for (word of rawWords){
        let lowerCaseWord = word.toLowerCase()
        if (banList.includes(lowerCaseWord)){
            scrubbedWords.push("*****")
        }
        else{
            scrubbedWords.push(word)
        }
    }
    let scrubbedMessage = scrubbedWords.join(' ')
    return scrubbedMessage
}

//test cases:

console.log(censorMessage("don't mess with cats", ["mess"]),"should be don't ***** with cats")
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), "should be ***** you sure that this ***** safe")
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), "should be I CANNOT ***** *****")

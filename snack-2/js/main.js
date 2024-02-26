const firstWord = prompt ('type first')
const secondWord = prompt ('type second')

console.log(firstWord, secondWord)

if (firstWord.length > secondWord.length){
    console.log(`Shortest word: ${secondWord} - longer word: ${firstWord}`);
} else if 
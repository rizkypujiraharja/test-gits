const arrWords = ['h', 'e', 'l', 'l', 'o']

let revesedWords = [];

const reverseArrayRecursive = arr => {
    revesedWords.push(arr.pop())
    if(arr.length){
        reverseArrayRecursive(arr)
    }
}

reverseArrayRecursive(arrWords)

console.log(`-------Start Jawaban Soal 2-------`)
console.log(revesedWords)
console.log(`-------End Jawaban Soal 2-------`)
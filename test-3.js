const bracket = '{(([])[])[]}'

const isBalencedBracket = bracket => {
    const arrBracket = bracket.split('')
    const coupleBracket = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let collectedOpener = []
    is_paired = false;

    arrBracket.forEach( currentBracket => {
        if(currentBracket == '{' || currentBracket == '(' || currentBracket == '['){
            collectedOpener.push(currentBracket)
        }else{
            let last = collectedOpener.pop()
            if(coupleBracket[last] != currentBracket){
                return
            }

            if(!collectedOpener.length){
                is_paired = true
                return
            }
        }
    });

    return is_paired ? 'Yes' : 'No'

}

console.log(`-------Start Jawaban Soal 3-------`)
console.log(bracket)
console.log(isBalencedBracket(bracket))
console.log(`-------End Jawaban Soal 3-------`)
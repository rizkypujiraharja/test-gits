const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]

const countConsecutive = arrNum => {
    let max = 0, current = 0
    arrNum.forEach(number => {
        if(number) {
            current++
            if(max < current)
                max = current
        }else{
            current = 0
        }
    });

    return max
}
console.log(`-------Start Jawaban Soal 1-------`)
console.log(arr)
console.log(countConsecutive(arr))
console.log(`-------End Jawaban Soal 1-------`)
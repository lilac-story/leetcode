function removeKdigits(num: string, k: number): string {
    const arr = num.split('')
    let nonDecrease = false
    LABEL: while (k > 0 || arr[0] === '0') {
        if (arr[0] === '0') {
            arr.splice(0, 1)
            continue
        }
        if (!nonDecrease) {
            for (let i = 0; i < arr.length; i++) {
                if (+arr[i] > +arr[i+1]) {
                    arr.splice(i, 1)
                    i--
                    k--
                    continue LABEL
                }
            }
        }
        nonDecrease = true
        arr.pop()
        k--
    }
    return arr.join('') || '0'
};

function intToRoman(num: number): string {
    const factorTable: [number, string][] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]
    let str = ''
    for (let i = 0; i < factorTable.length; i++) {
        const key = factorTable[i][0]
        if (Math.floor(num / key) > 0) {
            for (let j = 0; j < Math.floor(num / key); j++) {
                str += factorTable[i][1]
            }
            num = num % key
        }
    }
    return str
};
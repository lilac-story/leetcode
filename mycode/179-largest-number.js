/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    const strs = nums.map(c => c + '')
    const judge = (a, b) => {
        if (a === '' && b === '') return 0
        if (a === '' && b !== '') return +b[0] ? 1 : -1
        if (a !== '' && b === '') return +a[0] ? -1 : 1
        let len = Math.min(a.length, b.length)
        for (let i = 0; i < len; i++) {
            if (+a[i] !== +b[i]) {
                return +b[i] - +a[i]
            }
        }
        if (a.length > b.length) {
            return judge(a.substring(len), b)
        } else {
            return judge(a, b.substring(len))
        }
    }
    strs.sort(judge)
    let result = strs.reduce((acc, cur) => (acc + cur), '')
    result = result.replace(/^0+/, '')
    return result || '0'
};
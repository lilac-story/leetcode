function lengthOfLongestSubstring(s: string): number {
    let lls = 0
    let swpMap: string[] = []
    for (const c of s) {
        const i = swpMap.indexOf(c)
        if (i === -1) {
        } else {
            lls = Math.max(lls, swpMap.length)
            swpMap = swpMap.slice(i + 1)
        }
        swpMap.push(c)
    }
    lls = Math.max(lls, swpMap.length)
    return lls
};

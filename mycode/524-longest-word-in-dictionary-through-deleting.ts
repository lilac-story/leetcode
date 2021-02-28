function findLongestWord(s: string, dictionary: string[]): string {
    dictionary.sort()
    const isSubsequence = (str: string, substr: string): boolean => {
        if (substr === '') return true
        if (str === '') return false
        return str[0] === substr[0]
            ? isSubsequence(str.substring(1), substr.substring(1))
            : isSubsequence(str.substring(1), substr)
    }
    const sorted = dictionary.filter((val) => isSubsequence(s, val))
        .map(val => ([val.length, val] as [number, string]))
        .sort((a, b) => b[0] - a[0])
    if (!sorted.length) return ''
    return sorted[0][1]
};

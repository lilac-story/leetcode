function rangeBitwiseAnd(m: number, n: number): number {
    const sm = m.toString(2).split('').reverse().join('')
    const sn = n.toString(2).split('').reverse().join('')
    let i = sn.length - 1
    for (; i >= 0; i--) {
        if (sn[i] !== sm[i]) break
    }
    let snr = ''
    for (let j = sn.length - 1; j >= 0; j--) {
        if (j > i) snr += sn[j]
        else snr += '0'
    }
    return parseInt(snr, 2)
};

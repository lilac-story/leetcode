function brokenCalc(X: number, Y: number): number {
    let count = 0
    while (X < Y) {
        if (Y % 2 === 1) Y++
        else Y = Math.floor(Y/2)
        count++
    }
    return count + X - Y
};

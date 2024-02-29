// 统计位1的个数

// 解法1
function hammingWeight(n) {
    let rst = 0;
    let mask = 1;

    for (let i=0; i<32; i++) {
        if (n & mask) {
            rst++;
        }
        mask = mask << 1;
    }
    return rst;
}
// console.log(hammingWeight(11)); // 3

// 解法2
function hammingWeight2(n) {
    let res = 0;
    for (; n; n &= n-1) {
        res++;
    }
    return res;
}

console.log(hammingWeight2(8)); // 1 ; /

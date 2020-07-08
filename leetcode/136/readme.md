https://leetcode-cn.com/problems/single-number/
## leetcode 136 
- 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
- 考察点: 异或 ^ 的运用
    - a^b^c === a^c^b
    - 0^n = n
    - n^n = 0
## Josephus Permutation
- https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
- 每三个数字消除一数,
- 例
    [1,2,3,4,5,6,7] - initial sequence
    [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
    [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
    [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
    [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
    [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
    [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
    [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
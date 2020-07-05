## Simple Fun #365: Remove Number Game I
- https://www.codewars.com/kata/59e9576d7905dff72600001e/train/javascript
- You are given two positive integers n and d(n is given by string fromat). And then, we are playing a Remove Number Game:
1st turn, we remove a digit from n, that the resulting number has at least one non-zero digit and is divisible by d.
2nd turn, we remove a digit from n, that the resulting number has at least one non-zero digit and is divisible by d-1.
3rd turn, ................................divisible by d-2.
ith turn, ................................divisible by d-i+1.
And so on. Until d-i+1 is decreased to 1 or you can not find a way to romove 1 digit from n and is divisible by d-i+1.
- 给您两个正整数n和d（n由字符串fromat给出）。然后，我们正在播放Remove Number Game：
第一回合，我们从中删除一个数字n，即所得的数字至少有一个non-zero数字并且可以被整除d。
第2回合，我们从中删除一个数字n，即所得数字至少有一个non-zero数字并且可以被整除d-1。
第三回合，.......................被...整除d-2。
在第一个转弯处，................................被d-i+1.. 整除。
等等。直到d-i+1减小到1，或者您找不到从来移动1位数n并被整除的方法d-i+1。
您的任务是确定可以进行的最大匝数。
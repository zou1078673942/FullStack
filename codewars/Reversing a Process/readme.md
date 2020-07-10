https://www.codewars.com/kata/5dad6e5264e25a001918a1fc/train/javascript

m --> 12,   12 * 6015 % 26 = 4,    4  --> e
e --> 4,     4 * 6015 % 26 = 10,   10 --> k
r --> 17,   17 * 6015 % 26 = 23,   23 --> x
- encode("mer", 6015)  -->  "6015ekx"

So we get "ekx", hence the output is "6015ekx"
- 数字转码
- 例如

decode "6015ekx" -> "mer"

decode "5057aan" -> "Impossible to decode"
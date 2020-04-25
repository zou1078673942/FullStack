# 动态规划

-  错误纠正
    背后发生了什么  ？？
    例如 输入 faeebook 会转到 facebook
    facebook  专业名词 频繁 

    莱温斯坦距离：
        edit(i, j) = max { edit( i, -j) +1, edit( i-1, j)+1, edit( i-1, j-1) +x}(如果 A[i] = B[j] x=0 否则 x=1)
    
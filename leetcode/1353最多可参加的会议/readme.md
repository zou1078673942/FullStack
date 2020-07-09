## 最多可参加的会议
- https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended/
给你一个数组 events，其中 events[i] = [startDayi, endDayi] ，表示会议 i 开始于 startDayi ，结束于 endDayi 。
你可以在满足 startDayi <= d <= endDayi 中的任意一天 d 参加会议 i 。注意，一天只能参加一个会议。
请你返回你可以参加的 最大 会议数目。
- 主要考察点： 贪心算法
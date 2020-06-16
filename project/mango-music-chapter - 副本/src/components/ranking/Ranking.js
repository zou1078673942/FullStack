import React from 'react';
import './ranking.styl'; // webpack
// import Loading from '../../common/loading/Loading';

// import Loading from '../../common/loading/Loading';
// alias 路径短连接 相对路径 路径别名  @
import Loading from '@/common/loading/Loading';
import  { getRankingList } from '@/api/ranking'; // 把请求数据的业务， 分离到api目录下  
// react 高级就业的练习生
// console.log(RankAPI)
// 排行榜 路由级别页面

class Ranking extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    getRankingList();
  }
  render() {
    return (
      <div>Ranking 
        <Loading show={this.state.loading} title="正在加载排行榜..." />
      </div>
    )
  }
}

export default Ranking;
<template>
  <div class="hello">
    <new-badge :value='200' class="item" :hidden='isHidden'>
      <el-button size='small'>评论</el-button>
    </new-badge>
    <new-badge :value='200' class="item" type='primary' :max='50'>
      <el-button size='small'>评论</el-button>
    </new-badge>
    <new-badge is-dot class="item" >数据查询</new-badge>
  </div>
</template>

<script>

import NewBadge from '@/components/NewBadge'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHidden: false
    }
  },
  components:{
    "new-badge":NewBadge,
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true
    },1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

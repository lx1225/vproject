<template>
  <div class="main">
    <div class="left">
      <h2>全部产品</h2>
      <template v-for="product in productlist">
        <h3>{{product.title}}</h3>
        <ul>
          <li v-for="item in product.list">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      productlist: {
        pc: {
          title:'PC产品',
          list:[
            {
              name:'数据统计',
              url:'http://baidu.com'
            },
            {
              name:'数据预测',
              url:'http://baidu.com'
            },
            {
              name:'流量分析',
              url:'http://baidu.com'
            },
            {
              name:'广告发布',
              url:'http://baidu.com'
            },
          ]
        },
        app: {
          title:'手机应用类',
          list:[
            {
              name:'91助手',
              url:'http://baidu.com'
            },
            {
              name:'产品助手',
              url:'http://baidu.com'
            },
            {
              name:'看片助手',
              url:'http://baidu.com',
              hot:true
            },
            {
              name:'资源发布',
              url:'http://baidu.com'
            },
          ]
        }
      }
    }
  }
}
</script>

<!-- scoped作用是将这个属性定义称为局部的css样式，而不会影响到全局css样式 -->
<style scoped>
  .main{
    width:100%;
    height:500px;
    border:1px solid green;
  }
  .left{
    width:200px;
    overflow:hidden;
    border:1px solid yellow;
  }
</style>

<template>
  <div id="footer">
      
      <ul>
          <router-link tag="li" :to="{name: 'HomePage'}">
             <i  class="fa fa-home fa-2x"></i>
             <p>首页</p>
          </router-link>
          <router-link tag="li" :to="{name: 'Classification'}">
             <i class="fa fa-share-alt fa-2x"></i>
            <p>分类</p>
          </router-link>
           <router-link tag="li" :to="{name: 'ShoppingCart'}">
              <i class="fa fa-shopping-cart fa-2x"></i>
            <p>购物车</p>
          </router-link>
          <router-link tag="li" :to="{name: 'Personal'}">
             <i class="fa fa-user fa-2x"></i>
            <p>我</p>
          </router-link>
          
      </ul>
  </div>
</template>
<script>
export default {
  name:"Footer",
  data(){
    return{
      idx:0,

    }
  },
  methods:{

  }
  
}
</script>
<style lang="scss">
    // .greencolor{
    //   color: rgb(40, 224, 40);
    // }
    #footer{
      padding: 15px;
      width: 100%;
      height: 50px;
      border-top: 1px solid lightgray;
    }
    ul{
      width: 100%;
      height: 100%;
      padding:0px;
      margin:0px;
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        width: 25%;
        list-style: none;
        p{
          margin: 0;
        }
      }
      
    }
    ul .active{
        color:rgb(40, 224, 40);
      }

   
</style>



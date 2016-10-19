<script>
    import hello from "./hello.vue"
    export default {
        data () {
        return {
            name:"guowenfh",
            age:"21"
        }
    },
    methods :{
        golist (){
            this.$router.push('list');
        }
    },
    components:{
        hello
    }
    }
</script>

<template>
    <div>
        <h1>姓名1：{{name}}</h1>
        <h2>{{age}}</h2>
        <button @click="golist">$route.router.go查看</button>

        <router-link to="/list">查看列表</router-link>
        <router-link to="/index">回去主页</router-link>
        <router-link to="/hello">嵌套的路由</router-link>
        <router-view></router-view>

    </div>
</template>

<style lang="sass">
    $qwe:pink;
    body{
        background-color: $qwe;
        color:red;
    }
    h1{
        background-color: blue;
        color: red;
    }
    h2{
        background-color:purple ;
    }
    a{
        font-size:34px;
        color:black;
    }
</style>
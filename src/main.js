import Vue from "vue";

import VueRouter from "vue-router";

// 引入vue以及vue-router的。

// 引入组件！
import index from './components/app.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';
//开启debug模式
Vue.use(VueRouter);
Vue.config.debug = true;

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

//正式开始

// 路由器需要一个根组件。

//
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var routes = [{
    path: '/index',
    name: 'index',
    component: index,
    children: [{
        path: '/hello',
        name: 'hello',
        component: hello
    }]
},{
    path: '/list',
    name: 'list',
    component: list,
},{
    path: '/',
    component: index,
}];
const router = new VueRouter({
    mode: 'history',
    routes:routes // （缩写）相当于 routes: routes
})


// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router
}).$mount('#app');


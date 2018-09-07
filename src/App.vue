<template>
  <div id="app">
    <div class="todo-box">
      <header class="title">toDos</header>
      <main class="content">
        <!-- 使用iview组件的时候会导致事件不能触发，我们添加一个.native修饰即可。 -->
        <Input v-model="value" placeholder="添加一些任务..." class="add" v-on:keyup.13.native="sumbit(value)" />
        <div class="choose">
          <span class="remaining">2 项剩余</span>
          <div>
            <span>全部</span>
            <span>已完成</span>
            <span>未完成</span>
          </div>
          <span class="del">清除已完成</span>
        </div>
        <ul class="somethings">
          <li v-for="item in toDos" :key="item.id">
            <Checkbox v-model="item.single"></Checkbox>{{item.thing}}
          </li>

        </ul>
      </main>

    </div>
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            value: "",
            toDos: [
                {
                    single: false,
                    thing: "刘茜茜是一个猪"
                },
                {
                    single: false,
                    thing: "回家洗衣服"
                },
                {
                    single: false,
                    thing: "刷鞋"
                }
            ]
        };
    },
    methods: {
      // 增加代办事项
        sumbit: function(value) {
          if(!value){
            return;
          }
            this.toDos.push({
              single:false,
              thing:value
            });
            // 添加完之后将输入框的值置为空
          this.value=""
        }
    }
};
</script>

<style lang="less" scoped>
html,
body {
    width: 100%;
    height: 100%;
}
ul,
li {
    list-style: none;
}
.todo-box {
    width: 800px;
    min-height: 100px;
    margin: 50px auto;
    background: #f8f8f9;
    .title {
        display: block;
        color: #2db7f5;
        text-align: center;
        font-size: 40px;
    }
    .content {
        padding: 20px;
        .add {
            font-size: 20px;
            margin-bottom: 25px;
        }
        .choose {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            color: #515a6e;
            .remaining {
                margin-right: 50px;
            }
            div {
                span {
                    cursor: pointer;
                    margin-right: 5px;
                }
            }
        }
        .somethings {
            background: #fff;
            padding-left: 15px;
            li {
                line-height: 40px;
                font-size: 14px;
                color: #657180;
                margin-top: 10px;
                border-bottom: 1px solid #e8eaec;
            }
        }
    }
}
</style>


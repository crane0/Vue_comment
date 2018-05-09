<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content1"/>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="submit">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'App',
    props: {
      commentAdd: Function
    },
    data () {
      return {
        name: '',
        content1: ''
      }
    },
    methods: {
      submit () {
        const name = this.name.trim()
        const content1 = this.content1
        console.log(content1)
        const obj = {
          name,
          content1
        }
        //不能为空
        if(name === '' || content1 === ''){
          return
        }
        //输入后，清空输入框
        this.name = ''
        this.content1 = ''

        this.commentAdd(obj)
      }
    },
  }
</script>

<style>

</style>

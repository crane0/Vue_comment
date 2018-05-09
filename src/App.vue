<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <CommentAdd :commentAdd="commentAdd"/>
        <CommentList :comments="comments" :commentRemove="commentRemove"/>
    </div>
  </div>
</template>

<script>
  import CommentAdd from './components/comment_add'
  import CommentList from './components/comment_list'
  import CommentListItem from './components/comment_list_item'

  export default {
    name: 'App',
    data () {
      return {
        comments:[
          {name:'Tom1', content:'这是tom1说的话'},
          {name:'Tom2', content:'这是tom2说的话'},
          {name:'Tom3', content:'这是tom3说的话'}
        ]
      }
    },
    methods: {
      commentAdd (comment)  {
        this.comments.unshift(comment)
      },
      commentRemove (index) {
        this.comments.splice(index, 1)
      }
    },
    components: {
      CommentAdd,
      CommentList,
      CommentListItem
    }
  }
</script>

<style>

</style>

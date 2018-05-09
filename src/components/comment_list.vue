<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="isShow">暂无评论，点击左侧添加评论！</h2>
    <ul class="list-group">
      <CommentListItem v-for="(comment, index) in comments" :key="index"
        :comment="comment" :commentRemove="commentRemove" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import CommentListItem from './comment_list_item'

  export default {
    name: 'HelloWorld',
    props: {
      comments: Array,
      commentRemove: Function
    },
    computed: {
      isShow () {
        return !this.comments.length
      }
    },
    components: {
      CommentListItem
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>

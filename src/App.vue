<template>
  <div id="app">
    <div class="page-container">
      <h2 style="margin:0">缩进演示</h2>
      <div>选择一行或者多行，按 tab 键增加缩进</div>
      <div>选择一行或者多行，按 shift+tab 键减少缩进</div>
      <div style="padding: 10px 0"><b>项目主页:</b><a href="https://github.com/720t/mavon-editor-indent-extends/">https://github.com/720t/mavon-editor-indent-extends</a></div>
      <mark-editor :key="form.id" v-model="form.note" @save="onSave" />
    </div>
  </div>
</template>

<script>
import MarkEditor from '@/components/MarkEditor'
export default {
  name: 'App',
  components: { MarkEditor },
  data() {
    return {
      form: { id: 1, note: '缩进演示缩进演示缩进演示\n缩进演示 缩进演示缩进演示\n 缩进演示缩进演示缩进演示\n  缩进演示缩进演示缩进演示\n             缩进演示缩进演示缩进演示\n缩进演示缩进演示缩进演示\n缩进演示缩进演示缩进演示\n' }
    }
  },

  methods: {
    onSave() {
      console.log('Save event!')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  .v-note-wrapper.markdown-body {
    height: 80%;
  }
}
</style>

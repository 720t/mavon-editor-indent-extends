<template>
  <div id="app">
    <div class="page-container">
      <h2>缩进演示</h2>
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

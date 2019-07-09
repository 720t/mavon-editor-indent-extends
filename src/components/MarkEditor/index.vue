<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'MarkEditor',
  extends: mavonEditor,
  props: {
    tabSize: {
      type: Number,
      default: 2
    },
    defaultOpen: {
      type: String,
      default: 'preview'
    },
    codeStyle: {
      type: String,
      default() {
        return 'atom-one-dark'
      }
    },
    ishljs: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    insertTab() {
      const tab = this.tabSize ? new Array(this.tabSize).fill(' ').join('') : '\t'
      const obj = this.getTextareaDom()
      if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        const spos = obj.selectionStart
        const epos = obj.selectionEnd
        const value = []
        let offset = 0

        value.push(obj.value.slice(0, spos))
        value.push(obj.value.slice(spos, epos))
        value.push(obj.value.slice(epos))

        const temp = value[0].split('\n')

        temp[temp.length - 1] = tab + temp[temp.length - 1]
        value[0] = temp.join('\n')
        if (epos > spos) {
          value[1] = value[1].replace(/\n/g, function(word) {
            offset++
            return word + tab
          })
        }

        obj.value = value.join('')
        obj.selectionStart = spos + tab.length
        obj.selectionEnd = epos + tab.length * (offset + 1)
      } else {
        alert('Error: Browser version is too low')
      }
      this.d_value = obj.value
      obj.focus()
    },
    unInsertTab() {
      const tab = this.tabSize ? new Array(this.tabSize).fill(' ').join('') : '\t'
      const obj = this.getTextareaDom()
      if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        const spos = obj.selectionStart
        const epos = obj.selectionEnd
        const value = []
        let slen = 0
        let elen = 0
        let temp = []
        let offset = 0

        value.push(obj.value.slice(0, spos))
        value.push(obj.value.slice(spos, epos))
        value.push(obj.value.slice(epos))

        slen = value[1].length
        temp = value[0].split('\n')
        temp[temp.length - 1] = temp[temp.length - 1].replace(tab, function(word) {
          offset = word.length
          return ''
        })

        if (offset === 0) {
          temp[temp.length - 1] = temp[temp.length - 1].replace(/^\s/, function(word) {
            offset = word.length
            return ''
          })
        }

        value[0] = temp.join('\n')

        if (epos > spos) {
          const re = new RegExp(`^${tab}`, 'mg')
          value[1] = value[1].replace(re, function(word) {
            elen += word.length
            return ''
          })
          value[1] = value[1].replace(/^(\s{1})[^\s]/mg, function(word) {
            elen += 1
            return word.replace(/^\s/, '')
          })
        }

        obj.value = value.join('')
        obj.selectionStart = spos - offset
        obj.selectionEnd = obj.selectionStart + slen - elen
      } else {
        alert('Error: Browser version is too low')
      }
      this.d_value = obj.value
      obj.focus()
    }
  }
}
</script>

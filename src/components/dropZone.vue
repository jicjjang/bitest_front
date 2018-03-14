<template>
  <article id="dropzone">
    <div class="container"
         :class="[isDragging ? 'drag-over' : '']"
         @dragover="isDragging=true"
         @drop="isDragging=false"
         @dragleave="isDragging=false">
      <img :src="isDragging ? require('../assets/dropzone_inactive.png') : require('../assets/dropzone_active.png')" alt="dropzone">
      <input multiple
             type="file"
             @change="fileUploader($event.target.files)" id="fileUploader"/>
    </div>
  </article>
</template>

<script>
export default {
  name: 'dropZone',
  props: {
    emitter: {
      type: Function
    }
  },
  data () {
    return {
      reader: new FileReader(),
      tradeList: '',
      isDragging: false
    }
  },
  methods: {
    fileUploader (files) {
      if (files.length) {
        this._fileReader(0, files)
        return true
      }
      console.error('파일을 선택해주세요.')
      return false
    },
    _fileReader (index, files) {
      const file = files[index]
      const that = this
      this.reader.onload = e => {
        that.tradeList += e.target.result
        if (index + 1 < files.length) {
          that._fileReader(index + 1, files)
        } else {
          that._fileSender()
        }
      }
      if (file.type === 'text/plain') {
        this.reader.readAsBinaryString(file)
      } else {
        console.error(`${index + 1}번째 파일 형식이 올바르지 않습니다.`)
      }
    },
    _fileSender () {
      this.emitter('file parser', this.tradeList)
      // 이 값을 안넣어주며 같은 파일을 새로고침 전까지 못넣음.
      document.getElementById('fileUploader').value = ''
      this.tradeList = ''
    }
  },
  created () {
    if (this.reader) {
      this.reader.addEventListener('error', (e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  @media only screen and (min-width: 601px) {
    border: 2px dashed black;
  }
  & .drag-over {
    background-color: #2881DD !important;
    border: 2px dashed #2881DD !important;
    color: white;
  }
  & > img {
    width: 100%;
    @media only screen and (min-width: 601px) {
      border-radius: 8px;
    }
    @media only screen and (max-width: 600px) {
      border-radius: 0;
    }
  }
  & > input {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>

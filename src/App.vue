<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <div style="padding-bottom: 50px">
      <img class="container_image" :src="image">
    </div>
    <div style="padding-bottom: 50px">
      <a-button type="primary" @click="handleUploadImage" :loading="loading">上传图片</a-button>
    </div>
    <div align="center" style="padding: 20px">
      <a-table :columns="columns" :data-source="tableData" style="width: 50%">
      </a-table>
    </div>
  <input type="file" id="uploadImage" style="visibility: hidden" accept=".jpg,.png,.jpeg,.gif" @change="handleImageChange"/>
  </div>
</template>

<script>
import { UPLOAD_IMAGE } from '@/api/demo'

export default {
  name: 'App',
  data () {
    return {
      image: require('./default_img.jpg'),
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          align: 'center'
        },
        {
          title: '编号',
          dataIndex: 'number',
          key: 'number',
          align: 'center'
        }
      ],
      tableData: [],
      loading: false
    }
  },
  methods: {
    handleUploadImage () {
      document.getElementById('uploadImage').click()
    },
    GetExtensionFileName (name) {
      return name.split('.')[1]
    },
    handleImageChange (e) {
      console.log('===> 上传图片')
      e.preventDefault()
      const SuffixName = this.GetExtensionFileName(e.target.value)
      if (SuffixName !== 'jpg' && SuffixName !== 'png' && SuffixName !== 'jpeg' && SuffixName !== 'gif') {
        this.$message.error('请上传正确格式的图片')
        return
      }
      const Files = e.target.files[0]
      console.log(e.target.files[0].size)
      if (Files.size > 5 * 1024 * 1024) { // 此处判断上传文件的大小 , 单位为 b 故要乘以两个1024
        this.$message.error('图片最大为5M')
        this.$refs.uploadImg.value = null
      }
      if (typeof (Files) !== 'undefined') {
        this.loading = true
        const param = new FormData()
        param.set('file', Files)
        UPLOAD_IMAGE(param).then((result) => {
          console.log('===> 上传集装箱图片成功： ', result)
          if (result.msg === '检测成功!') {
            console.log('======>>Files', Files)
            // 插入编号数据到表格
            this.tableData = []
            var count = 1
            for (var text of result.number_list) {
              const temp = {}
              temp.key = count
              temp.index = count
              temp.number = text
              this.tableData.push(temp)
              count += 1
            }
            var url = window.URL.createObjectURL(Files)
            this.image = url
          }
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container_image {
  width: 700px;
  height: auto;
}
</style>

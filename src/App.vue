<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <div style="padding-bottom: 50px">
      <img class="container_image" :src="image">
    </div>
    <div style="padding-bottom: 50px">
      <a-button type="primary" @click="handleUploadImage">上传图片</a-button>
    </div>
    <div align="center" style="padding: 20px">
      <a-table :columns="columns" :data-source="data" style="width: 50%">
      </a-table>
    </div>
  <input type="file" id="uploadImage" style="visibility: hidden" accept=".jpg,.png,.jpeg,.gif" @change="handleImageChange"/>
  </div>
</template>

<script>
import { GET_DATA } from '@/api/demo'

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
      data: [
        {
          key: '1',
          index: '1',
          number: 'SEGU 751498 1'
        },
        {
          key: '2',
          index: '2',
          number: 'AIGU 873657 4'
        },
        {
          key: '3',
          index: '3',
          number: '22G1'
        }
      ]
    }
  },
  methods: {
    handleUploadImage () {
      document.getElementById('uploadImage').click()
    },
    handleImageChange (e) {
      GET_DATA().then((res) => {
        console.log('===> 获取到结果: ', res)
      }).catch((e) => {
        this.$message.error(e)
      })
      console.log('===> 上传图片')
      // e.preventDefault()
      // const SuffixName = this.GetExtensionFileName(e.target.value)
      // if (SuffixName !== 'jpg' && SuffixName !== 'png' && SuffixName !== 'jpeg' && SuffixName !== 'gif') {
      //   this.$message.error('请上传正确格式的图片')
      //   return
      // }
      // const Files = e.target.files[0]
      // console.log(e.target.files[0].size)
      // if (Files.size > 5 * 1024 * 1024) { // 此处判断上传文件的大小 , 单位为 b 故要乘以两个1024
      //   this.$message.error('图片最大为5M')
      //   this.$refs.uploadImg.value = null
      // }
      // if (typeof (Files) !== 'undefined') {
      //   console.log('======>>Files', Files)
      //   if (window.FileReader) { // 看支持不支持FileReader
      //     const reader = new FileReader()
      //     reader.readAsDataURL(Files) // 这里是最关键的一步，转换就在这里 （参数必须是blob对象）
      //     reader.onloadend = function () {
      //       this.image = this.result
      //     }
      //   }
      // }
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

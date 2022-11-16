<template>
  <div class="board-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
    <div class="board-contents">
      <input type="text" v-model="title" class="w3-input w3-border" placeholder="제목을 입력해주세요">
      <input type="text" v-model="author" class="w3-input w3-border" placeholder="작성자를 입력해주세요">
    </div>
    <div class="board-contents">
      <textarea id="" cols="30" rows="10" v-model="content" class="w3-input w3-border" style="resize: none;">
      </textarea>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
  data() { // 변수 생성
    return {
      requestBody: this.$route.query,
      seq: this.$route.query.seq,

      title: '',
      author: '',
      content: '',
      creatAt: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      if (this.seq !== undefined) {
        this.$axios.get(this.$serverUrl + '/board/' + this.seq, {
          params: this.requestBody
        }).then((res) => {
          this.title = res.data.title
          this.author = res.data.author
          this.content = res.data.content
          this.creatAt = res.data.createAt
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList() {
      delete this.requestBody.seq
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(seq) {
      this.requestBody.seq = seq
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/board'
      this.form = {
        "seq": this.seq,
        "title": this.title,
        "author": this.author,
        "content": this.content
      }
      if (this.seq === undefined) {
        //insert
        this.$axios.post(apiUrl, this.form)
            .then((res) => {
              alert('글이 저장되었습니다.')
              this.fnView(res.data.seq)
            }).catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n 잠시후 다시 시도해주세요.')
              }
        })
      }else {
        //update
        this.$axios.patch(apiUrl, this.form)
            .then((res) => {
              alert('글이 저장되었습니다.')
              this.fnView(res.data.seq)
            }).catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n 잠시후 다시 시도해주세요.')
              }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <div>
      <h2>로그인 해주세요</h2>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="아이디를 입력하세요." v-model="user_id"><br>
          </p>
          <p>
            <input class="w3-input" name="password" placeholder="패스워드를 입력하세요." v-model="user_password" type="password">
          </p>
          <p>
            <button class="w3-button w3-green w3-round" type="submit">로그인</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      user_id: '',
      user_password: ''
    }
  },
  methods: {
    ...mapActions(['login']),   //vuex/actions 에 있는 login 함수

    async fnLogin() { // async 함수로 변경
      if (this.user_id === '') {
        alert('아이디를 입력해주세요.')
        return
      }
      if (this.user_password === '') {
        alert('패스워드를 입력해주세요.')
      }

      // 로그인 API 호출
      try {
        let loginResult = await this.login({user_id: this.user_id, user_pw: this.user_password})
        if (loginResult) {
          alert('로그인결과' + loginResult)
        }
      } catch (err) {
        if(err.message.indexOf('Network Error') > -1) {
          alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.')
        } else {
          alert('로그인 정보를 확인할 수 없습니다.')
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState'
    })
  }
}
</script>

<style>
#loginForm {
    width: 500px;
    margin: auto;
  }
</style>
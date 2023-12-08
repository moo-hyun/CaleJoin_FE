<script setup>
import {reactive} from "vue";
import axios from "axios";
import router from "@/router";

const UserRegister = reactive({
  data: {
    uid: "",
    pass: "",
    checkPass: "",
    name: "",
    nick: "",
    hp: "",
    age: "",
    email: ""
  },
});

const register = () => {
  axios
    .post("http://localhost:8080/user/register", UserRegister.data)
    .then((response) => {
        console.log("로그인 완료시 리스폰스: " + UserRegister.data.name + " 님 회원 가입 되었습니다.");
        alert(UserRegister.data.name+ " 님 회원 가입 되었습니다.");
        router.push("/login");
    })
    .catch((err) => {
      console.log("실패:  " + err);
    });
};

</script>

<template>
  <html class="mainDiv">
  <head>
    <title>회원가입</title>
    <link rel="stylesheet" href="02-signup.css" />
  </head>
  <body>
  <form @:submit.prevent="register">
  <div class="container">
    <div class="member-container">
      <div class="header">
        <div>회원 가입을 위해</div>
        <div>정보를 입력해주세요</div>
      </div>
      <div class="user-info">
        <div>* 아이디</div>
        <input type="text" v-model="UserRegister.data.uid"/>
        <div>* 비밀번호</div>
        <input type="text" v-model="UserRegister.data.pass"/>
        <div>* 비밀번호 확인</div>
        <input type="text" v-model="UserRegister.data.checkPass"/>
        <div>* 이름</div>
        <input type="text" v-model="UserRegister.data.name"/>
        <div>* 닉네임</div>
        <input type="text" v-model="UserRegister.data.nick"/>
        <div id="email">* 이메일</div>
        <input type="text" v-model="UserRegister.data.email"/>
        <div>* 전화번호</div>
        <input type="text" v-model="UserRegister.data.hp"/>
        <div>* 나이</div>
        <input type="text" v-model="UserRegister.data.age"/>
      </div>
      <div class="agree-check">
        <input type="checkbox" /> 이용약관 개인정보 수집 및 이용, 마케팅 활용
        선택에 모두 동의합니다.
      </div>
      <div class="btn">
        <button type="submit">가입하기</button>
      </div>
    </div>
  </div>
  </form>
  </body>
  </html>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 670px;
  height: 1200px;
  margin-top: 60px;
  margin-bottom: 60px;
  background: #ffffff;
  border: 1px solid #aacdff;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  border-radius: 20px;
}

.member-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  height: 818px;
  margin-top: 72px;
  margin-bottom: 70px;
}

input{
  color: #797979;
  border-bottom: 1px solid #cfcfcf;
  font-weight: 700;
  font-size: 32px;
}

.header {
  width: 466px;
  height: 94px;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;
  color: #0068ff;
}

.user-info div {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 466px;
  margin-top: 21px;
}

/*.user-info #email {
  border-bottom: 1px solid #0068ff;
}*/

.gender {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 23.94px;
  margin-top: 50px;
}

.gender input {
  width: 20px;
  height: 19.95px;
  background: #ebebeb;
  border: 1px solid #d2d2d2;
}

.gender label {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.agree-check {
  width: 454px;
  height: 21.06px;
  margin-top: 52.05px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
}

.btn {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 470px;
  height: 106px;
  border-top: 1px solid #e6e6e6;
}

button {
  margin-top: 30px;
  width: 470px;
  height: 75px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #0068ff;
  background: #ffffff;
  border: 1px solid #0068ff;
  border-radius: 10px;
}
</style>

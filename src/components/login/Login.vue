<template>
  <v-main>
    <div id="loginBg" :style="{backgroundImage : `url(${bgImg})`}">

    </div>
    <div id="loginPg">
      <div id="loginForm">
        <div class="loginTitle">
          <h4>LOGIN</h4>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script setup>


function getImageUrl() {
  const i= Math.floor(Math.random()*7);
  console.log(i);
  return new URL('/images/login_bg'+i+'.webp', import.meta.url).href;
}
const bgImg = getImageUrl();
</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
}

ul,li,ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #111;
}
input,
textarea {
  outline: none;
}

@media (max-width: 768px) {

  #loginForm{
    width: 100vw;
    height:100vh;
  }
  .loginTitle{
    width:100vw;
  }


}

@media (min-width: 768px) {

  #loginPg{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  #loginForm{
    border-radius: 75px;
    //border: 2px solid #fff;
    box-sizing: content-box;
    width: 450px;
    height: 450px;
    box-shadow: 0px 5px 5px  rgba(0,0,0,0.2);
  }

  .loginTitle{
    border-radius: 75px 75px 0 0;
    width: 450px;
  }
}

#loginPg{
  height: 100vh;
  background:rgba(0,0,0,0.4);
  position:relative;

}
#loginBg{
  width: 100%;
  height: 100vh;
  content: "";
  overflow: hidden;
  margin:0;
  background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  position:absolute;
  top:0;
  left:0;
}
#loginForm{
  background-color:rgba(255, 255, 255, 0.4);
}
.loginTitle{

  background-color: rgba(255, 255, 255, 0.2);
  height: 120px;
  color:white;
}
.loginTitle > h4{
  font-family: 'Moirai One';
  font-size: 63px;
  letter-spacing: 6.3px;
  text-align: center;
  line-height: 120px;
}

li#kkLoginBtn a {
  display:block;
  height:56px;
  padding-left:35px;
  background:#ffe812 url("../../assets/ic-kakao-02.png") no-repeat 120px 21px;
  background-size:18px 17px;
  color:#262626;
  box-sizing:border-box;
  font-size:16px;
  line-height:56px;
  text-align:center;
}

li#kkLoginBtn a img {
  display:inline-block;
  margin-right:3px;
  margin-left:-20px;
  margin-bottom:2px;
}

li#kkLoginBtn .kkLogin {
  display:block;
  height:56px;
  padding-left:35px;
  background:#ffe812 url("../../assets/ic-kakao-02.png") no-repeat 120px 19px;
  background-size:18px 17px;
  color:#262626;
  box-sizing:border-box;
  font-size:16px;
  line-height:56px;
  text-align:center;
}

.w100p {
  width: 100% !important;
}

</style>


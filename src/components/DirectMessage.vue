<template>
  <div style="height: 100vh; background: grey; display: flex;">

    <!-- 채팅방 -->
    <aside style="width: 25%; padding: 20px; background-color: #303030;">
      <div style="color: white; font-size: 40px; margin-left: 11px;">Rooms
      </div>
      <v-row style="border: 1px solid white; margin-top: 15px"></v-row>
      <v-row align="center" justify="center">
<!--        &lt;!&ndash; 채팅방 리스트 &ndash;&gt;
        <v-list>
          &lt;!&ndash; Vuetify 리스트 아이템 반복 &ndash;&gt;
          <v-list-item v-for="(room, index) in chatRooms" :key="index">
            &lt;!&ndash; 채팅방 이름 표시 &ndash;&gt;
            <v-list-item-content>
              <v-list-item-title>{{ room.room_Name }}</v-list-item-title>
            </v-list-item-content>

            &lt;!&ndash; "입장하기" 버튼 &ndash;&gt;
            <v-list-item-action>
              <v-btn @click="enterRoom(room.roomId)" color="primary">
                입장하기
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>-->
        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            title="Room 1"
            subtitle="2023.11.28 PM8:00"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            style="background-color: #424242; color: white; margin-top: 20px;"
          >
            <v-card-text>언제 완성 돼??</v-card-text>
          </v-card>
          <v-card
            class="mx-auto"
            max-width="344"
            title="Room 2"
            subtitle="2023.06.08 AM10:30"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            style="background-color: #424242; color: white; margin-top: 20px;"
          >
            <v-card-text>오늘 완성 돼??</v-card-text>
          </v-card>
          <v-card
            class="mx-auto"
            max-width="344"
            title="Room 3"
            subtitle="2023.10.17 PM7:45"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            style="background-color: #424242; color: white; margin-top: 20px;"
          >
            <v-card-text>진짜 완성 돼??</v-card-text>
          </v-card>
          <v-card
            class="mx-auto"
            max-width="344"
            title="Room 4"
            subtitle="2023.02.08 AM12:12"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            style="background-color: #424242; color: white; margin-top: 20px;"
          >
            <v-card-text>대체 언제 완성 돼??</v-card-text>
          </v-card>
          <v-card
            class="mx-auto"
            max-width="344"
            title="Room 5"
            subtitle="2023.12.16 PM3:00"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            style="background-color: #424242; color: white; margin-top: 20px;"
          >
            <v-card-text>최종 최종??</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </aside>




    <section style="flex: 1; padding: 20px;">
      <v-toolbar style="background-color: transparent !important; box-shadow: none !important; margin-bottom: 20px;">
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>

        <v-toolbar-title>Room 1</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

        <v-container id="chat-messages" style="height: 750px;" >
          <v-row v-for="message in messages">
            <v-col
              cols="12"
              sm="3"
              class="left"
              v-if="sender != message.sender"
            >
              <v-card style="box-shadow: none"
                label="prepend-icon"
                rows="1">
                <v-card-title>상대방 : {{message.sender}}</v-card-title>
                <v-card-text>{{message.message}}</v-card-text>
              </v-card>
            </v-col>
            <v-col
              offset-lg="8"
              class="speech-bubble"
              v-else
            >
              <v-card style="box-shadow: none"
                      label="prepend-icon"
                      rows="1">
                <v-card-title>나 : {{message.sender}}</v-card-title>
                <v-card-text>{{message.message}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="11"
          >
            <div style="display: flex; align-items: center;">
            <v-textarea
              append-inner-icon="mdi-comment"
              class="mx-2"
              rows="1"
              v-model="inputMessage"
            >

            </v-textarea>
            <v-btn @click="btnSendMessage" style="float: right; margin-bottom: 20px;">전송</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </section>

  </div>
</template>

<style>

.left{
  flex-direction: row-reverse;
  position: relative;
  left: 0;
  width: 30px;
  padding: 10px;
  margin-top: 7px;
  font-size: 13px;
  background: #ffffff;
  border-radius: .4em;
  float: left;
  clear: both;
}

.left:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  font-size: 1.5rem;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #ffffff;
  border-left: 0;
  margin-top: -20px;
  margin-left: -20px;
}

.speech-bubble {
  position: relative;
  background: #ffffff;
  border-radius: .4em;
  float: right;
  clear: both;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #ffffff;
  border-right: 0;
  margin-top: -20px;
  margin-right: -20px;
}

div::-webkit-scrollbar {
  display: block;
}

aside {
  float: left;
  width: 20%;
  height: 100%;
  background: #59D0FB;
}

section {
  float: left;
  width: 80%;
  height: 100%;
  background: #2185d0;
}

</style>

<script setup>
import { onMounted, ref } from "vue";

const inputMessage = ref(null);
const messages = ref([]);
const roomId = ref("123");
const room_name = ref("chat1");
const sender = ref(null);
const receiver = ref("user2"); // 추가: 수신자(receiver) 변수
let stompClient = null;



const connect = () => {
  const socket = new SockJS("http://localhost:8080/ws");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, function (frame) {
    console.log("Connected: " + frame);

    stompClient.subscribe("/topic/messages", function (message) {
      //showMessage(JSON.parse(message.body).message);
      console.log("sender : " + JSON.parse(message.body).sender);
      console.log("message : " + JSON.parse(message.body).message);

      messages.value.push(JSON.parse(message.body));
    });

    stompClient.send(
      "/app/chat",
      {},
      JSON.stringify({
        type: "ENTER",
        roomId: roomId.value,
        room_name: room_name.value,
        sender: sender.value,
        receiver: receiver.value, // 추가: 수신자 정보 전달
      })
    );
  });
};

onMounted(() => {

  connect();

  if(!sender.value){
    // 크롬, 엣지 개발도구 - 응용프로그램 - 로컬스토리지에 수동으로 키-값 셋팅
    sender.value = localStorage.getItem('uid');
  }

});

const btnSendMessage = () => {
  // 사용자의 입력이 빈 문자열이면 메시지를 전송하지 않음
  if (inputMessage.value.trim() !== "") {
    stompClient.send(
      "/app/chat",
      {},
      JSON.stringify({
        type: "TALK",
        roomId: roomId.value,
        room_name: room_name.value,
        sender: sender.value,
        receiver: receiver.value, // 추가: 수신자 정보 전달
        message: inputMessage.value,
      })
    );
    inputMessage.value = ""; // 메시지 전송 후 입력창 초기화
  }
};



</script>

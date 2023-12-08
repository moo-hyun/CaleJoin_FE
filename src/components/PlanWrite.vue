<script setup>

import {onMounted, ref, watch, reactive, computed, watchEffect} from "vue";
import router from "@/router";
import axios from "axios";

const showDatePicker = ref(false);
const showDatePicker2 = ref(false);

const categoryModalOpen = ref(false);



const isChecked = ref(false);
const modalOpen = ref(false);




const repeatData = ref({
  repeatCycle: "",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
  insertData: {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  },
  repeatMonth: 1,
  End: false,
});


const returnHome = () => {
  router.push("/");
};
const plan = reactive({
  data: {
    uid: "user",
    StartTime: '',
    endTime: '',
    isPublic: '',
  },
});

const Sdate = reactive({
  startDate: '',
  startTime: '',

});

const Edate = reactive({
  endDate: '',
  endTime: '',
});

const combinedStartDateTime = computed(() => {
  return `${Sdate.startDate} ${Sdate.startTime}`;
});

const combinedEndDateTime = computed(() => {
  return `${Edate.endDate} ${Edate.endTime}`;
});

watchEffect(() => {
  // 변경된 값이 있을 때만 업데이트
  if (combinedStartDateTime.value && combinedEndDateTime.value) {
    plan.data.StartTime = combinedStartDateTime.value;
    plan.data.endTime = combinedEndDateTime.value;
  }
});
const categoryData = reactive({
  data: {

    cateName: "",
  },
})
const uid="user";
const createCategory = () => {
  console.log(categoryData);
  axios
    .post(`http://localhost:8080/InsertCategory/${uid}`, categoryData.data)
    .then((response) => {
        console.log(response);
        alert("카테고리 등록완료");
        window.location.reload();
      })
    .catch((err) => {
        console.log(err);
      });
}
const register = () => {
  console.log(plan);
  axios
    .post("http://localhost:8080/PlanWrite", plan.data) // plan.data를 전송
    .then((response) => {
      console.log(response);
      alert("일정 등록완료!");

      router.push("/");

    })
    .catch((err) => {
      console.log(err);
    });
};
/*const handleSubmit = () => {
  console.log("폼 데이터:", repeatData.value);
  console.log(user);
  axios
    .post("http://localhost:8080/Ch10/user1", user)
    .then((response) => {
      console.log(response);
      alert("등록!");
    })
    .catch((err) => {
      console.log(err);
    });

};*/
/*const handleWeekdayCheckboxChange = (day) => {
  // 체크박스가 변경될 때 호출되는 메서드
  // 선택된 요일을 1로 설정, 선택 해제되면 0으로 설정
  repeatData.value["insertData"][day] = !repeatData.value[day] ? 0 : 1;
};*/


const category = () => {
  categoryModalOpen.value = true;
}
const closeCategoryModal = () => {
  categoryModalOpen.value = false;
}

const categories = ref([]);

const CategoryList = async () => {
  try{
    const response = await axios.get(`http://localhost:8080/PlanWrite/${uid}`);
    console.log(response.data);
    return categories.value = response.data;


  }catch (error) {
    console.log(error);
  }
}
/*const createCategory = () => {
  console.log(user);
  axios
    .post("http://localhost:8080/Ch10/user1", category)
    .then((response) => {
      console.log(response);
      alert("등록!");
    })
    .catch((err) => {
      console.log(err);
    });

};*/

watch(isChecked, (value) => {
  if (value) {
    openModal(); // 체크박스가 체크되면 모달 열기
  } else {

    closeModal(); // 체크박스가 해제되면 모달 닫기
  }
});

// 모달 열기
const openModal = () => {
  modalOpen.value = true;
};

// 모달 닫기
const closeModal = () => {
  modalOpen.value = false;
  isChecked.value = false;
};



/*const cancel = () => {
  modalOpen.value = false;
  isChecked.value = false;
};


const daySelect = () => {
  showDatePicker.value = true;
};*/

const BallOn = () => {
  showDatePicker2.value = true;
};
const BallOff = ()=> {
  showDatePicker2.value = false;
};
/*const dayNone = () => {
  showDatePicker.value = false;
};*/


/*//친구리스트 정의
const selectedFriend = ref('');
const addedFriends = ref([]);
const friends = ref([]);
// 비동기로 친구 목록을 불러오는 함수
const fetchFriends = async () => {
  try {
    const response = await axios.get('api/friends'); // 실제 엔드포인트에 맞게 수정
    friends.value = response.data;
  } catch (error) {
    console.error('친구 목록을 불러오는 중 오류 발생:', error);
  }
};

// 컴포넌트가 마운트될 때 친구 목록을 불러옵니다.
onMounted(fetchFriends);

// 선택된 값이 변경될 때의 이벤트 핸들러
const addSelectedFriend = () => {
  const selectedFriendObject = friends.value.find(friend => friend.nick === selectedFriend.value);
  if (selectedFriendObject && !addedFriends.value.some(friend => friend.nick === selectedFriendObject.nick)) {
    addedFriends.value.push(selectedFriendObject);
  }
};*/

onMounted(CategoryList);
</script>

<template>
  <v-app>
    <v-container style="background: #fffdfa">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <p style="margin-top: 25%; font-size: 25px;  font-weight: bold; letter-spacing: -2px;"  >일정 입력하기</p>
          <p class="smallTitle">제목</p>
          <form @:submit.prevent="register">
<!--          <input v-model="plan.data.uid" type="text">-->
          <input v-model="plan.data.title" type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px; " placeholder="일정 제목 입력...">
          <p class="smallTitle" >카테고리</p>
            <select v-model="plan.data.cateNo" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey; width: 25%; border-radius: 5px; padding: 8px;">
              <option v-for="category in categories" :key="category.id" :value="category.cateNo">{{category.cateName}}</option>
            </select>
            <v-btn @click="category" style="margin-left: 15px" class="plusFri" density="compact" icon="mdi-plus"></v-btn>
            <v-dialog v-model="categoryModalOpen" max-width="300px">
              <v-card>
                <form @submit.prevent="createCategory">
                  <v-card-title>카테고리 생성</v-card-title>
                  <v-card-text>
                    <input v-model="categoryData.data.uid" type="hidden">
                    <input v-model="categoryData.data.cateName" type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px; " placeholder="카테고리 이름 입력...">
                  </v-card-text>
                  <v-card-actions>
                    <input style=" background: #2185d0; border-radius: 8px; padding: 10px;   color: white;  float:left;" type="submit" value="등록">
                    <v-btn @click="closeCategoryModal"  color="black" style="margin-left: 170px; background: lightgray; border-radius: 5px;" >취소</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
          <p class="smallTitle">일시</p>
          <div>
            <input v-model="Sdate.startDate" class="inputStyle" type="date" name="start"/>
            <input v-model="Sdate.startTime" class="inputStyle" type="time" name="start"/>
            <span style="font-weight: bold; font-size: 20px">~</span>
            <input v-model="Edate.endDate" class="inputLeftStyle" type="date" name="end"/>
            <input v-model="Edate.endTime" class="inputLeftStyle" type="time" name="end"/>
            <v-checkbox style="float: right; margin-top: 10px" v-model="isChecked" label="반복"></v-checkbox>
            <v-dialog v-model="modalOpen" max-width="350px">
              <v-card>
                <form @:submit.prevent="handleSubmit">
                  <v-card-title style="border-bottom: solid 1px grey;  font-weight: bold; " >반복일정 설정</v-card-title>
                  <v-card-text>
                    <div>
                      <span style="font-size: 13px; font-weight: bold">반복주기</span>
                      <select  style="background: white; color:grey;  margin-left: 5%; margin-top: 1.3%; border: solid 1px darkgrey ; width: 60%; border-radius: 5px; padding: 8px;" v-model="repeatData.repeatCycle">
                        <option value="W">매주</option>
                        <option value="M">매달</option>
                        <option value="Y">매년</option>
                      </select>
                    </div>
                    <div>
                      <span style="font-size: 13px; font-weight: bold;">반복요일</span>
                      <input type="checkbox" style="margin-left: 15px; margin-top: 15px" id="monday" v-model="repeatData.monday" @change="handleWeekdayCheckboxChange('monday')" />
                      <label for="monday">월</label>
                      <input type="checkbox" style="margin-left: 15px;" id="tuesday" v-model="repeatData.tuesday" @change="handleWeekdayCheckboxChange('tuesday')"  />
                      <label for="tuesday">화</label>
                      <input type="checkbox" style="margin-left: 15px;" id="wednesday" v-model="repeatData.wednesday" @change="handleWeekdayCheckboxChange('wednesday')" />
                      <label for="wednesday">수</label>
                      <input type="checkbox" style="margin-left: 15px;" id="thursday" v-model="repeatData.thursday" @change="handleWeekdayCheckboxChange('thursday')" />
                      <label for="thursday">목</label>
                      <input type="checkbox" style="margin-left: 15px;" id="friday" v-model="repeatData.friday" @change="handleWeekdayCheckboxChange('friday')" />
                      <label for="friday">금</label>
                      <input type="checkbox" style="margin-left: 69px;" id="saturday" v-model="repeatData.saturday" @change="handleWeekdayCheckboxChange('saturday')" />
                      <label for="saturday">토</label>
                      <input type="checkbox" style="margin-left: 15px;" id="sunday" v-model="repeatData.sunday" @change="handleWeekdayCheckboxChange('sunday')" />
                      <label for="sunday">일</label>
                    </div>
                    <div>
                      <span style="font-size: 13px; font-weight: bold">반복날짜</span>
                      <input  type="number" id="day" style="background: white; color:grey;  margin-left: 5%; margin-top: 1.3%; border: solid 1px darkgrey ; width: 60%; border-radius: 5px; padding: 5px;" v-model="repeatData.repeatMonth" />
                      <label for="day" style="margin-left: 5px">일</label>
                    </div>
                    <div style="margin-top: 10px">
                      <span style="font-size: 13px; font-weight: bold">종료일자</span>
                      <input @click="daySelect" type="radio" id="daySelect" name="group1" style="margin-left: 15px" />
                      <label for="daySelect">날짜지정</label>
                      <input @click="dayNone"  type="radio" id="none" name="group1" style="margin-left: 15px" value="null" v-model="repeatData.End" />
                      <label for="none">없음</label>
                      <input v-if="showDatePicker" style="margin-top: 1.5%; margin-left: 70px; background: white; border: solid 1px darkgrey; border-radius: 5px; padding: 8px;" type="date" name="repeatStart" v-model="repeatData.End" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="closeModal">취소하기</v-btn>
                    <input @click="closeModal" type="submit" style="margin-left: 190px" value="추가하기">
                  </v-card-actions>
                  </form>
                </v-card>
              </v-dialog>
<!--              <p class="smallTitle">참석자</p>
              <div>
                <select v-model="selectedFriend" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 25%; border-radius: 5px; padding: 8px;">
                  <option v-for="friend in friends" :key="friend.nick" :value="friend.nick">{{ friend.nick }}</option>
                </select>
                <span v-for="addedFriend in addedFriends" :key="addedFriend.nick">{{ addedFriend.nick }}</span>
                    <v-btn @click="addSelectedFriend" style="margin-left: 15px" class="plusFri" density="compact" icon="mdi-plus"></v-btn>
              </div>-->
              <div>
                <p class="smallTitle">메모</p>
                <textarea v-model="plan.data.memo" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px;"></textarea>
              </div>
              <div style="margin-top: 2%">
                <span class="smallTitleMargin">공개여부</span>
                <input value="0" v-model="plan.data.isPublic" type="radio" id="All" name="group2"/>
                <label for="All" style="margin-right: 4%;">공개</label>
                <input value="1" v-model="plan.data.isPublic" type="radio" id="FrAll" name="group2"/>
                <label for="FrAll" style="margin-right: 4%;" >친구 전체공개</label>
                <input value="2" v-model="plan.data.isPublic" type="radio" id="onlyDay" name="group2"/>
                <label for="onlyDay">비공개</label>
              </div>
              <div style="margin-top: 2%">
                <span class="smallTitleMargin">알람여부</span>
                <input value="0" v-model="plan.data.isNotification" type="radio" @click="BallOn" id="BallOn" name="group3"/>
                <label for="BallOn" style="margin-right: 4%;">알림</label>
                <input value="1" v-model="plan.data.isNotification" type="radio" id="BallOff" name="group3"/>
                <label for="BallOff" @click="BallOff" style="margin-right: 4%;" >알림X</label>

              </div>
            <input v-if="showDatePicker2" style="margin-top: 1.5%; margin-left: 70px; background: white; border: solid 1px darkgrey; border-radius: 5px; padding: 8px;" type="date" name="BallDateEnd" v-model="Null" />
            </div>
            <v-btn @click="returnHome" style="background: lightgray; border-radius: 8px; padding: 10px; width: 13%; font-weight: bold; height: 42px; margin-top:5%; margin-left: 3%; float:right;" >돌아가기</v-btn>
            <input style=" background: #2185d0; border-radius: 8px; padding: 10px; width: 18%;  color: white; margin-top: 5%; float:right;" type="submit" value="일정 등록">
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.smallTitle {
  margin-top: 1.5%;
  font-size: 15px;
  color: grey;
  font-weight: bold;

}
.smallTitleMargin {
  margin-right: 5%;
  font-size: 15px;
  color: grey;
  font-weight: bold;

}
.inputStyle {
  margin-right: 3%;
  margin-top: 1.5%;
  background: white;
  border: solid 1px darkgrey;
  border-radius: 5px;
  padding: 8px;
}
.inputLeftStyle {
  margin-left:  3%;
  margin-top: 1.5%;
  background: white;
  border: solid 1px darkgrey;
  border-radius: 5px;
  padding: 8px;
}
</style>

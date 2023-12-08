<script setup>
import { onMounted, reactive, ref, watchEffect} from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useEventBus } from '@/store/modules/eventBus';




const search = ref('');
const calendarEvents = ref([]);
const currentEvents = ref([]);
const currentMonth = ref('');

const calendarOptions = ref({
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: "dayGridMonth",
  selectable: true,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  select: handleDateSelect,
  dayMaxEvents: true,
  selectMirror: true,
  editable: true,
  viewDidMount(info) {
    // FullCalendar의 API를 통해 현재 보이는 달의 제목을 가져옴
    const calendarApi = info.view.calendar;
    let currentMonthTitle;
    currentMonthTitle = calendarApi.view.title;





    // 가져온 달의 제목을 ref에 저장
    currentMonth.value = currentMonthTitle;

    // 콘솔에 현재 달 출력
    const eventBus = useEventBus();
    eventBus.updateCurrentMonth(currentMonth.value);
  },

});




const uid = "user";
const plans = reactive( []);

const fetchEvents = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/${uid}`);
    plans.value = response.data.plans;

    plans.value.forEach(event => {


      calendarEvents.value.push({
        id: event.calNo,
        title: event.title,
        start: event.startTime,
        end: event.endTime
      });



    });


  } catch (error) {
    console.error('일정을 불러오는 동안 오류 발생:', error);
  }
};


// 포맷팅 함수를 사용하여 "yyyy-MM-dd HH:mm" 형식으로 변환

function handleDateSelect(selectInfo) {
  let title = prompt("일정 제목을 입력해주세요!!");
  if (title === null) {
    // 사용자가 취소 버튼을 눌렀을 때의 처리
    return;
  }
  let uid = 'user';

  let startTime = prompt("시작시간을 입력해주세요 (HH:MM)");
  if (startTime === null) {
    return;
  }
  let endTime = prompt("종료시간을 입력해주세요 (HH:MM)");
  if (endTime === null) {

    return;
  }
  let cateNo = prompt("카테고리 번호를 입력해주세요!!");
  if (cateNo === null) {
    return;
  }
  let memo = prompt("메모를 입력해주세요!!");
  if (memo === null) {
    return;
  }
  let isPublic = prompt("일정 공개:0 비공개:2 입력해주세요!");
  if (isPublic === null) {
    return;
  }

  /*const startDate = new Date(selectInfo.startStr);
  function formatDateWithTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()+2).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }*/


  function formatDateEndTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() - 1).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  if (title && cateNo && memo) {
    // selectInfo.startStr을 Date 객체로 변환


    /*// 시작 날짜 포맷팅
    const formattedStartDate = formatDateWithTime(startDate);*/

// 종료 날짜를 필요에 따라 계산 또는 동일하게 포맷팅
    const endDate = new Date(selectInfo.endStr);
    const formattedEndDate = formatDateEndTime(endDate);

    const newEvent = {
      uid,
      title,
      cateNo,
      memo,
      isPublic,
      StartTime: selectInfo.startStr + ' ' + startTime,
      endTime: formattedEndDate + ' ' + endTime,     // 포맷팅된 종료 날짜
    };
    console.log(newEvent);

    // 서버로 데이터 전송
    axios.post('http://localhost:8080/EventPlanWrite', newEvent)
      .then(response => {
        console.log(response);
        alert('일정이 추가되었습니다.');
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
        alert('일정 추가에 실패했습니다. 형식에 맞게 입력해주세요.');
      });
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`일정을 삭제하시겠습니까? '${clickInfo.event.title}'`)) {
    axios
    .delete(`http://localhost:8080/PlanWrite/${clickInfo.event.id}`)
      .then((response) => {
      console.log(response);
      alert("삭제되었습니다.");
    })
      .catch((err) => {
        console.log(err);
      });
    clickInfo.event.remove();
    window.location.reload();
  }
}

function handleEvents(events) {
  currentEvents.value = events;
}

const searchItem = () => {
  console.log("Searched for:", this.search);
};


onMounted(() => {
  watchEffect(() => {
    calendarOptions.value.events = calendarEvents.value;
    console.log('Current Month123:', currentMonth.value);
  });
  fetchEvents();
  console.log(calendarEvents);
});

</script>
<template>

  <v-text-field
    v-model="search"
    outlined
    clearable
    rounded
    variant="solo"
    theme="light"
    prepend-inner-icon="mdi-magnify"
    placeholder="Search...."
    class="no-padding"
    style="float: right; clear: both; width: 30%; margin-top: 10px"
    @input="searchItem"
  ></v-text-field>
  <FullCalendar :options="calendarOptions"/>

</template>
<style>
.fc-direction-ltr {
  width: 100%;
}

.fc-col-header-cell-cushion {
  color: blue;
}
.fc .fc-toolbar-title {
  color: grey;
  font-size: 23px;
  margin: 0px;
}

.fc .fc-button-primary {
  background-color: royalblue;
}
.fc .fc-button {
  border: none;
}
.fc .fc-button-primary:disabled {
  background-color: royalblue;
}
.fc-view-harness {
  margin-top: 50px;
  margin-bottom: 50px;
}
.fc-toolbar-chunk {
}
.v-text-field input.v-field__input {
  --v-field-input-padding-top: 1px;
  --v-field-input-padding-bottom: none;
}
</style>


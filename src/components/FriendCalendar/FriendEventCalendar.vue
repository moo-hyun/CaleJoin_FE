<script setup>
import {onMounted, reactive, ref, watch, watchEffect} from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useEventBus } from '@/store/modules/eventBus';
import {useRouter} from "vue-router";



const router = useRouter();
const currentRoute = ref(router.currentRoute.value);
const search = ref('');
const calendarEvents = ref([]);
const currentEvents = ref([]);
const currentMonth = ref('');
const props = defineProps(['calendarId']);
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





const plans = reactive( []);

const fetchEvents = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/Calendar/${props.calendarId}`);
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

// eslint-disable-next-line no-unused-vars
function handleDateSelect(selectInfo) {
 alert("다른사람의 일정에 추가할 수 없습니다.")
}

function handleEventClick() {
    alert("다른사람의 일정에 삭제할 수 없습니다.")
}

function handleEvents(events) {
  currentEvents.value = events;
}

const searchItem = () => {
  console.log("Searched for:", this.search);
};

watch(() => {
    if (currentRoute.value.fullPath !== router.currentRoute.value.fullPath) {
        router.go(0);
    }
});

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


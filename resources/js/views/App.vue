<template>
  <div>
    <Header />

    <div v-if="!transition" class="calendar">
      <v-date-picker
        is-expanded
        v-model="range"
        is-range
        color="green"
        show-weeknumbers
        :attributes="attributes"
        :disabled-dates="disabledDates"
      />
      <div class="text-center mt-4 buttondiv">
        <Button
          :disabled="range.end === null"
          :click="bookButton"
          :pill="true"
          :block="true"
          >Boka</Button
        >
      </div>
    </div>
    <div v-else>
      <form>
        <Input
          :value="bookedStart + ' ➜ ' + bookedEnd"
          :readonly="readonly"
          :formControl="plaintext"
        >
          Datum
        </Input>
        <Input v-model="newDate.name">Namn</Input>
      </form>
      <ButtonFlex>
        <Button :buttonFlex="'button-flex go-back'" :click="bookButton"
          >Ångra</Button
        >
        <Button
          :buttonFlex="'button-flex'"
          :click="bookDate"
          :disabled="newDate.name === ''"
          v-b-modal.modal-1
          >Boka</Button
        >
      </ButtonFlex>
    </div>
    <Modal>Stugan är nu bokad!</Modal>
  </div>
</template>

<script>
const default_layout = "default";

import Button from "../components/Button.vue";
import ButtonFlex from "../components/ButtonFlex.vue";
import Header from "../components/Header.vue";
import Input from "../components/Input.vue";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Button,
    ButtonFlex,
    Header,
    Input,
    Modal,
  },
  data: () => ({
    attributes: [
      {
        key: "today",
        highlight: {
          color: "green",
          fillMode: "light",
        },
        dates: new Date(),
        popover: true,
      },
    ],
    check: false,
    disabledDates: [],
    dates: [],
    hasError: true,
    newDate: { start: new Date(), end: new Date(), name: "" },
    plaintext: "form-control-plaintext",
    range: {
      start: new Date(),
      end: null,
    },
    readonly: true,
    transition: false,
  }),
  methods: {
    bookButton() {
      this.transition = !this.transition;
    },
    bookDate() {
      let newDate = this.newDate;
      let _this = this;
      newDate.start = this.range.start;
      newDate.end = this.range.end;
      if (
        newDate["start"] === "" ||
        newDate["end"] === "" ||
        newDate["name"] === ""
      ) {
        this.hasError = false;
      } else {
        this.hasError = true;
        axios
          .post("/api/bookDate", newDate)
          .then(function (response) {
            _this.newDate = {
              start: newDate.start,
              end: newDate.end,
              name: "",
            };
            _this.transition = !_this.transition;
            _this.check = !_this.check;
            _this.getBookings();
          })
          .catch((error) => {
            console.log("Insert: " + error);
          });
      }
    },
    getBookings() {
      let _this = this;
      axios
        .get("/api/getBookings")
        .then(function (response) {
          _this.dates = response.data;
          _this.dates.forEach((date) => {
            _this.disabledDates.push({
              start: date.start,
              end: date.end,
            });
          });
          console.log(_this.disabledDates);
        })
        .catch((error) => {
          console.log("Get All: " + error);
        });
    },
  },
  computed: {
    bookedStart() {
      let start = this.range.start;
      return (
        start.getDate() +
        " " +
        start.toLocaleString("sv-SV", { month: "long" }) +
        " " +
        start.getFullYear()
      );
    },
    bookedEnd() {
      let end = this.range.end;
      return (
        end.getDate() +
        " " +
        end.toLocaleString("sv-SV", { month: "long" }) +
        " " +
        end.getFullYear()
      );
    },
    // bookedDates() {
    //   // let start = this.range.start;
    //   let end = this.range.end;
    //   return (
    //     this.start() +
    //     " ➜ " +
    //     end.getDate() +
    //     " " +
    //     end.toLocaleString("sv-SV", { month: "long" }) +
    //     " " +
    //     end.getFullYear()
    //   );
    // },
  },
  mounted() {
    this.getBookings();
  },
};
</script>

<style lang="scss">
.container {
  text-align: center;
}
.calendar {
  margin: 0 auto;
  width: 75%;
}
form {
  margin: 0 auto;
  width: 40%;
}
.buttondiv {
  margin: 0 auto;
  width: 60%;
}
.vc-day-content.is-disabled[data-v-005dafc8] {
  color: #fff !important;
  background-color: rgb(206, 72, 72);
  &:hover {
    color: #fff;
    background-color: rgb(206, 72, 72);
  }
  pointer-events: none;
}
</style>
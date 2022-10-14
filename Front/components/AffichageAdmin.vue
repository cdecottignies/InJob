<template>
  <div>
    <div>
      <b-button v-on:click="GetAllAdvert()" variant="primary"
        >Advertissements</b-button
      >
      <b-button v-on:click="GetAllUser()" variant="secondary">Users</b-button>
    </div>
    <br />
    <div>
      <b-button v-on:click="AddOneAdvert(selected)" variant="primary"
        >Add</b-button
      >
      <b-button v-b-modal.modal-1>Add/Update</b-button>
      <b-modal id="modal-1" title="change Data" hide-footer>
               <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="title" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="selected[0].title"
              placeholder="enter title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="descShort"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="selected[0].descShort"
              placeholder="Enter descShort:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="descLong" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="selected[0].descLong"
              placeholder="Enter descLong:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="wages" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="selected[0].wages"
              placeholder="Enter wages:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="place" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="selected[0].place"
              placeholder="Enter place:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="degree" label-for="input-7">
            <b-form-input
              id="input-7"
              v-model="selected[0].degree"
              placeholder="Enter degree:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="workingTime"
            label-for="input-8"
          >
            <b-form-input
              id="input-8"
              v-model="selected[0].workingTime"
              placeholder="Enter workingTime:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-9"
            label="workingLocation"
            label-for="input-9"
          >
            <b-form-input
              id="input-9"
              v-model="selected[0].workingLocation"
              placeholder="Enter workingLocation:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-10"
            label="contractType"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              v-model="selected[0].contractType"
              placeholder="Enter contractType:"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>
      <!-- <b-button v-on:click="UpdateAdvert(selected.id)" variant="warning"
        >Update</b-button
      >
      <b-button v-on:click="deleteOneAdvert(selected.id)" variant="danger"
        >Delete</b-button
      > -->
    </div>

    <b-table
      :items="list"
      :select-mode="selectMode"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    ></b-table>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
import { getCookie } from "tiny-cookie";
const api = new Api();

export default {
  name: "AffichageAdmin",
  data() {
    return {
      show: true,

      list: null,
      tableactivate: 1,
      selectMode: "single",
      selected: [""],
      token: getCookie("access_token"),
    };
  },
  mounted() {
    // get all advertisement by default
    this.GetAllAdvert();
  },
  methods: {
    onRowSelected(items) {
      if (items != 0) {
        this.selected = items;
      } else {
        this.selected = [""];
      }
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        const advertlist = result.map((result) => ({
          id: result.id,
          title: result.title,
          descShort: result.descShort,
          descLong: result.descLong,
          wages: result.wages,
          place: result.place,
          degree: result.degree,
          workingTime: result.workingTime,
          workingLocation: result.workingLocation,
          contractType: result.contractType,
          contractStart: result.contractStart,
          createdAt: result.createdAt,
        }));
        this.list = advertlist;
      });
    },
    GetAllUser() {
      //var token = getCookie("access_token");
      api.GetAllUser(this.token).then((result) => {
        const userlist = result.map((result) => ({
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          password: result.password,
          phone: result.phone,
          isAdmin: result.isAdmin,
          createdAt: result.createdAt,
        }));
        this.list = userlist;
      });
      this.$forceUpdate();
    },
    deleteOneAdvert(id) {
      api.deleteOneAdvert(id).then((result) => {
        alert(result);
      });
      this.GetAllAdvert();
    },
    AddOneAdvert(key) {
      api.AddOneAdvert(key).then((result) => {});
      //this.$forceUpdate();

      this.GetAllAdvert();
    },
    UpdateAdvert(id, res) {
      //res.token = getCookie("access_token");
      this.selected[0].token = this.token;
      //console.log(this.advertlist[0]);
      api.UpdateOneAdvert(id, res).then((result) => {
        //alert(result.data);
      });
    },

    onSubmit(event) {
      event.preventDefault();
      //if (this.selected.length != 0) {
      this.UpdateAdvert(this.selected[0].id, this.selected[0]);
      // }
      //alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
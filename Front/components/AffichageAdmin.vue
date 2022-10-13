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
      <b-button v-on:click="UpdateAdvert(selected.id)" variant="warning"
        >Update</b-button
      >
      <b-button v-on:click="deleteOneAdvert(selected.id)" variant="danger"
        >Delete</b-button
      >
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
      list: null,
      tableactivate: 1,
      advertlist: null,
      selectMode: "single",
      selected: [],
      userlist: null,
      token: getCookie("access_token"),
    };
  },
  mounted() {
    // get all advertisement by default
    this.GetAllAdvert();
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
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
      api.AddOneAdvert(key).then((result) => {
        alert(result);
      });
      this.GetAllAdvert();
    },
    UpdateAdvert(key) {
      api.UpdateOneAdvert(key).then((result) => {
        alert(result);
      });
      this.GetAllAdvert();
    },
  },
};
</script>
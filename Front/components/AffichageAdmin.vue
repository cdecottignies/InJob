<template>
  <div>
    <div>
      <b-button v-on:click="GetAllAdvert()" variant="primary"
        >Advertissements</b-button
      >
      <b-button v-on:click="GetAllUser()" variant="secondary">Users</b-button>
      <b-button v-on:click="GetAllApplicants()" variant="success"
        >Applicants</b-button
      >
    </div>
    <br />
    <div>
      <b-button v-b-modal.modal-1 variant="warning">Add/Update</b-button>
      <b-button v-on:click="Delete(selected)" variant="danger">Delete</b-button>
      <b-modal id="modal-1" title="change Data" hide-footer>
        <div v-if="this.tableactivate == 1">
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

            <b-form-group
              id="input-group-4"
              label="descLong"
              label-for="input-4"
            >
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
          </b-form>
        </div>
        <div v-else-if="this.tableactivate == 2">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-2"
              label="firstName"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="selected[0].firstName"
                placeholder="enter firstName"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="lastName"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="selected[0].lastName"
                placeholder="Enter lastName:"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="email" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="selected[0].email"
                placeholder="Enter email:"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="password"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="selected[0].password"
                placeholder="Enter password:"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="phone" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="selected[0].phone"
                placeholder="Enter phone:"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-7"
              label="isAdmin"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                v-model="selected[0].isAdmin"
                placeholder="Enter isAdmin:"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-8"
              label="companieId"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                v-model="selected[0].companieId"
                placeholder="Enter companieId:"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-modal>
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
      userlist: null,
      selected: [
        {
          title: "",
          descShort: "",
          descLong: "",
          wages: "",
          place: "",
          degree: "",
          workingTime: "",
          workingLocation: "",
          contractType: "",
        },
      ],
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
      } else if (this.tableactivate == 1) {
        this.selected = [
          {
            title: "",
            descShort: "",
            descLong: "",
            wages: "",
            place: "",
            degree: "",
            workingTime: "",
            workingLocation: "",
            contractType: "",
          },
        ];
      } else if (this.tableactivate == 2) {
        this.selected = [
          {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            isAdmin: "",
            companieId: "",
          },
        ];
      } else {
        this.selected = [
          {
            id: "",
            advertisementId: "",
            userId: "",
          },
        ];
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
      this.tableactivate = 1;
      this.selected = [
        {
          title: "",
          descShort: "",
          descLong: "",
          wages: "",
          place: "",
          degree: "",
          workingTime: "",
          workingLocation: "",
          contractType: "",
        },
      ];
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
      this.tableactivate = 2;
      this.selected = [
        {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          isAdmin: "",
          companieId: "",
        },
      ];
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
          companieId: result.companieId,
        }));
        this.list = userlist;
      });
      this.$forceUpdate();
    },

    GetAllApplicants() {
      this.tableactivate = 3;
      this.selected = [
        {
          id: "",
          advertisementId: "",
          userId: "",
        },
      ];
      api.GetAllApplicants(this.token).then((result) => {
        const userlist = result.map((result) => ({
          id: result.id,
          advertisementId: result.advertisementId,
          userId: result.userId,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }));
        this.list = userlist;
      });
      this.$forceUpdate();
    },
    deleteOneAdvert(id) {
      api.DeleteOneAdvert(id, this.token).then((result) => {
        alert(result.data);
      });
    },
    AddOneAdvert(key) {
      this.selected[0].token = this.token;
      this.selected[0].companieId = 10;

      api.AddOneAdvert(key).then((result) => {});
    },

    UpdateAdvert(id, res) {
      this.selected[0].token = this.token;
      //this.selected[0].companieId = 10;

      //console.log(this.advertlist[0]);
      api.UpdateOneAdvert(id, res).then((result) => {
        //alert(result.data);
      });
    },

    AddOneUser(key) {
      this.selected[0].token = this.token;

      api.AddOneUser(key).then((result) => {});
      //this.$forceUpdate();
    },
    UpdateUser(id, res) {
      this.selected[0].token = this.token;
      this.selected[0].companieId = 10;

      //console.log(this.advertlist[0]);
      api.UpdateOneUser(id, res).then((result) => {
        //alert(result.data);
      });
    },
    deleteOneUser(id, token) {
      api.deleteOneAdvert(id, token).then((result) => {
        alert(result);
      });
      this.GetAllAdvert();
    },

    Delete() {
      if (this.tableactivate == 1) {
        this.deleteOneAdvert(this.selected.id);
      }
    },
    onSubmit(event) {
      event.preventDefault();
      if (this.tableactivate == 1) {
        if (this.selected[0].id != null) {
          console.log("UpdateAdvert");
          this.UpdateAdvert(this.selected[0].id, this.selected[0]);
        } else {
          console.log("AddOneAdvert");
          this.AddOneAdvert(this.selected[0]);
        }
      } else if (this.tableactivate == 2) {
        if (this.selected[0].id != null) {
          console.log("UpdateUser");
          this.UpdateUser(this.selected[0].id, this.selected[0]);
        } else {
          console.log("AddOneUser");
          this.AddOneUser(this.selected[0]);
        }
      } else {
        if (this.selected[0].id != null) {
          console.log("UpdateApplicant");
          this.UpdateApplicant(this.selected[0].id, this.selected[0]);
        } else {
          console.log("AddApplicant");
          this.AddApplicant(this.selected[0]);
        }
      }
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
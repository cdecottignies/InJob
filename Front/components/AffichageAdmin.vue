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
      <b-button v-on:click="GetAllCompanies()" variant="success"
        >Compagnies</b-button
      >
    </div>
    <br />
    <div>
      <b-button v-b-modal.modal-1 variant="warning">Add/Update</b-button>
      <b-button v-on:click="Delete()" variant="danger">Delete</b-button>
      <b-modal id="modal-1" title="change Data" hide-footer>
        <div v-if="this.tableactivate == 1">
          <b-form @submit="onSubmit">
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
                type="object"
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

            <b-form-group
              id="input-group-11"
              label="contractStart"
              label-for="input-11"
            >
              <b-form-input
                id="input-11"
                v-model="selected[0].contractStart"
                placeholder="Enter contractStart:"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
        <div v-else-if="this.tableactivate == 2">
          <b-form @submit="onSubmit">
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
              label="password with 8cara, 1[A-Z]and 1[0-9]"
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
        <div v-else-if="this.tableactivate == 3">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="advertisementId"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="selected[0].advertisementId"
                placeholder="enter advertisementId"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="userId" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="selected[0].userId"
                placeholder="Enter userId:"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
        <div v-else-if="this.tableactivate == 4">
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="selected[0].name"
                placeholder="enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="siret" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="selected[0].siret"
                placeholder="enter siret"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="numEmploye"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="selected[0].numEmploye"
                placeholder="enter numEmploye"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="desc" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="selected[0].desc"
                placeholder="enter desc"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" label="link" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="selected[0].link"
                placeholder="enter link"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="logo" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="selected[0].logo"
                placeholder="enter logo"
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
      list: null,
      tableactivate: 1,
      token: getCookie("access_token"),
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
          contractStart: "",
        },
      ],
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
            contractStart: "",
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
      } else if (this.tableactivate == 3) {
        this.selected = [
          {
            //id: "",
            advertisementId: "",
            userId: "",
          },
        ];
      } else {
        this.selected = [
          {
            name: "",
            siret: "",
            numEmploye: "",
            desc: "",
            link: "",
            logo: "",
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
          contractStart: "",
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
    },

    GetAllApplicants() {
      this.tableactivate = 3;
      this.selected = [
        {
          //id: "",
          advertisementId: "",
          userId: "",
        },
      ];
      api.GetAllApplicants(this.token).then((result) => {
        const applicantlist = result.map((result) => ({
          id: result.id,
          advertisementId: result.advertisementId,
          userId: result.userId,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        }));
        this.list = applicantlist;
      });
    },
    GetAllCompanies() {
      this.tableactivate = 4;
      this.selected = [
        {
          name: "",
          siret: "",
          numEmploye: "",
          desc: "",
          link: "",
          logo: "",
        },
      ];
      api.GetAllCompanies().then((result) => {
        const compagnieslist = result.map((result) => ({
          id: result.id,
          name: result.name,
          siret: result.siret,
          numEmploye: result.numEmploye,
          desc: result.desc,
          link: result.link,
          logo: result.logo,
          createdAt: result.createdAt,
        }));
        this.list = compagnieslist;
      });
    },

    addOneAdvert(key) {
      var str = this.selected[0].place;
      var split = str.split(",");
      console.log("split");
      console.log(split);
      var place = {
        city: split[1],
        street: split[2],
      };
      this.selected[0].place = place;
      api.AddOneAdvert(key).then((result) => {});
      this.selected[0].place = "";
    },
    updateOneAdvert(id, res) {
      var str = this.selected[0].place;
      if (typeof str != "object") {
        var split = str.split('"');
        console.log(split);
        var place = {
          city: split[3],
          street: split[7],
        };
        this.selected[0].place = place;
      }
      api.UpdateOneAdvert(id, res).then((result) => {});
      this.selected[0].place = "";
    },
    deleteOneAdvert(id) {
      api.DeleteOneAdvert(id, this.token).then((result) => {});
      alert("deleted Advert " + id);
    },

    addOneUser(key) {
      api.AddOneUser(key).then((result) => {});
    },
    updateOneUser(id, res) {
      api.UpdateOneUser(id, res).then((result) => {});
    },
    deleteOneUser(id) {
      api.DeleteOneUser(id, this.token).then((result) => {});
      alert("deleted User " + id);
    },

    addOneApplicant(key) {
      api.AddOneApplicant(key).then((result) => {});
    },
    updateOneApplicant(id, res) {
      api.UpdateOneApplicant(id, res).then((result) => {});
    },
    deleteOneApplicant(id) {
      api.DeleteOneApplicant(id, this.token).then((result) => {
        alert("deleted Applicant " + id);
      });
    },

    addOneCompanie(key) {
      api.AddOneCompanie(key).then((result) => {});
    },
    updateOneCompanie(id, res) {
      api.UpdateOneCompanie(id, res).then((result) => {});
    },
    deleteOneCompanie(id) {
      api.DeleteOneCompanie(id, this.token).then((result) => {
        alert("deleted companie " + id);
      });
    },
    onSubmit(event) {
      event.preventDefault();
      this.selected[0].token = this.token;
      switch (this.tableactivate) {
        case 1:
          if (this.selected[0].id != null) {
            console.log("UpdateAdvert");
            this.updateOneAdvert(this.selected[0].id, this.selected[0]);
          } else {
            console.log("AddOneAdvert");
            this.addOneAdvert(this.selected[0]);
          }
          break;
        case 2:
          if (this.selected[0].id != null) {
            console.log("UpdateUser");
            this.updateOneUser(this.selected[0].id, this.selected[0]);
          } else {
            console.log("AddOneUser");
            this.addOneUser(this.selected[0]);
          }
          break;
        case 3:
          if (this.selected[0].id != null) {
            console.log("UpdateApplicant");
            this.updateOneApplicant(this.selected[0].id, this.selected[0]);
          } else {
            console.log("AddApplicant");
            this.addOneApplicant(this.selected[0]);
          }
          break;
        case 4:
          if (this.selected[0].id != null) {
            console.log("UpdateCompanies");
            this.updateOneCompanie(this.selected[0].id, this.selected[0]);
          } else {
            console.log("AddCompanies");
            this.addOneCompanie(this.selected[0]);
          }
          break;

        default:
          break;
      }
    },
    Delete() {
      this.selected[0].token = this.token;
      switch (this.tableactivate) {
        case 1:
          this.deleteOneAdvert(this.selected[0].id);
          break;
        case 2:
          this.deleteOneUser(this.selected[0].id);
          break;
        case 3:
          this.deleteOneApplicant(this.selected[0].id);
          break;
        case 4:
          this.deleteOneCompanie(this.selected[0].id);
          break;
        default:
          alert("error delete tableactivate > 4");
          break;
      }
    },
  },
};
</script>
<template>
  <div>
    <div class="d-flex my-3 mx-auto justify-content-center bg-secondary">
      <div class="mx-10">
        <b-nav-form class="mx-auto">
          <b-form-input class="mx-10" placeholder="Search"></b-form-input>

          <b-button variant="warning" size="sm">RECHERCHE</b-button>
        </b-nav-form>
      </div>
      <div>
        <b-dropdown class="mx-1" variant="warning" right text="Experiences">
          <b-dropdown-item>0</b-dropdown-item>
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2+</b-dropdown-item> </b-dropdown
        ><b-dropdown class="mx-1" variant="warning" right text="Poste">
          <b-dropdown-item>0</b-dropdown-item>
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2+</b-dropdown-item> </b-dropdown
        ><b-dropdown class="mx-1" variant="warning" right text="Date">
          <b-dropdown-item>0</b-dropdown-item>
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2+</b-dropdown-item> </b-dropdown
        ><b-dropdown class="mx-1" variant="warning" right text="Formation">
          <b-dropdown-item>0</b-dropdown-item>
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2+</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ res }}</p>
      <div>
        <b-button v-b-toggle="`collapse-${this.objet.title}`"
          >learn more</b-button
        >
        <b-collapse :id="`collapse-${this.objet.title}`" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
const api = new Api();

// var advert = {
//   id: null,
//   title: "test",
//   descshort: "salut",
//   descslong: "",
//   salary: Float32Array,
//   place: {
//     city: "",
//     street: "",
//   },
//   workingTime: null,
//   contract: "",
//   published: "",
// };
var sample = new Array();

export default {
  name: "AffichageAdvert",
  data() {
    return {
      res: "error",
      objet: sample,
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        //for key
        console.log(result[0].title);
        sample.push(result[0]);
        this.res = result[0].title;
      });
    },
    GetAdvert(id) {
      api.GetAdvert(id).then((result) => {
        this.objet = result;
      });
    },
    // async GetAll() {
    //   api.GetAllIssue().then((result) => {
    //     this.IssueWeekly = result.issues;
    //   });
    // },
  },
};
</script>
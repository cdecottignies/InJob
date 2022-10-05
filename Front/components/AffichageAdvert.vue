<template>
  <div>
    <div class="d-flex my-3 mx-auto justify-content-center bg-secondary">
      <div class="mx-10">
        <b-nav-form @submit.stop.prevent="GetAdvert(search)" class="mx-auto">
          <b-form-input
            class="mx-10"
            v-model="search"
            placeholder="Search"
          ></b-form-input>

          <b-button type="submit" variant="warning" size="sm"
            >RECHERCHE</b-button
          >
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
    <div v-for="value in advertlist" :key="value.id">
      <div class="card AffichageAdvert mx-5">
        <h2 class="card-text text-center">{{ value.title }}</h2>
        <h4>
          {{ "contract: " + value.contract + " published: " + value.published }}
        </h4>
        <p>{{ value.descshort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${value.id}`">learn more</b-button>
          <b-collapse :id="`collapse-${value.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + value.salary }}<br />{{
                "working Time: " + value.workingTime
              }}<br />{{ value.desclong }}
            </p>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
const api = new Api();

export default {
  name: "AffichageAdvert",
  data() {
    return {
      search: null,
      advertlist: null,
      // {
      //   title: "error",
      //   descshort: "",
      //   desclong: "",
      //   salary: Float32Array,
      //   place: {
      //     city: "",
      //     street: "",
      //   },
      //   workingTime: "",
      //   contract: "",
      //   published: "",
      // },
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        const advertlist = result.map((r) => ({
          id: r.id,
          title: r.title,
          descshort: r.descshort,
          desclong: r.desclong,
          salary: r.salary,
          place: r.place,
          workingTime: r.workingTime,
          contract: r.contract,
          published: r.published,
        }));
        //console.log(advertlist[0]);
        this.advertlist = advertlist;
        //this.res = advertlist[1].title;
        //this.id = advertlist[0].id;
      });
    },
    GetAdvert(key) {
      api.GetAdvert(key).then((result) => {
        const advert = {
          id: result.id,
          title: result.title,
          descshort: result.descshort,
          desclong: result.desclong,
          salary: result.salary,
          place: result.place,
          workingTime: result.workingTime,
          contract: result.contract,
          published: result.published,
        };
        console.log(advert);
      });
    },
    GetAdvertMap(key) {
      api.GetAdvert(key).then((result) => {
        const advert = result.map((r) => ({
          id: r.id,
          title: r.title,
          descshort: r.descshort,
          desclong: r.desclong,
          salary: r.salary,
          place: r.place,
          workingTime: r.workingTime,
          contract: r.contract,
          published: r.published,
        }));
        console.log(advert);
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
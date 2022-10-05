<template>
  <div key:= "index">
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
    <div v-if="searchbool">
      <div class="card AffichageAdvert mx-5">
        <h2 class="card-text text-center">{{ advert.title }}</h2>
        <h4>
          {{
            "contract: " +
            advert.contract +
            " published: " +
            advert.published
          }}
        </h4>
        <p>{{ advert.descshort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${advert.id}`"
            >learn more</b-button
          >
          <b-collapse :id="`collapse-${advert.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + advert.salary }}<br />{{
                "working Time: " + advert.workingTime
              }}<br />{{ advert.desclong }}
            </p>
          </b-collapse>
        </div>
      </div>
    </div>
    <div v-else>
      <affichage-advert></affichage-advert>
    </div>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
import AffichageAdvert from "./AffichageAdvert.vue";
const api = new Api();

var advert = {
  id: "",
  title: "",
  descshort: "",
  desclong: "",
  salary: "",
  place: "",
  workingTime: "",
  contract: "",
  published: "",
};
export default {
  components: { AffichageAdvert },
  name: "SearchAdvert",
  data() {
    return {
      search: "",
      searchbool: false,
      advert,
    };
  },
  mounted() {},
  methods: {
    GetAdvert(key) {
      if (key != "" && key != null) {
        api.GetAdvert(key).then((result) => {
          this.advert = {
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
            this.searchbool = true;
        });
      } else {
        alert("error invalid input");
      }
    },
    GetAdvertMap(key) {
      api.GetAdvert(key).then((result) => {
        advert = result.map((r) => ({
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
        searchbool = true;
        console.log(advert);
      });
    },
  },
};
</script>
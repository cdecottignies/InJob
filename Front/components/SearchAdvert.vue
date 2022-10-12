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
            advert.contractType +
            " place: " +
            JSON.stringify(advert.place)
          }}
        </h4>
        <p>{{ advert.descShort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${advert.id}`"
            >learn more</b-button
          >
          <b-button v-b-modal="`modal-${advert.id}`">Apply</b-button>

            <b-modal :id="`modal-${advert.id}`" hide-footer title="Send to the advertisement">
              <p class="my-4">Apply</p>
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
                <b-button type="reset" variant="danger">Reset</b-button>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-modal>
          <b-collapse :id="`collapse-${advert.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + advert.wages }}<br />{{
                "working Time: " + advert.workingTime
              }}<br />{{ advert.descLong }}
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
import { getCookie } from "tiny-cookie";

const api = new Api();

// var advert = {
//   id: "",
//   title: "",
//   descShort: "",
//   descLong: "",
//   wages: "",
//   place: "",
//   degree: "",
//   workingTime: "",
//   workingLocation: "",
//   contractType: "",
//   contractStart: "",
//   createdAt: "",
//   published: "",
// };
export default {
  components: { AffichageAdvert },
  name: "SearchAdvert",
  data() {
    return {
      search: "",
      searchbool: false,
      advert: null,
      tokenbool: getCookie("access_token"),
      idapply: "",
      form: {
        email: "",
        name: "",
      },
    };
  },
  mounted() {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.idapply);
      if (getCookie("access_token") != null) {
        this.userResponse(this.idapply);
      } else {
        anonymousResponse(this.idapply);
      }
      //alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    GetAdvert(key) {
      if (key != "" && key != null) {
        api.GetAdvert(key).then((result) => {
          this.advert = {
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
            published: result.published,
          };
          this.searchbool = true;
        });
      } else if (key == "") {
        this.searchbool = false;
      } else {
        alert("error no input");
      }
    },
  },
  anonymousResponse(id) {
    this.form.id = id;
    api.anonymousResponseAdvert(this.form).then((result) => {
      console.log(result);
    });
  },
  userResponse(id) {
    var res = {
      advertId: id,
      token: getCookie("access_token"),
    };
    console.log(res);
    api.userResponseAdvert(res).then((result) => {
      console.log(result);
    });
  },
};
</script>
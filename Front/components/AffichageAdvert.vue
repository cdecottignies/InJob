<template>
  <div>
    <div v-for="value in advertlist" :key="value.id">
      <div class="card AffichageAdvert mx-5">
        <h2 class="card-text text-center">{{ value.title }}</h2>
        <h4>
          {{
            "contract: " +
            value.contractType +
            " place: " +
            JSON.stringify(value.place)
          }}
        </h4>
        <p>{{ value.descShort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${value.id}`">learn more</b-button>
          <div>
            <b-button
              v-on:click="idapply = value.id"
              v-b-modal="`modal-${value.id}`"
              >Apply</b-button
            >

            <b-modal
              :id="`modal-${value.id}`"
              title="Send to the advertisement"
              hide-footer
            >
              <p class="my-4">Apply</p>
              <b-form @submit="onSubmit" @reset="onReset">
                <div v-if="tokenbool == null">
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
                    label="Your Firstname:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.firstName"
                      placeholder="Enter firstname"
                      required
                    ></b-form-input></b-form-group
                  ><b-form-group
                    id="input-group-3"
                    label="Your Lastname:"
                    label-for="input-3"
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.lastName"
                      placeholder="Enter lastname"
                      required
                    ></b-form-input> </b-form-group
                  ><b-form-group
                    id="input-group-4"
                    label="Your Phone:"
                    label-for="input-4"
                  >
                    <b-form-input
                      id="input-4"
                      v-model="form.phone"
                      placeholder="Enter phone"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <b-button type="submit" variant="primary">Submit</b-button>
                <div v-if="tokenbool == null">
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div>
              </b-form>
            </b-modal>
          </div>
          <b-collapse :id="`collapse-${value.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + value.wages }}<br />{{
                "working Time: " + value.workingTime
              }}<br />{{ value.descLong }}
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
import { getCookie } from "tiny-cookie";

export default {
  name: "AffichageAdvert",
  data() {
    return {
      advertlist: null,
      idapply: "",
      tokenbool: getCookie("access_token"),
      form: {
        email: "",
        firstName: "",
        lastName: "",
        advertId: "",
      },
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    // get all advert
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        this.advertlist = result.map((result) => ({
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
      });
    },
    // check if access_token exist and use route connected or anonymous
    onSubmit(event) {
      event.preventDefault();
      console.log(this.idapply);
      if (getCookie("access_token") != null) {
        this.userResponse(this.idapply);
      } else {
        this.anonymousResponse(this.idapply);
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
    // anonymous method with form to apply one advert
    anonymousResponse(id) {
      this.form.advertId = id;
      api.anonymousResponseAdvert(this.form).then((result) => {
        console.log(result);
      });
    },
    // connected method to apply one advert
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
  },
};
</script>
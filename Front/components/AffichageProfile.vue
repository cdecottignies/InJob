<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Password" label-for="input-1">
        <b-form-input
          id="input-1"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="firstName" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstName"
          placeholder="Enter firstName"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="lastName" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.lastName"
          placeholder="Enter lastName"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
const api = new Api();
import { getCookie } from "tiny-cookie";

export default {
  name: "AffichageProfile",
  data() {
    return {
      tableactivate: 1,
      advertlist: null,
      token: getCookie("access_token"),
      form: {
        password: "",
        firstName: "",
        lastName: "",
      },
      show: true,
    };
  },
  mounted() {},
  methods: {
    updateUser(key) {
      api.UpdateUser(key).then((result) => {
        console.log(result);
      });
    },
    onSubmit(event) {
      event.preventDefault();
      if (getCookie("access_token") != null) {
        this.form.token = getCookie("access_token");
        this.updateUser(this.form);
      }
      //alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.password = "";
      this.form.firstName = "";
      this.form.lastName = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<template>
  <div class="mx-5">
    <div v-if="!boolregistre">
      <H2 class="text-center">Connexion</H2>
    </div>
    <div v-else>
      <H2 class="text-center">Registration</H2>
    </div>
    <div v-if="isconnected == null">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <div v-if="boolregistre">
          <b-form-group
            id="input-group-3"
            label="firstname"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.firstname"
              placeholder="Enter firsname"
              required
            ></b-form-input
          ></b-form-group>
          <b-form-group id="input-group-4" label="lastname" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.lastname"
              placeholder="Enter lastname"
              required
            ></b-form-input> </b-form-group
          ><b-form-group id="input-group-5" label="phone" label-for="input-5">
            <b-form-input
              id="input-5"
              type="tel"
              v-model="form.phone"
              placeholder="Enter phone"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button :pressed.sync="boolregistre" variant="warning"
          >Register</b-button
        >
      </b-form>
    </div>
    <div v-else>
      <b-button v-on:click="deconnexion()" variant="warning">Deconnexion</b-button>
    </div>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
const api = new Api();
import { setCookie, removeCookie, getCookie } from "tiny-cookie";
export default {
  name: "Connexion",
  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        phone: "",
      },
      isconnected: getCookie("access_token"),
      boolregistre: false,
      show: true,
    };
  },
  mounted() {},
  methods: {
    onReset(event) {
      event.preventDefault();

      this.form.email = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.form.password = null;
      this.form.phone = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit(event) {
      event.preventDefault();
      if (!this.boolregistre) {
        this.signin();
      } else {
        this.register();
      }
    },
    signin() {
      var objet = {
        email: this.form.email,
        password: this.form.password,
      };
      api.signin(objet).then((result) => {
        console.log(result);
        setCookie("access_token", result.access_token, {
          expires: result.expires,
        });
      });
    },
    register() {
      console.log(this.form);
      api.Register(this.form).then((result) => {
        console.log("register");
      });
    },

    deconnexion() {
     removeCookie("access_token");
    },
  },
};
</script>
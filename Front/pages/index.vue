<template>
  <div>
    <header class="sticky-top">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand
            v-on:click="(connex = false), (admin = false)"
            href="#"
            >InJob</b-navbar-brand
          >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                ><b-button v-on:click="(connex = false), (admin = true)"
                  >Admin</b-button
                ></b-nav-item
              >
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-button v-on:click="(connex = true), (admin = false)" size="sm"
                >connexion</b-button
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>

    <div v-if="connex">
      <connexion></connexion>
    </div>
    <div v-else-if="admin">
      <affichage-admin></affichage-admin>
    </div>
    <div v-else>
      <SearchAdvert></SearchAdvert>
    </div>
  </div>
</template>


<script>
import AffichageAdvert from "@/components/AffichageAdvert.vue";
import SearchAdvert from "@/components/SearchAdvert.vue";
import Connexion from "../components/connexion.vue";
import AffichageAdmin from "../components/AffichageAdmin.vue";

let connex = false;
let admin = false;
export default {
  name: "index",
  components: {
    AffichageAdvert,
    SearchAdvert,
    Connexion,
    AffichageAdmin,
  },
  data() {
    return {
      connex,
      admin,
    };
  },
};
</script>
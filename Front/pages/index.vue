<template>
  <div>
    <header class="sticky-top">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand
            v-on:click="(connex = false), (profile = false), (admin = false)"
            href="#"
            >InJob</b-navbar-brand
          >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <b-button
                  v-if="cookie"
                  v-on:click="
                    (connex = false), (profile = false), (admin = true)
                  "
                  >Admin</b-button
                >
              </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item
                ><b-button
                  v-if="cookie"
                  v-on:click="
                    ((connex = false), (profile = true)), (admin = false)
                  "
                  >Profile</b-button
                ></b-nav-item
              >
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-button
                v-on:click="(connex = true), (admin = false), (profile = false)"
                size="sm"
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
    <div v-else-if="profile">
      <affichage-profile></affichage-profile>
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
import AffichageProfile from "../components/AffichageProfile.vue";
let connex = false;
let admin = false;
let profile = false;
export default {
  name: "index",
  components: {
    AffichageAdvert,
    SearchAdvert,
    Connexion,
    AffichageAdmin,
    AffichageProfile,
  },
  data() {
    return {
      cookie: true,
      connex,
      admin,
      profile,
    };
  },
};
</script>
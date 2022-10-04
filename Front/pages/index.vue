<template>
  <div>
    <header class="sticky-top">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">InJob</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>Link</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-button size="sm">connexion</b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    
    <Affichage-Advert> </Affichage-Advert>

  </div>
</template>

  
<script>
import AffichageAdvert from "@/components/AffichageAdvert.vue";

export default {
  name: "index",
  components: {
    AffichageAdvert,
  },
};
</script>

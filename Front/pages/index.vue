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

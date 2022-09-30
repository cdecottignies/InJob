<template>
  <div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ this.objet.title }}</p>
      <div>
        <b-button v-b-toggle.collapse-1>learn more</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
      </div>
    </div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ this.objet.title }}</p>
      <div>
        <b-button v-b-toggle.collapse-2>learn more</b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
      </div>
    </div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ this.objet.title }}</p>
      <div>
        <b-button v-b-toggle.collapse-3>learn more</b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
      </div>
    </div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ this.objet.title }}</p>
      <div>
        <b-button v-b-toggle.collapse-4>learn more</b-button>
        <b-collapse id="collapse-4" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
      </div>
    </div>
    <div class="card AffichageAdvert mx-5">
      <p class="card-text text-center">{{ this.objet.title }}</p>
      <div>
        <b-button v-b-toggle.collapse-5>learn more</b-button>
        <b-collapse id="collapse-5" class="mt-2">
          <p class="card-text">learn more working</p>
        </b-collapse>
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
      objet: [
        {
          title: "test",
          descshort: "",
          descslong: "",
          salary: Float32Array,
          place: [
            {
              key: "city",
            },
            {
              key: "street",
            },
          ],
          workingTime: null,
          contract: "",
          published: "",
        },
      ],
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        this.objet = result;
      });
    },
    GetAdvert(res) {
      api.GetAdvert(res).then((result) => {
        this.objet = result;
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
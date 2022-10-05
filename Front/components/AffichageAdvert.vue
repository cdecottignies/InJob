<template>
  <div>
    <div v-for="value in advertlist" :key="value.id">
      <div class="card AffichageAdvert mx-5">
        <h2 class="card-text text-center">{{ value.title }}</h2>
        <h4>
          {{ "contract: " + value.contract + " published: " + value.published }}
        </h4>
        <p>{{ value.descshort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${value.id}`">learn more</b-button>
          <b-collapse :id="`collapse-${value.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + value.salary }}<br />{{
                "working Time: " + value.workingTime
              }}<br />{{ value.desclong }}
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
export default {
  name: "AffichageAdvert",
  data() {
    return {
      advertlist: null,
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        const advertlist = result.map((r) => ({
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
        this.advertlist = advertlist;
      });
    },
  },
};
</script>
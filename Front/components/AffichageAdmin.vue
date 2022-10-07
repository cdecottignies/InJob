<template>
  <div>
    <div>
      <b-button v-on:click="tableactivate = 1" variant="primary"
        >Advertissements</b-button
      >
      <b-button v-on:click="tableactivate = 2" variant="secondary"
        >Users</b-button
      >
      <b-button v-on:click="tableactivate = 3" variant="warning"
        >Compagnies</b-button
      >
    </div>
    <b-table striped hover :items="advertlist"> </b-table>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";
const api = new Api();

export default {
  name: "AffichageAdmin",
  data() {
    return {
      tableactivate: 1,
      advertlist: null,
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    GetAllAdvert() {
      api.GetAllAdvert().then((result) => {
        const advertlist = result.map((result) => ({
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
        this.advertlist = advertlist;
      });
    },
  },
};
</script>
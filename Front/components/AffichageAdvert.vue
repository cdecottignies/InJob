<template>
  <div class="AffichageAdvert">
    <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <p class="card-text">{{ this.objet }}</p>
        <b-button v-b-toggle.collapse-1-inner size="sm"
          >Toggle Inner Collapse</b-button
        >
        <b-collapse id="collapse-1-inner" class="mt-2">
          <b-card>Hello!</b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
import Api from "@/services/ServiceMysql";

const api = new Api();

export default {
  name: "AffichageAdvert",
  props: {
    res: String,
  },
  data() {
    return {
      objet: [
        {
          title: "",
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
        this.objet=result;
   
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
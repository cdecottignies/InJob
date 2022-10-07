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
    <b-table
      :items="advertlist"
      :select-mode="selectMode"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    ></b-table>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
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
      selectMode: "single",
      selected: [],
    };
  },
  mounted() {
    this.GetAllAdvert();
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
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
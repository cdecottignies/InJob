<template>
  <div>
    <div v-for="value in advertlist" :key="value.id">
      <div class="card AffichageAdvert mx-5">
        <h2 class="card-text text-center">{{ value.title }}</h2>
        <h4>
          {{ "contract: " + value.contractType + " place: " + JSON.stringify(value.place) }}
        </h4>
        <p>{{ value.descShort }}</p>
        <div>
          <b-button v-b-toggle="`collapse-${value.id}`">learn more</b-button>
          <div>
            <b-button v-b-modal="`modal-${value.id}`">Apply</b-button>

            <b-modal :id="`modal-${value.id}`" title="BootstrapVue">
              <p class="my-4">Hello from modal!</p>
              <b-form @submit="onSubmit" @reset="onReset">
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

                <b-form-group
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </b-modal>
          </div>
          <b-collapse :id="`collapse-${value.id}`" class="mt-2">
            <p class="card-text">
              {{ "salaire: " + value.wages }}<br />{{
                "working Time: " + value.workingTime
              }}<br />{{ value.descLong }}
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
      form: {
        email: "",
        name: "",
      },
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
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
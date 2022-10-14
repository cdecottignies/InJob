<template>
  <div>
    <div>
      <b-button v-b-modal.modal-1>Add/Update</b-button>
      <b-modal id="modal-1" title="change Data" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="title" label-for="input-2">
            <b-form-input
              id="input-2"
              :v-model="advertlist.title"
              placeholder="enter title"
              :value="selected[0].title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="descShort"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              :v-model="advertlist.descShort"
              placeholder="Enter descShort:"
              :value="selected[0].descShort"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="descLong" label-for="input-4">
            <b-form-input
              id="input-4"
              :v-model="advertlist.descLong"
              placeholder="Enter descLong:"
              :value="selected[0].descLong"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="wages" label-for="input-5">
            <b-form-input
              id="input-5"
              :v-model="advertlist.wages"
              placeholder="Enter wages:"
              :value="selected[0].wages"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="place" label-for="input-6">
            <b-form-input
              id="input-6"
              :v-model="advertlist.place"
              placeholder="Enter place:"
              :value="selected[0].place"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="degree" label-for="input-7">
            <b-form-input
              id="input-7"
              :v-model="advertlist.degree"
              placeholder="Enter degree:"
              :value="selected[0].degree"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="workingTime"
            label-for="input-8"
          >
            <b-form-input
              id="input-8"
              :v-model="advertlist.workingTime"
              placeholder="Enter workingTime:"
              :value="selected[0].workingTime"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-9"
            label="workingLocation"
            label-for="input-9"
          >
            <b-form-input
              id="input-9"
              :v-model="advertlist.workingLocation"
              placeholder="Enter workingLocation:"
              :value="selected[0].workingLocation"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-10"
            label="contractType"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              :v-model="advertlist.contractType"
              placeholder="Enter contractType:"
              :value="selected[0].contractType"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
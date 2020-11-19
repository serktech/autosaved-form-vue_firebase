<template>
  <div id="app">

    <h3>Firebase Data</h3>
    {{ firebaseData }}

    <h3>Firebase Data</h3>
    {{ formData }}


    <form @submit.prevent="updateFirebase">

      <input type="text" name="name" v-model="formData.name"/>
      <input type="email" name="name" v-model="formData.email"/>
      <input type="tel" name="name" v-model="formData.phone"/>

      <button type="submit" v-if="state === 'modified'">Save Changes</button>

    </form>


  </div>
</template>

<script>
import {db} from './firebase';
//import { debounce } from 'debounce';

const documentPath = 'contacts/adam';

export default {

  data() {
    return {
      state: 'loading', // synced, modified, revoked, error
      firebaseData: null,
      formData: {},
      errorMessage: ''
    };
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
  methods: {
    async updateFirebase() {
      try {
        await db.doc(documentPath).set(this.formData);
        this.state = 'synced';
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = 'error';
      }
    }
  },

  created() {
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

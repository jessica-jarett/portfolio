<template>
  <v-form ref="form" v-model="valid">
    <v-layout>
      <v-flex xs12>
        <v-text-field
          label="Email"
          type="text"
          name="email"
          v-model="contactDetail['name']"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Message"
          type="text"
          name="message"
          v-model="contactDetail['message']"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 offset-md6 md6 text-xs-right>
        <button class="button" @click="validateAndSubmit">Submit</button>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>  
  export default {
    name: 'Contact',
    data() {
      return {
        valid: true,
        contactDetail: { email: "", message: "" },
      };
    },
    methods: {
      validateAndSubmit() {
        if (this.$refs.form.validate()) {
          this.disableSubmit = true;
          this.$recaptcha("contactus").then(() => {
            this.parseContactInfo(this.contactDetail);
            // parse & store data. Method can be housed in Vuex store
            // show confirmation message

            this.router.push("/");
            // navigate to home page after processing  data
          });
        }
      },
    },
  };
</script>
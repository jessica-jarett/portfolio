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
        <v-btn color="primary" @click="validateAndSubmit">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  import Vue from "vue";
  import { VueReCaptcha } from "vue-recaptcha-v3";
  
  Vue.use(VueReCaptcha, { siteKey: "your-google-recaptcha-site-key" });

  export default {
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
          this.$recaptcha("contactus").then((token) => {
            this.parseContactInfo(this.contactDetail);
            // parse & store data. Method can be housed in Vuex store
            // show confirmation message

            router.push("/");
            // navigate to home page after processing  data
          });
        }
      },
    },
  };
</script>
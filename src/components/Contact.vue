<template>
  <form class="contact-form" ref="form"  @submit.prevent="sendEmail">
    <div class="contact-form__container">  
        <label for="name">Name:</label>  
        <input
            type="text"
            name="name"
            id="name"
            v-model="name"
        />
    </div>
    <div class="contact-form__container">
        <label for="email">Email:</label>  
        <input
            type="text"
            name="email"
            id="email"
            v-model="email"
        />
    </div>
    <div class="contact-form__container">
        <label for="message">Message:</label>
        <textarea
            label="Message"
            type="text"
            id="message"
            name="message"
            v-model="message"
        />
    </div>
    <input id="send" class="button" type="submit" :disabled='isDisabled' :value="send">
  </form>
</template>

<script>  
import emailjs from 'emailjs-com';

  export default {
    name: 'Contact',
    data() {
        return {
            name: "",
            email: "",
            message: "",
            send: 'Send',
            isDisabled: false
        };
    },
    methods: {
      resetForm() {
          this.name = "";
          this.email = "";
          this.message = "";
          this.send = "Sent!";
          this.isDisabled = true;
      }, 
      sendEmail(e) {
        emailjs.sendForm('service_yfzq93h', 'template_8p9mnf7', e.target, 'user_LpznQK1EU3i0qMky0v6yx');
        this.resetForm();
      }
    }, 
  };
</script>

<style lang="scss">
    .contact-form {
        max-width: 300px;
        margin: auto;

        &__container {
            margin: 25px 0;
        }

        label {
            display: block;
            text-align: left;
        }

        input { 
            height: 2rem;
            padding:  0 12.5px;
        }

        textarea {
            @include font-roboto;
            height: 4rem;
            padding:  12.5px;
        }

        input, textarea {
            width: 100%;
            box-sizing: border-box;
        }

        .button {
            height: 3rem;
            font-size: 1rem;
        }
    }
</style>
<template>
  <form class="contact-form" ref="form"  @submit.prevent="sendEmail">
    <div class="g-recaptcha" data-sitekey="6LfQly0cAAAAAJWKxvlCna72kqtTgUPUSHzLNMl5"></div>
    <div class="contact-form__container">  
        <label for="name">Name:</label>  
        <input
            type="text"
            name="name"
            id="name"
        />
    </div>
    <div class="contact-form__container">
        <label for="email">Email:</label>  
        <input
            type="text"
            name="email"
            id="email"
        />
    </div>
    <div class="contact-form__container">
        <label for="message">Message:</label>
        <textarea
            label="Message"
            type="text"
            id="message"
            name="message"
        />
    </div>
    <input class="button" type="submit" value="Send">
  </form>
</template>

<script>  
import emailjs from 'emailjs-com';

  export default {
    name: 'Contact',
    methods: {
      sendEmail: (e) => {
        emailjs.sendForm('service_yfzq93h', 'template_8p9mnf7', e.target, 'user_LpznQK1EU3i0qMky0v6yx')
            .then(() => {
                alert('Message successfully sent!');
            }, (error) => {
                alert('Message failed to send:' + error.text);
            });
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
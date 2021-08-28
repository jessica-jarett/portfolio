<template>
    <footer>
        <div class="row">
            <div class="social">
                <a class="social-link" href="https://www.linkedin.com/in/jessicajarett/" rel="noreferrer" target="_blank">
                    <img :src="linkedin" width=30 height=30 alt="LinkedIn Profile" />
                </a>
            </div>
            <div class="copyright">
                Copyright &copy;{{ new Date().getFullYear() }}. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
    name: 'AppFooter',
    data() {
        return {
            linkedin: require('@/assets/images/icons/linkedin.svg')
        }
    },
    }
</script>

<style lang="scss"> 
    footer {
        padding: 200px 0 50px 0;
        background-image: url('../assets/images/backgrounds/footer-background.svg');
        background-size: cover;
        background-position: bottom;
        text-align: center;

        @media (min-width: 1025px) {
            margin-top: 100px;
        }
    }
</style>

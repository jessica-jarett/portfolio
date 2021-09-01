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
            linkedin: require('@/images/icons/linkedin.svg')
        }
    },
    }
</script>

<style lang="scss"> 
    footer {
        padding: 200px 0 50px 0;
        background-image: url('../images/backgrounds/footer-background.svg');
        background-size: cover;
        background-position: top;
        text-align: center;
    }
</style>

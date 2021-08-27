<template>
    <footer>
        <div class="row">
            <div class="social">
                <a class="social-link" href="https://www.linkedin.com/in/jessicajarett/" rel="noreferrer" target="_blank">
                    <img src="@/assets/images/icons/linkedin.svg" alt="LinkedIn Profile" />
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
    name: 'AppFooter'
    }
</script>

<style lang="scss"> 
    footer {
        padding: 200px 0 50px 0;
        margin-top: 100px;
        background-image: url('../assets/images/backgrounds/footer-background.svg');
        background-size: cover;
        background-position: bottom;
        text-align: center;
    }
</style>

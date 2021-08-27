<template>
    <div class="home-page">
        <section class="hero">
            <div class="row">
                <div class="hero__left">
                    <h1>
                        Hi, I'm Jess, <span class="break-large">Front-End Web Developer</span>
                    </h1>

                    <p>Thank you for visiting my page!</p>

                    <p>I’m currently relocating across the country to Portland, Oregon, and am searching for remote opportunities based in the Pacific Northwest.</p>

                    <a class="button" target="_blank" href="Resume-JJarett.pdf">
                        Download Resume
                    </a>
                </div>

                <div class="hero__right">
                    <div class="image">
                        <img src="@/assets/images/home/jess.png" alt="Jess Jarett" />
                    </div>
                </div>
            </div>
        </section>

        <section class="contact">
            <a name="contact"></a>
            <div class="row">
                <h2>Contact Information</h2>
            </div>
        </section>

         <!-- Not finished -- will add later
        <section class="blog-posts">
            <div class="row">
                <div class="flex justify-space-between">
                    <h2>Blog posts</h2>

                    <router-link to="/blog">View all</router-link>
                </div>

                <div class="blog-posts__container">
                    <blog-card />
                    <blog-card />
                </div>
            </div>
        </section>-->

        <section class="experience-posts">
            <div class="row">
                <h2>Featured Experience</h2>

                <experience-posts />
            </div>
        </section>
    </div>
</template>

<script>
    import ExperiencePosts from '@/components/ExperiencePosts.vue';

    export default {
        name: 'Home',
        components: {
            ExperiencePosts
        }
    }
</script>

<style lang="scss"> 
    .home-page {
        .hero {
            @media (min-width: 1025px) { 
                height: calc(100vh - 74px);
            }

            .row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
            }

            &__left {
                @media (min-width: 1025px) {
                    margin-right: 25px;
                }
            }

            &__right {
                @media (min-width: 1025px) {
                    margin-left: 25px;
                }

                .image {
                    display: block;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        top: 5px;
                        left: -5px;
                        background: transparentize($palette-accent, .75);
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                    }
                }
            }
        }

        .contact {
            padding: 50px 0;
            margin: 50px 0;
            background: transparentize($palette-accent, .75);
        }

        /* Not finished yet -- will add later 
        .blog-posts {
            padding: 50px 0;
            margin: 50px 0;
            background: transparentize($palette-accent, .75);

            &__container {
                margin: 0 -12.5px;
                display: flex;
            }

            .blog-card {
                flex: 1;
                margin: 0 12.5px;
            }
        } */
    }
</style>

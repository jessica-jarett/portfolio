<template>
    <div class="home-page">
        <section class="hero">
            <div class="row">
                <div class="hero__left">
                    <h1>
                        Hi, I'm Jess, <span class="break-large">Front-End Web Developer</span>
                    </h1>

                    <p>Thank you for visiting my page!</p>

                    <p>Here you will find some of my work examples, and a link to my Github to view the source code of this project. If you are interested in collaborating, please contact me using the form below.</p>

                    <a class="button" target="_blank" href="Resume.pdf">
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
                <h2>Contact Me</h2>

                <div class="flex">
                </div>
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
                padding-top: 74px;
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

                    h1 {
                        margin-bottom: 25px;
                    }

                    a {
                        margin-top: 12.5px;
                    }
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
            text-align: center;
            background: transparentize($palette-accent, .75);

            &-info {
                margin-top: 50px;

                h3 {
                    margin-bottom: 5px;
                }
            }
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

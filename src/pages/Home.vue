<template>
    <div class="home-page">
        <section class="hero">
            <div class="row">
                <div class="hero__left">
                    <h1>
                        Hi, I'm Jess, <span class="break-small break-large">Front-End Web Developer</span>
                    </h1>

                    <p>Thank you for visiting my page!</p>

                    <p>Here you will find some of my work examples, and a link to my Github to view the source code of this project. If you are interested in collaborating, please contact me using the form below.</p>

                    <a class="button" target="_blank" href="Resume.pdf">
                        Download Resume
                    </a>
                </div>

                <div class="hero__right">
                    <div class="image">
                        <img :src="imgJess" width=266 height=266 alt="Jess Jarett" />
                    </div> 
                </div>
            </div>
        </section>

        <section class="contact">
            <a name="contact"></a>
            <div class="row">
                <h2>Contact Me</h2>

                <contact />
            </div>
        </section>

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
    import Contact from '@/components/Contact.vue';

    export default {
        name: 'Home',
        components: {
            ExperiencePosts,
            Contact
        },
        data() {
            return {
                imgJess: require('@/images/home/jess.png')
            }
        }
    }
</script>

<style lang="scss"> 
    .home-page {
        .hero {
            padding-top: 75px;

            @media (min-width: 1025px) { 
                height: calc(100vh - 74px);
                min-height: 500px;
                max-height: 500px;
                padding-top: 74px;
            }

            .row {
                display: flex;
                flex-direction: column-reverse;
                text-align: center;

                @media (min-width: 1025px) {
                    text-align: left;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                }
            }

            &__left {
                margin-top: 25px;

                @media (min-width: 1025px) {
                    margin-right: 25px;
                    margin-top: 0;

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
                        background: transparentize($palette-accent, .75);
                        border-radius: 50%;
                        width: 266px;
                        height: 266px;
                        z-index: -1;
                        top: 12px;
                        left: 12px;

                        @media (min-width: 451px) and (max-width: 1024px) {
                            left: 50%;
                            transform: translateX(-140px);
                        }

                        @media (min-width: 1025px) {
                            width: 100%;
                            height: 100%;
                            top: 5px;
                            left: -5px;
                        }
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

        .experience-posts {
            h2 {
                @media (max-width: 1024px) {
                    text-align: center;
                }
            }
        }
    }
</style>

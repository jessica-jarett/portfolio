<template>
    <div>
        <div class="experience-post" v-for="experience in experienceList" :key="experience.id">
            <div class="experience-post__image">
                <img v-bind:src="loadImg(experience.image)" width=246 height=180 v-bind:alt="experience.title" />
            </div>
            <div class="experience-post__detail">
                <div class="experience-post__title">{{experience.title}}</div>

                <div class="experience-post__flex flex align-center">
                    <div class="experience-post__year">{{experience.year}}</div>
                    <div class="experience-post__tag">{{experience.tag}}</div>
                </div>

                <div class="experience-post__description" v-html="experience.description"></div>

                <router-link class="button experience-post__link" :to="'/featured-experience/' + experience.slug">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    const images = require.context('@/images/experience/')

    export default {
        name: 'ExperiencePosts',
        data() {
            return {
                experienceList: []
            };
        },
        methods: {
            getExperience() {
                fetch("experience.json")
                    .then(response => response.json())
                    .then(data => (this.experienceList = data));
            },
            loadImg(imgPath) {
                return images('./' + imgPath)
            }
        },
        mounted: function() {
            this.getExperience();
        }
    }
</script>

<style lang="scss"> 
    .experience-post {
        display: flex;
        margin: 50px 0;
        padding-bottom: 50px;

        @media (max-width: 450px) {
            flex-direction: column;
        }

        &:not(:last-of-type) {
            border-bottom: 1px solid $palette-dark;
        }

        &__image {
            background-size: cover;
            background-position: center;

            @media (min-width: 451px) {
                width: 246px;
                height: 180px;
            }

            img {
                border-radius: $app-border-radius;
                overflow: hidden;

                @media (max-width: 450px) {
                    width: 100%;
                }
            }
        }

        &__link {
            margin-top: 25px;
            
            &:hover {
                text-decoration: none;
            }
        }

        &__flex {
            @media (max-width: 450px) {
                margin: 12.5px 0 25px 0;
            }
        }

        &__detail {
            margin-top: 25px;

            @media (min-width: 451px) {
                margin-left: 25px;
                margin-top: 0;
            }

            .flex {
                @media (max-width: 450px) {
                    flex-direction: row;
                }
            }

            .experience-post {
                &__title {
                    font-size: 1.25rem;
                    font-weight: 600;

                    @media (min-width: 451px) {
                        margin-bottom: 25px;
                    }
                }

                &__year {
                    background: $palette-primary;
                    color: white;
                    font-weight: 600;
                    margin-right: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 16px;
                    font-size: 1.12rem;
                    padding: 0 10px;
                }

                &__description {
                    @media (min-width: 451px) {
                        margin-top: 25px;
                    }
                }
            } 
        }
    }
</style>

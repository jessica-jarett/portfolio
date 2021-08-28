<template>
    <div>
        <div class="experience-post" v-for="experience in experienceList" :key="experience.id">
            <div class="experience-post__image">
                <img v-bind:src="loadImg(experience.image)" v-bind:alt="experience.title" />
            </div>
            <div class="experience-post__detail">
                <div class="experience-post__title">{{experience.title}}</div>

                <div class="flex align-center">
                    <div class="experience-post__year">{{experience.year}}</div>
                    <div class="experience-post__tag">{{experience.tag}}</div>
                </div>

                <div class="experience-post__description">
                    {{experience.description}}
                </div>

                <router-link class="button experience-post__link" :to="'/featured-experience/' + experience.slug">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    const images = require.context('@/assets/images/experience/')

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

        &:not(:last-of-type) {
            border-bottom: 1px solid $palette-dark;
        }

        &__image {
            width: 246px;
            height: 180px;
            background-color: $palette-light;
            background-size: cover;
            background-position: center;
            border-radius: $app-border-radius;
        }

        &__link {
            margin-top: 25px;
            
            &:hover {
                text-decoration: none;
            }
        }

        &__detail {
            @media (min-width: 1025px) {
                margin-left: 25px;
            }

            .experience-post {
                &__title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 25px;
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
                    margin-top: 25px;
                }
            } 
        }
    }
</style>

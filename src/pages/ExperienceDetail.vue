<template>
    <div class="experience-detail">
        <div class="row">
            <div v-for="experienceDetail in experienceList" :key="experienceDetail.id">
                <template v-if="experienceDetail.slug == this.$route.params.slug">
                    <h1 class="experience-detail__title">{{experienceDetail.title}}</h1>

                    <div class="experience-detail__top">
                        <div class="experience-detail__image">
                            <img v-bind:src="loadImg(experienceDetail.image)" v-bind:alt="experienceDetail.title" />
                        </div>

                        <div> 
                            <div class="experience-detail__description">
                                <div class="experience-detail__website flex align-center">
                                    <h3>Link: </h3> 
                                    <a :href="experienceDetail.url" rel="noreferrer" target="_blank">{{experienceDetail.url}}</a>
                                </div>

                                <div class="experience-detail__tech flex align-center">
                                    <h3>Technology used: </h3> 
                                    <span>{{experienceDetail.technology}}</span>
                                </div>
                            </div>

                             <div class="flex align-center">
                                <div class="experience-detail__year">{{experienceDetail.year}}</div>
                                <div class="experience-detail__tag">{{experienceDetail.tag}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="experience-detail__body" v-html="experienceDetail.body"></div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    const images = require.context('@/assets/images/experience/')

    export default {
        name: 'ExperienceDetail',
        data() {
            return {
                experienceList: [],
            };
        },
        methods: {
            getExperience() {
                fetch("../experience.json")
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
    .experience-detail {
        margin: 100px 0;

        &__top {
            display: flex;
            border-bottom: 1px solid $palette-dark;
            padding-bottom: 50px;
            margin-bottom: 50px;
        }

        &__title {
            margin-bottom: 50px;
        }

        &__image {
            margin-right: 50px;
        }

        &__tech, &__website {
            margin-bottom: 25px;

            h3 {
                margin-right: 12.5px;
                margin-top: -7px;
            }

            * {
                margin-bottom: 0;
                line-height: 1;
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
            margin: 25px 0;
        }

        &__body {
            margin: 50px 0;
        }
    }
</style>

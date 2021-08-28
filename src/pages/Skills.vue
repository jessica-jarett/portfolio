<template>
    <div class="skills-page">
        <div class="row">
            <h1>Skills</h1>

            <h2>Language & Frameworks</h2>

            <div class="flex flex-wrap">
                <div @click="e => e.target.classList.add('active')" v-for="skill in skillsList.languages" :key="skill.id" class="skill">
                    <div class="skill__image">
                        <img v-bind:src="loadImg(skill.image)" v-bind:alt="skill.title" />
                    </div>

                    <div class="skill__modal">
                        <div class="skill__modal-close" @click="e => e.target.parentElement.parentElement.classList.remove('active')"></div>

                        <div class="skill__title">{{skill.title}}</div>

                        <div class="skill__image">
                            <img v-bind:src="loadImg(skill.image)" v-bind:alt="skill.title" />
                        </div>

                        <div class="skill__description" v-html="skill.description"></div>
                    </div>
                </div>
            </div>

            <h2>Other Skills</h2>

            <div class="flex flex-wrap">
                <div @click="e => e.target.classList.add('active')" v-for="skill in skillsList.other" :key="skill.id" class="skill">
                    <div class="skill__image">
                        <img v-bind:src="loadImg(skill.image)" v-bind:alt="skill.title" />
                    </div>

                    <div class="skill__modal">
                        <div class="skill__modal-close" @click="e => e.target.parentElement.parentElement.classList.remove('active')"></div>

                        <div class="skill__title">{{skill.title}}</div>

                        <div class="skill__image">
                            <img v-bind:src="loadImg(skill.image)" v-bind:alt="skill.title" />
                        </div>

                        <div class="skill__description" v-html="skill.description"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const images = require.context('@/assets/images/skills/')

    export default {
        name: 'Skills',
        data() {
            return {
                skillsList: []
            };
        },
        methods: {
            getSkills() {
                fetch("skills.json")
                    .then(response => response.json())
                    .then(data => (this.skillsList = data));
            },
            loadImg(imgPath) {
                return images('./' + imgPath)
            }
        },
        mounted: function() {
            this.getSkills();
        }
    }
</script>

<style lang="scss"> 
     .skills-page {
         margin: 100px 0;

         .flex {
            margin: -12.5px;
            margin-bottom: 50px;
         }

         .skill {
            background-color: transparentize($color: $palette-accent, $amount: .85);
            box-shadow: -4px 4px 10px rgba(150, 187, 187, 0.5);
            width: calc(25% - 25px);
            height: 212px;
            position: relative;
            margin: 12.5px;
            transition: .25s ease-in-out;
            cursor: pointer;
            position: relative;
            top: 0;
            
            &:hover {
                background-color: transparentize($color: $palette-accent, $amount: .5);
            }

            &:active {
                box-shadow: none;
                top: 2px;
            }

            &.active .skill__modal {
                visibility: visible;
                opacity: 1;
            }

            &__image {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &__title {
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 25px;
            }

             &__modal {
                 visibility: hidden;
                 opacity: 0;
                 transition: opacity .25s ease-in-out;
                 position: fixed;
                 max-width: $app-max-width;
                 background: white;
                 z-index: $app-z-index-modal;
                 left: 50%;
                 top: 50%;
                 transform: translate(-50%, -50%);
                 padding: 25px;
                 box-shadow: -1px 4px 10px rgba(0, 0, 0, 0.25);

                 @media (min-width: 1025px) {
                     width: $app-max-width;
                 }

                 &-close {
                     position: absolute;
                     right: 25px;
                     top: 25px;
                     width: 25px;
                     height: 25px;
                    background-size: cover;
                    background-image: url('../assets/images/icons/close.svg');

                    &:hover {
                        cursor: pointer;
                    }
                 }

                 .skill {
                     &__image {
                         position: relative;
                         top: auto;
                         left: auto;
                         transform: none;
                         width: 100px;
                         margin-bottom: 25px;
                     }
                 }
             }
         }
     }
</style>

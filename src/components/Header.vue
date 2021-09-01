<template>
    <header>
        <div class="row">
            <div class="flex justify-space-between align-center">
                <router-link to="/" class="logo">
                    <img :src="logo" width=50 height=50 alt="Go home" /> 
                </router-link>
                
                <div class="mobile-only hamburger" @click="toggleModal()"></div>

                <nav @click="toggleModal()">
                    <ul>    
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/featured-experience">Featured Experience</router-link>
                        </li>
                        <li>
                            <router-link to="/skills">Skills</router-link>
                        </li>
                        <li>
                            <a href="https://github.com/jessica-jarett/portfolio" rel="noreferrer" target="_blank">Github</a>
                        </li>
                    </ul> 
                </nav>
            </div>
        </div>
    </header> 
</template>

<script>
    import Headroom from "headroom.js";

    export default {
        name: 'AppHeader',
         data() {
            return {
                logo: require('@/images/logos/logo.png')
            }
        },
        mounted: function() {
            let header = document.querySelector("header");
            let headroom  = new Headroom(header);
            headroom.init();
        },
        methods: {
            toggleModal: function() {
                let body = document.querySelector('body');
                body.classList.toggle('modal-open');
            }
        }
    }
</script>

<style lang="scss"> 
    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }

    .headroom--pinned {
        transform: translateY(0%);
    }

    .headroom--unpinned {
        transform: translateY(-100%);
    }
    

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: $app-z-index-header;
        background: white;
    }

    nav {
        padding: 25px 0;

        ul {
            @include reset-list();
            text-align: right;

            li { 
                margin: 0 25px;

                a {
                    position: relative;
                    display: block;
                    cursor: pointer;
                    text-decoration: none;
                    color: $palette-dark;

                    @media (max-width: 1024px) {
                        font-size: 1.12rem;
                    }

                    @media (min-width: 1025px) {
                        &::after {
                            content: '';
                            left: 50%;
                            bottom: -5px;
                            height: 2px;
                            width: 0;
                            position: absolute;
                            transform: translateX(-50%);
                            transition: .25s ease-in-out;
                            background: $palette-highlight;
                        }
                    }


                    &:hover {
                        text-decoration: none;
                        
                        &::after {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

     //Mobile Menu
    @media (max-width: 1024px) {
        header {
            .flex {
                flex-direction: column;
                position: relative;
                min-height: 65px;

                > .logo {
                    position: absolute;
                    left: 0;
                    top: 9px;
                }
            }

            .hamburger {
                background-image: url('../images/icons/menu.svg');
                background-size: cover;
                background-position: center;
                width: 30px;
                height: 20px;
                position: absolute;
                right: 0;
                top: 23px;
            }

            nav {
                width: 100%;
                visibility: hidden;
                height: 0;
                opacity: 0;
                transition: opacity .25s ease-in-out;

                ul {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    margin: 50px 0 25px 0;

                    li {
                        margin: 12.5px;
                    }
                }            
            }
        }

        .modal-open {
            .hamburger {
                background-image: url('../images/icons/close.svg');
                width: 24px;
                height: 24px;
            }

            nav {
                height: auto;
                visibility: visible;
                opacity: 1;
            }
        }
    }
</style>

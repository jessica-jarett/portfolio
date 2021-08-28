<template>
    <header>
        <div class="row">
            <div class="flex justify-space-between align-center">
                <router-link to="/">
                    <img src="@/assets/images/logos/logo.png" width=50 alt="Go home" /> 
                </router-link>

                <nav>
                    <div class="mobile-only hamburger"></div>

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
                            <router-link to="/#contact">Contact</router-link>
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
        mounted: function() {
            let header = document.querySelector("header");
            let headroom  = new Headroom(header);
            headroom.init();
        }
    }
</script>

<style lang="scss"> 
    @media (min-width: 1025px) {
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
</style>
